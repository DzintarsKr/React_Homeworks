import { Routes, Route } from 'react-router-dom';
import Contacts from './components/contacts';
import './App.css';

const App = () => {
  return (
    <div className="appContainer">
      <Routes>
        {/* Добавляем этот маршрут, чтобы компонент Contacts открывался на главной странице "/" */}
        <Route path="/" element={<Contacts />} />
        
        <Route path="/contacts" element={<Contacts />} />
      </Routes>
    </div>
  );
};

export default App;
