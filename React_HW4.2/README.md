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
# Задание 2 *
# Создадим приложение "Math Quiz" на React, которое предоставляет пользователю математическую задачу на сложение и оценивает его ответы, начисляя или снимая баллы за каждый правильный или неправильный ответ соответственно.

1. Инициализация проекта: Используйте create-react-app для создания начального шаблона вашего приложения. Это поможет вам быстро настроить рабочее окружение для разработки React-приложения.
2. Создание компонента MathQuiz: Компонент MathQuiz организует основную логику игры, включая генерацию случайных чисел для задачи, отображение текущего счёта и интеграцию с компонентом Answer для приёма и проверки ответов пользователя.
3. Создание компонента Answer: Компонент Answer предоставляет форму для ввода ответа пользователя, обрабатывает его ввод и отправляет введённую информацию на проверку. Он связан с компонентом MathQuiz через функцию updatePoints, которая вызывается при подаче формы.
4. Подготовка данных: В MathQuiz используются две переменные a и b, генерируемые случайным образом для формирования задачи на сложение. Эти данные и функция обновления счёта updatePoints передаются в Answer.
5. Управление состоянием: Используйте хук useState в компоненте MathQuiz для отслеживания текущего счёта пользователя. В компоненте Answer используйте useState для управления вводом пользователя.
6. Динамическое отображение: MathQuiz отображает задачу и текущий счёт, а Answer обеспечивает интерфейс для ввода ответа и отправляет его на проверку, после чего MathQuiz обновляет счёт.
7. Стилизация: Примените CSS стили для улучшения визуального представления компонентов.
8. Проверка функциональности: Запустите приложение и убедитесь, что данные корректно генерируются, ответы правильно обрабатываются, и счёт изменяется в зависимости от правильности ответов пользователя.
