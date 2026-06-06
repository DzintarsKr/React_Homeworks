import './App.css'
import './components/Rating.css'
import Rating from './components/Rating';

function App() {

  return (
    <div>
      <h1>Оцените наш сервис</h1>
      {/* Используем компонент рейтинга */}
      <Rating />
    </div>
  );
}

export default App
