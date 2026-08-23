import { useState, useEffect, useCallback } from 'react';
import axios from 'axios';
import styles from './styles.module.css';

function UserProfile() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchUser = useCallback(async () => {
    try {
      setLoading(true);
      setError(null);

      const response = await axios.get('https://randomuser.me/api/');

      if (response.data?.results?.[0]) {
        setUser(response.data.results[0]);
      } else {
        throw new Error('Некорректный ответ от API');
      }
    } catch (error) {
      console.error('Ошибка при загрузке данных:', error);
      setError('Не удалось загрузить пользователя');
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchUser();
  }, [fetchUser]);

  if (loading && !user) {
    return <div className={styles.loading}>Loading...</div>;
  }

  if (error && !user) {
    return (
      <div className={styles.error}>
        <p>{error}</p>
        <button className={styles.button} onClick={fetchUser}>
          Try Again
        </button>
      </div>
    );
  }

  return (
    <div className={styles.card}>
      <div className={styles.avatarContainer}>
        <img
          src={user.picture?.large}
          alt={`${user.name?.first ?? ''} ${user.name?.last ?? ''}`}
          className={styles.avatar}
        />
      </div>

      <h2 className={styles.name}>
        {user.name?.first} {user.name?.last}
      </h2>

      <p className={styles.info}>
        Email: {user.email}
      </p>

      <p className={styles.info}>
        Phone: {user.phone}
      </p>

      {error && <p className={styles.error}>{error}</p>}

      <button
        className={styles.button}
        onClick={fetchUser}
        disabled={loading}
      >
        {loading ? 'Loading...' : 'Load New User'}
      </button>
    </div>
  );
}

export default UserProfile;