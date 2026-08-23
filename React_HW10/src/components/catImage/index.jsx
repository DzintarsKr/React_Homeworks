import { useState, useEffect } from 'react';
import axios from 'axios';
import styles from './styles.module.css';

function CatImage() {
  // Храним ссылку на изображение кошки
  const [catUrl, setCatUrl] = useState('');
  // Состояние загрузки (индикатор)
  const [loading, setLoading] = useState(true);

  // Асинхронная функция для получения случайного изображения
  const fetchCatImage = async () => {
    try {
      setLoading(true);
      const response = await axios.get('https://api.thecatapi.com/v1/images/search');
      
      // API возвращает массив объектов, берем url первого элемента
      if (response.data && response.data.length > 0) {
        setCatUrl(response.data[0].url);
      }
    } catch (error) {
      console.error('Ошибка при загрузке изображения кошки:', error);
    } finally {
      setLoading(false);
    }
  };

  // Загружаем изображение один раз при монтировании компонента
  useEffect(() => {
    fetchCatImage();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Мяу-галерея</h2>
      
      <div className={styles.imageWrapper}>
        {loading ? (
          <div className={styles.loader}>Загрузка...</div>
        ) : (
          <img src={catUrl} alt="Случайный котик" className={styles.image} />
        )}
      </div>

      <button className={styles.button} onClick={fetchCatImage}>
        Следующий котик
      </button>
    </div>
  );
}

export default CatImage;
