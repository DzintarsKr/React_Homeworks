# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.

## Домашнее задание 1
1. Создать новый проект при помощи create-react-app.
2. Подготовить проект к работе - удалите все лишние файлы, создайте необходимые директории.
3. Создать новый компонент, назовите его ImageComponent, сделайте так, чтобы он возвращал изображение.
4. Создать новый компонент, назовите его VideoComponent, он должен возвращать видео.
5. Создать новый компонент, назовите его ParagraphsComponent, пусть он возвращает несколько параграфов текста с заголовками.
6. Создать новый компонент, назовите его ListsComponent, сделайте так, чтобы он возвращал два списка: упорядоченный и неупорядоченный. Каждый список должен содержать хотя бы один вложенный в него элемент.
7. Экспортировать каждый компонент и импортируйте в корневой компонент App.
8. Запустить приложение, проверьте результат.