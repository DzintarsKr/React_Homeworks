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
8. Внутри компонента Rating определите возвращаемый JSX так, чтобы изображение рейтинга и кнопки располагались внутри контейнера <div>
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

Задание 2 *
Компонент "Список приглашенных"

1. Создайте новый компонент List.jsx.
2. Внутри него импортируйте useState из React.
3. Внутри компонента List используйте useState для создания состояния people, начальное значение которого будет массивом объектов людей с их именами и возрастами.
4. Верните JSX в компоненте List, который будет содержать:
        Список для отображения людей.
        Каждый элемент списка будет содержать имя и возраст человека.
        Для каждого элемента в списке предусмотрите кнопку удаления.
5. Добавьте обработчик события для кнопки удаления студента, который будет обновлять состояние people, удаляя соответствующего человека из списка.
6. Внутри компонента List определите возвращаемый JSX так, чтобы список с информацией о людях и кнопками удаления располагался внутри контейнера <div>
7. Создайте файл App.js.
8. В файле App.js импортируйте компонент List из файла List.jsx.
9. В компоненте App используйте компонент List.
10. Стилизуйте приложение на ваше усмотрение
11. Запустите ваше React-приложение и убедитесь, что компонент List отображается и позволяет пользователю удалять студентов из списка.

Данные для выполнения заданий:
const [people, setPeople] = useState([
    
    { id: 1, name: 'Иван', age: 20 },
    { id: 2, name: 'Мария', age: 22 },
    { id: 3, name: 'Алексей', age: 21 },
    { id: 4, name: 'Марина', age: 19 },
    { id: 5, name: 'Даша', age: 23 },
    { id: 6, name: 'Глеб', age: 24 },
    { id: 7, name: 'Дима', age: 18 },
    { id: 8, name: 'Гриша', age: 20 },
    { id: 9, name: 'Серафим', age: 21 }

]);

