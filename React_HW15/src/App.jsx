import { useState, useCallback, useMemo } from 'react'; 
import UserList from './components/userList';
import './App.css';

const userList = [
  { id: 1, name: 'Alice Johnson' },
  { id: 2, name: 'Bob Smith' },
  { id: 3, name: 'Charlie Brown' },
  { id: 4, name: 'David Miller' },
  { id: 5, name: 'Eva Davis' }
];

const App = () => {
  const [filter, setFilter] = useState('');

  // Мемоизируем функцию фильтрации
  const memoizedFilterUsers = useCallback((searchText) => {
    return userList.filter((user) =>
      user.name.toLowerCase().includes(searchText.toLowerCase())
    );
  }, []);

  // Мемоизируем сам отфильтрованный список с помощью useMemo.
  // В зависимости передаем состояние filter и мемоизированную функцию.
  const filteredUsers = useMemo(() => {
    return memoizedFilterUsers(filter);
  }, [filter, memoizedFilterUsers]);

  return (
    <div className="appWrapper">
      <h1 className="mainTitle">Оптимизация списка</h1>
      
      <div className="searchContainer">
        <input
          type="text"
          placeholder="Поиск пользователей..."
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
          className="searchInput"
        />
      </div>

      {/* Передаем мемоизированный список */}
      <UserList users={filteredUsers} />
    </div>
  );
};

export default App;
