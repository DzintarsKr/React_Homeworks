# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.

## Домашняя работа 4
# Задание 1
# Создадим приложение "City Cards" на React

1. Инициализация проекта: Используйте create-react-app для создания начального шаблона вашего приложения. Произведите предварительную настройку проекта
2. Создание компонента CitySelector: Разработайте компонент для выбора города. Этот компонент должен включать в себя форму с выпадающим списком, который позволяет выбирать из предопределенного списка городов.
3. Создание компонента CityCard: Сосредоточьтесь на создании карточки города, которая будет отображать изображение, описание и интересные факты о выбранном городе. 
4. Подготовка данных: В компоненте CityCelector определите массив объектов в JavaScript, содержащий информацию о каждом городе, включая название, описание, изображение и факты.
5. Управление состоянием: В компоненте App спользуйте хук состояния useState, чтобы отправлять данные о выбранном городе в отображаемую карточку.
6. Динамическое отображение: Напишите логику, которая позволит при выборе города в CitySelector отображать соответствующую CityCard.
7. Стилизация: Примените стили к вашим компонентам.
8. Проверка функциональности: Запустите приложение, убедитесь, что все части интерфейса работают корректно и данные правильно обновляются при выборе города.