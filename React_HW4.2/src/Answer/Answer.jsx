/*Создание компонента Answer: Компонент Answer предоставляет форму для ввода ответа пользователя, обрабатывает его ввод и отправляет введённую информацию на проверку. Он связан с компонентом MathQuiz через функцию updatePoints, которая вызывается при подаче формы.
В компоненте Answer используйте useState для управления вводом пользователя.
Answer обеспечивает интерфейс для ввода ответа и отправляет его на проверку*/ 

import { useState } from "react";
import "./Answer.css";

function Answer({ a, b, updatePoints }) {
    const [userInput, setUserInput] = useState("");

    const handleSubmit = (event) => {
        event.preventDefault();

        if (userInput.trim() === "") {
            return;
        }

        updatePoints(userInput);
        setUserInput("");
    };

    const handleChange = (event) => {
        setUserInput(event.target.value);
    };

    return (
        <form className="answer-form" onSubmit={handleSubmit}>
            <input
                type="number"
                value={userInput}
                onChange={handleChange}
                placeholder="Введите ответ"
                autoFocus
            />
            <button type="submit">Проверить</button>
        </form>
    );
}

export default Answer;