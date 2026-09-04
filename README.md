# Wordly

Веб-гра типу Wordle - вгадай слово за 6 спроб. Pet-проект на React + Node/Express + MongoDB.

## Стек

**Frontend:** React, Vite, Tailwind CSS, Material UI
**Backend:** Node.js, Express, MongoDB (Mongoose)
**Інструменти:** ESLint, Prettier, Husky, Docker, Postman

## Режими (в розробці)

- Гостьовий режим (без реєстрації)
- Реєстрація + статистика профілю
- Daily Challenge (слово дня, спільне для всіх гравців)
- Скорборд

## Запуск локально

### Через Docker (рекомендовано)

```bash
docker-compose up --build
```

- Клієнт: http://localhost:5173
- Сервер: http://localhost:5000/api/health
- MongoDB: localhost:27017

### Без Docker (вручну)

Термінал 1 - клієнт:

```bash
cd client
npm install
npm run dev
```

Термінал 2 - сервер:

```bash
cd server
npm install
npm run dev
```

(знадобиться локальна MongoDB або підключення до MongoDB Atlas)

### Перший раз після клонування репозиторію

```bash
npm install
```

у корені - активує git pre-commit хуки (Husky), які лінтять код перед кожним комітом.

## Структура проекту

```
wordly/
├── client/    — React-застосунок
├── server/    — Express API
└── docker-compose.yml
```

## Скрипти

| Команда (в `client/` або `server/`) | Що робить             |
| ----------------------------------- | --------------------- |
| `npm run dev`                       | Запуск dev-сервера    |
| `npm run lint`                      | Перевірка ESLint      |
| `npm run format`                    | Форматування Prettier |
