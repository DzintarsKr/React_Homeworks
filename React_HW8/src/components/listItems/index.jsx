import { useState } from 'react';

function ListItems() {
  const [items, setItems] = useState([]);
  const [inputValue, setInputValue] = useState('');

  const addItem = () => {
    if (inputValue.trim() !== '') {
      setItems([...items, inputValue]);
      setInputValue('');
    }
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
      <div style={{ display: 'flex', gap: '10px' }}>
        <input 
          type="text" 
          value={inputValue} 
          onChange={(e) => setInputValue(e.target.value)} 
          placeholder="Введите элемент..."
          style={{ padding: '8px', fontSize: '14px' }}
        />
        <button onClick={addItem} style={{ padding: '8px 15px', cursor: 'pointer' }}>
          Добавить
        </button>
      </div>
      
      <ul style={{ 
        display: 'flex', 
        flexDirection: 'column', 
        gap: '8px', 
        paddingLeft: '20px',
        listStyleType: 'disc' 
      }}>
        {items.map((item, index) => (
          <li key={index} style={{ fontSize: '16px', color: '#333' }}>
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ListItems;
