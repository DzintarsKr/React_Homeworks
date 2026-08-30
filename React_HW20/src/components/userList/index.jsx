import { useSelector } from 'react-redux';
import styles from './styles.module.css';

const UserList = () => {
  // Извлекаем массив пользователей из состояния Redux (стейт -> редьюсер users -> массив list)
  const users = useSelector((state) => state.users.list);

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Список пользователей</h2>
      <ul className={styles.list}>
        {users.map((user) => (
          <li key={user.id} className={styles.listItem}>
            <div className={styles.userInfo}>
              <span className={styles.userName}>{user.name}</span>
              <span className={styles.userEmail}>{user.email}</span>
            </div>
            <span className={styles.userRole}>{user.role}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UserList;
