import { useState, useEffect } from 'react';
import styles from './styles.module.css';

function ListItems() {
  const [items, setItems] = useState([]);
  const [inputValue, setInputValue] = useState('');

  useEffect(() => {
    console.log("Компонент ListItems обновлен");
  }, [items]);

  const addItem = () => {
    if (inputValue.trim() !== '') {
      setItems([...items, inputValue]);
      setInputValue('');
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.inputGroup}>
        <input 
          type="text" 
          value={inputValue} 
          onChange={(e) => setInputValue(e.target.value)} 
          placeholder="Введите элемент..."
          className={styles.input}
        />
        <button onClick={addItem} className={styles.button}>
          Добавить
        </button>
      </div>
      
      <ul className={styles.list}>
        {items.map((item, index) => (
          <li key={index} className={styles.listItem}>
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ListItems;
