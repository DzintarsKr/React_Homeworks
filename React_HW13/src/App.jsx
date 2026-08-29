import Filter from './components/filter';
import UserList from './components/userList';
import './App.css'; // Просто прямой импорт без "styles from"

const App = () => {
  return (
    <div className="appContainer">
      <h1 className="title">Список пользователей</h1>
      <Filter />
      <UserList />
    </div>
  );
};

export default App;
