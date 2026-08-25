import { useState } from 'react';
import './App.css';
import ValueDisplay from './components/valueDisplay/index';

function App() {
  const [textValue, setTextValue] = useState('');

  return (
    <div className="app-container">
      <h2 className="app-title">Домашнее задание 12</h2>
      
      <div className="input-group">
        <label htmlFor="text-input" className="input-label">
          Введите любой текст:
        </label>
        
        <input
          id="text-input"
          type="text"
          value={textValue}
          onChange={(e) => setTextValue(e.target.value)}
          placeholder="Начните писать здесь..."
          className="text-input"
        />
      </div>

      <hr className="separator" />

      <ValueDisplay value={textValue} />
    </div>
  );
}

export default App;
