import { useContext } from 'react';
import { LanguageContext } from '../context/index';
import translations from '../translations';
import styles from './styles.module.css';

function TextComponent() {
  const { language } = useContext(LanguageContext);

  return (
    <h1 className={styles.text}>
      {translations[language].message}
    </h1>
  );
}

export default TextComponent;
