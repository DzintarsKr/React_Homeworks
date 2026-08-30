import styles from './styles.module.css';

// Импортируем логотипы социальных сетей из папки assets
import facebookLogo from '../../assets/facebook-logo.svg';
import snapchatLogo from '../../assets/snapchat-logo.svg';
import xLogo from '../../assets/x-logo.svg';

// 1. Определяем компонент Contacts с помощью стрелочной функции
const Contacts = () => {
  return (
    // Основной контейнер для секции контактов с тегом <section>
    <section className={styles.contactsSection}>
      
      {/* Первый <div>: заголовок, контактная информация и форма */}
      <div className={styles.mainContent}>
        <h1>Контакты</h1>
        
        {/* Список <ul> с номером телефона и email */}
        <ul>
          <li>Телефон: +1 (555) 019-2834</li>
          <li>Email: support@example.com</li>
        </ul>

        {/* Форма обратной связи */}
        <form className={styles.feedbackForm}>
          {/* Три поля ввода с плейсхолдерами для email, имени и сообщения */}
          <input type="email" placeholder="Ваша электронная почта" required />
          <input type="text" placeholder="Ваше имя" required />
          <input type="text" placeholder="Ваше сообщение" required />
          
          {/* Кнопка с типом submit и текстом "Отправить" */}
          <button type="submit">Отправить</button>
        </form>
      </div>

      {/* Второй <div>: ссылки на социальные сети */}
      <div className={styles.socialsContent}>
        <p>Найдите нас на:</p>
        
        {/* Три ссылки с изображениями импортированных логотипов */}
        <div className={styles.socialLinks}>
          <a href="https://facebook.com" target="_blank" rel="noreferrer">
            <img src={facebookLogo} alt="Facebook" />
          </a>
          <a href="https://snapchat.com" target="_blank" rel="noreferrer">
            <img src={snapchatLogo} alt="Snapchat" />
          </a>
          <a href="https://x.com" target="_blank" rel="noreferrer">
            <img src={xLogo} alt="X" />
          </a>
        </div>
      </div>

    </section>
  );
};

export default Contacts;
