import './App.css'
import './components/Rating.css'
import './components/List.css'
import Rating from './components/Rating';
import List from './components/List';

function App() {

  return (
    <div>
      <h1>Оцените наш сервис</h1>
      {/* Используем компонент рейтинга */}
      <Rating />
      <hr />
      {/* Отображаем список приглашенных */}
      <List />
    </div>
  );
}

export default App
