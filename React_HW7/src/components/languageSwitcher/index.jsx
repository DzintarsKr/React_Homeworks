import { useContext } from 'react';
import { LanguageContext } from '../context/index';
import translations from '../translations';
import styles from './styles.module.css';

function LanguageSwitcher() {
  const { language, toggleLanguage } = useContext(LanguageContext);

  return (
    <button className={styles.button} onClick={toggleLanguage}>
      {translations[language].buttonText}
    </button>
  );
}

export default LanguageSwitcher;
