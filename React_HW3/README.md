# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.

Домашняя работа 3

Задание 1
Создадим простое приложение с возможностью менять рейтинг.

1. Создайте новый файл Rating.jsx.
2. Внутри файла Rating.jsx импортируйте useState из React.
3. Создайте функциональный компонент Rating.
4. Внутри компонента Rating используйте useState для создания состояния ratingValue, начальное значение которого будет равно 0.
5. Определите массив ratingList, содержащий ссылки на изображения для разных значений рейтинга.
6. Верните JSX в компоненте Rating, который будет содержать:
    Изображение текущего рейтинга из массива ratingList.
    Кнопки с различными значениями рейтинга (например, "Плохо", "Приемлемо", "Хорошо", "Отлично").
7. Для каждой кнопки установите обработчик события onClick, который будет обновлять состояние ratingValue в соответствии с выбранным значением рейтинга.
8. Внутри компонента Rating определите возвращаемый JSX так, чтобы изображение рейтинга и кнопки располагались внутри контейнера <div>.
9. В файле App.js импортируйте компонент Rating из файла Rating.jsx.
10. В компоненте App используйте компонент Rating.
11. Стилизуйте приложение на ваш вкус: задайте цвет и размер кнопкам, задайте размер изображениям и т.п.
12. Запустите ваше React-приложение и убедитесь, что компонент Rating отображается и работает корректно, позволяя пользователю выбирать разные значения рейтинга.

Данные для выполнения заданий:
const ratingList = [

    'https://www.clipartmax.com/middle/m2i8H7A0A0Z5A0K9_5-star-rating-png',

    'https://www.clipartmax.com/png/small/67-676956_out-of-3-out-of-5-star-rating.png',

    'https://www.clipartmax.com/png/small/73-731815_stars-clipart-2-5-star-rating.png',

    'https://www.clipartmax.com/png/small/297-2970338_rating-2-out-of-5-gold-stars.png'

  ]

