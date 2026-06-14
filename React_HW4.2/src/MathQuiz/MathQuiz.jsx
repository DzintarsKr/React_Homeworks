/*Компонент MathQuiz организует основную логику игры, включая генерацию случайных чисел для задачи, отображение текущего счёта и интеграцию с компонентом Answer для приёма и проверки ответов пользователя.
Подготовка данных: В MathQuiz используются две переменные a и b, генерируемые случайным образом для формирования задачи на сложение. Эти данные и функция обновления счёта updatePoints передаются в Answer.*/
import { useState } from "react";
import "./MathQuiz.css";
import Answer from "../Answer/Answer";

function MathQuiz() {
    const [score, setScore] = useState(0);
    const [a, setA] = useState(Math.floor(Math.random() * 10) + 1);
    const [b, setB] = useState(Math.floor(Math.random() * 10) + 1);

    const generateNewProblem = () => {
        setA(Math.floor(Math.random() * 10) + 1);
        setB(Math.floor(Math.random() * 10) + 1);
    };

    const updatePoints = (userAnswer) => {
        const correctAnswer = a + b;

        if (Number(userAnswer) === correctAnswer) {
            setScore((prev) => prev + 1);
        } else {
            setScore((prev) => prev - 1);
        }

        generateNewProblem();
    };

    return (
        <div className="math-quiz">
            <p className="score"><b>Ваши очки: {score}</b></p>

            <div className="problem"><b>{a} + {b} = ?</b></div>

            <Answer a={a} b={b} updatePoints={updatePoints} />
        </div>
    );

}

export default MathQuiz;