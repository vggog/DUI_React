# Сборка
FROM node:20-alpine AS build
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

# Продакшн сервер
FROM nginx:stable-alpine
# Копируем билд
COPY --from=build /app/dist /usr/share/nginx/html
# Копируем наш конфиг (ЗАМЕНЯЕМ стандартный конфиг nginx)
COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]