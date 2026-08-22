import styles from './styles.module.css';

// Импортируем иконки из папки assets
import appleIcon from '../assets/appleIcon.svg';
import gIcon from '../assets/gIcon.svg';
import spotifyLogo from '../assets/spotifyLogo.svg';
import xIcon from '../assets/xIcon.svg';

function LoginCard() {
  return (
    <div className={styles.pageContainer}>
      {/* Логотип Spotify в левом верхнем углу */}
      <div className={styles.logoWrapper}>
        <img src={spotifyLogo} alt="Spotify" className={styles.logo} />
      </div>

      {/* Центральный контент */}
      <div className={styles.centerContent}>
        <h1 className={styles.title}>
          LIFE IS WASTED ON THE LIVING
        </h1>
        
        <p className={styles.subtitle}>
          Sign in<br />with
        </p>
        
        {/* Рамка с тремя интерактивными кнопками */}
        <div className={styles.socialContainer}>
          <button className={styles.socialButton} aria-label="Sign in with Apple">
            <img src={appleIcon} alt="Apple" className={styles.iconImg} />
          </button>
          
          <button className={styles.socialButton} aria-label="Sign in with Opera GX">
            <img src={gIcon} alt="Opera GX" className={styles.iconImg} />
          </button>
          
          <button className={styles.socialButton} aria-label="Sign in with X">
            <img src={xIcon} alt="X" className={styles.iconImg} />
          </button>
        </div>
      </div>
    </div>
  );
}

export default LoginCard;
