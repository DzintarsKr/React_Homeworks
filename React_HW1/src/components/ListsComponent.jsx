function ListsComponent() {
    return (
        <div>
            <h2>Списки</h2>

            <h3>Маркированный список:</h3>
            <ul>
                <li>Главный пункт 1</li>
                <li>
                    Главный пункт 2 (с вложенным)
                    <ul>
                        <li>Вложенный элемент списка</li>
                    </ul>
                </li>
            </ul>

            <h3>Нумерованный список:</h3>
            <ol>
                <li>Первый шаг</li>
                <li>
                    Второй шаг (с вложенным)
                    <ol>
                        <li>Подпункт второго шага</li>
                    </ol>
                </li>
            </ol>
        </div>
    );
}
export default ListsComponent;