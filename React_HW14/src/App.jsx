import { Provider } from 'react-redux';
import store from './redux/store';
import User from './components/user';
import UserForm from './components/userForm';
import './App.css'; 

const App = () => {
  return (
    <Provider store={store}>
      <div style={{ maxWidth: '400px', margin: '40px auto', padding: '20px', fontFamily: 'sans-serif' }}>
        <h1 style={{ textAlign: 'center' }}>Управление состоянием</h1>
        {/* Отображение информации о пользователе */}
        <User />
        {/* Форма для изменения данных */}
        <UserForm />
      </div>
    </Provider>
  );
};

export default App;
