# ЭТАП 1: Сборка и установка зависимостей
FROM node:20-alpine AS builder

WORKDIR /app

# Копируем файлы манифеста
COPY package*.json ./

# Устанавливаем ВСЕ зависимости (включая devDependencies для сборки, если нужно)
RUN npm install

# Копируем исходный код
COPY . .

# ЭТАП 2: Финальный образ для запуска
FROM node:20-alpine

WORKDIR /app

# Копируем из первого этапа только то, что нужно для работы
COPY --from=builder /app/package*.json ./
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/index.js ./

# Указываем переменную окружения (хорошая практика)
ENV NODE_ENV=production

# Открываем порт, на котором работает приложение
EXPOSE 5000

# Запускаем через node, а не nodemon (в продакшене nodemon не нужен)
CMD ["node", "index.js"]