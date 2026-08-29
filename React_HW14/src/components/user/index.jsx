import { connect } from 'react-redux';
import styles from './styles.module.css'; // Импортируем модули стилей

const User = ({ name, status }) => {
  // Определяем класс для статуса в зависимости от его значения
  const isOffline = status.toLowerCase() === 'offline';
  const statusClassName = `${styles.statusBadge} ${isOffline ? styles.statusOffline : styles.statusOnline}`;

  return (
    <div className={styles.card}>
      <h2 className={styles.title}>Профиль пользователя</h2>
      <div className={styles.infoWrapper}>
        <p className={styles.text}>
          <strong className={styles.label}>Имя:</strong>{' '}
          <span className={styles.value}>{name}</span>
        </p>
        <p className={styles.text}>
          <strong className={styles.label}>Статус:</strong>{' '}
          <span className={statusClassName}>{status}</span>
        </p>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  name: state.name,
  status: state.status,
});

const ConnectedUser = connect(mapStateToProps)(User);
export default ConnectedUser;
