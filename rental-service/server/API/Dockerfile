FROM mcr.microsoft.com/dotnet/aspnet:10.0 AS base
USER $APP_UID
WORKDIR /app
EXPOSE 8080
EXPOSE 8081

FROM mcr.microsoft.com/dotnet/sdk:10.0 AS build
ARG BUILD_CONFIGURATION=Release
WORKDIR /src
COPY ["rental-service/server/API/API.csproj", "rental-service/server/API/"]
RUN dotnet restore "rental-service/server/API/API.csproj"
COPY . .
WORKDIR "/src/rental-service/server/API"
RUN dotnet build "./API.csproj" -c $BUILD_CONFIGURATION -o /app/build

FROM build AS publish
ARG BUILD_CONFIGURATION=Release
RUN dotnet publish "./API.csproj" -c $BUILD_CONFIGURATION -o /app/publish /p:UseAppHost=false

FROM base AS final
USER root
WORKDIR /app
COPY --from=publish /app/publish .

# Создаем директорию для статических файлов и даем права на запись
RUN mkdir -p /app/wwwroot/static && chown -R $APP_UID:$APP_UID /app/wwwroot

USER $APP_UID
ENTRYPOINT ["dotnet", "API.dll"]
