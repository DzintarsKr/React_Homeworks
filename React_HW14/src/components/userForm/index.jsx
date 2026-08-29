import { useState } from 'react';
import { connect } from 'react-redux';
import { setUserInfo } from '../../redux/actions';
import styles from './styles.module.css'; // Импортируем модули стилей

const UserForm = ({ nameInStore, statusInStore, setUserInfo }) => {
  const [name, setName] = useState(nameInStore);
  const [status, setStatus] = useState(statusInStore);
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (name.trim().length < 2) {
      setError('Имя должно содержать минимум 2 символа!');
      return;
    }

    setError('');
    setUserInfo({ name: name.trim(), status: status.trim() });
  };

  return (
    <form onSubmit={handleSubmit} className={styles.formContainer}>
      <h3 className={styles.formTitle}>Редактировать профиль</h3>
      
      {error && <p className={styles.errorMessage}>{error}</p>}
      
      <label className={styles.label}>
        Новое имя:
        <input 
          type="text" 
          value={name} 
          onChange={(e) => setName(e.target.value)} 
          className={styles.input}
          placeholder="Введите имя"
        />
      </label>

      <label className={styles.label}>
        Новый статус:
        <input 
          type="text" 
          value={status} 
          onChange={(e) => setStatus(e.target.value)} 
          className={styles.input}
          placeholder="Введите статус"
        />
      </label>

      <button type="submit" className={styles.button}>
        Сохранить изменения
      </button>
    </form>
  );
};

const mapStateToProps = (state) => ({
  nameInStore: state.name,
  statusInStore: state.status,
});

const mapDispatchToProps = {
  setUserInfo,
};

const ConnectedUserForm = connect(mapStateToProps, mapDispatchToProps)(UserForm);
export default ConnectedUserForm;
