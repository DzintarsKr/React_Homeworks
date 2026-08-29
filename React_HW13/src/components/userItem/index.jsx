import styles from './styles.module.css';

const UserItem = ({ user }) => {
  return (
    <li className={styles.userItem}>
      <span className={styles.userName}>{user.name}</span>
      <span className={styles.userEmail}>{user.email}</span>
    </li>
  );
};

export default UserItem;
