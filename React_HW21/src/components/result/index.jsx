import { useSelector } from 'react-redux';
import styles from './styles.module.css';

const Result = () => {
  const score = useSelector((state) => state.questionnaire.score);

  if (score === null) return null;

  return (
    <div className={styles.scoreContainer}>
      <h2>Ваш результат: {score} из 5</h2>
    </div>
  );
};

export default Result;
