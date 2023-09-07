## Оглавление

- [Обзор проекта](https://github.com/Ylquiorra/Todo-list#обзор-проекта)
- [Стек](https://github.com/Ylquiorra/Todo-list#стек)
- [Запуск проекта](https://github.com/Ylquiorra/Todo-list#запуск-проекта)
- [Скрипты](https://github.com/Ylquiorra/Todo-list#скрипты)
- [Тесты](https://github.com/Ylquiorra/Todo-list#тесты)

----

## Обзор проекта

Оценить проект можите по [ссылке](https://todo-list-ylquiorra.vercel.app/)

Проект представляет из себя pet-проект для демонстрации своих навыков
работадателю.

----

## Стек

| Стэк         | Технологии                                             |
|--------------|--------------------------------------------------------|
| Клиентская часть | TypeScript, React, SCSS                                |
| Сборщики | Webpack                                                |
| Тестирование | React Testing Library (+user event), Cypress(e2e), Jest(unit) |
| Линтеры/Форматирование | ESLint, StyleLint, Prettier                            |


----

### Запуск проекта

```
npm install - устанавливаем зависимости
npm start - запуск проекта
```
```
npm run test:unit - тестирование по Jest\RTL(unit, int)
npm run test:e2e - тестирование по Cypress(e2e)
```

----

### Скрипты

- `npm start` - Запуск frontend проекта на webpack dev server
- `npm run prettier` - Исправление prettier
- `npm run lint:ts` - Проверка ts файлов линтером
- `npm run lint:ts:fix` - Исправление ts файлов линтером
- `npm run lint:scss` - Проверка scss файлов style линтером
- `npm run lint:scss:fix` - Исправление scss файлов style линтером
- `npm run lint:all` - Проверка ts и scss файлов линтерами
- `npm run lint:all:fix` - Исправление ts и scss файлов линтерами

- `npm run test` - Запуск unit тестов с jest
- `npm run test:e2e` - Запуск e2e тестов с Cypress

----

### Тесты

В проекте используются 3 вида тестов:
1) Обычные unit тесты на jest - `npm run test`
2) Тесты на компоненты с React testing library -`npm run test`
3) e2e тестирование с Cypress `npm run test:e2e`

----
