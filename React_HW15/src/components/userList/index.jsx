import React from 'react';
import styles from './styles.module.css';

const UserList = ({ users }) => {
  // Для проверки можно добавить console.log. 
  // лог срабатывает только тогда, когда меняется результат фильтра.
  console.log('UserList отрендерился'); 

  return (
    <ul className={styles.listContainer}>
      {users.map((user) => (
        <li key={user.id} className={styles.listItem}>
          {user.name}
        </li>
      ))}
    </ul>
  );
};

// Оборачиваем компонент в React.memo перед экспортом
export default React.memo(UserList);
