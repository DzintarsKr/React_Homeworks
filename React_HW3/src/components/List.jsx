import { useState } from "react";

function List() {
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

    // Функция для удаления человека из списка по его id
    const deletePerson = (id) => {
        // Фильтруем массив, оставляя только тех, чей id не совпадает с удаляемым
        const updatedPeople = people.filter(person => person.id !== id);
        setPeople(updatedPeople);
    };

    return (
        <div className="list-container">
            {/* Динамически выводим текущее количество людей */}
            <h2>Список приглашенных ({people.length})</h2>

            {/* Условный рендеринг: если список пуст, показываем сообщение */}
            {people.length === 0 ? (
                <p className="empty-message">Список пуст</p>
            ) : (
                <ul className="people-list">
                    {people.map((person) => (
                        <li key={person.id} className="person-item">
                            <span className="person-info">
                                <strong>{person.name}</strong>, {person.age} лет
                            </span>
                            <button
                                className="delete-button"
                                onClick={() => deletePerson(person.id)}
                            >
                                Удалить
                            </button>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
}

export default List;