import { useDispatch, useSelector } from 'react-redux';
import { selectOption } from '../../redux/slices/questionnaireSlice';
import styles from './styles.module.css';

const Question = ({ question }) => {
  const dispatch = useDispatch();
  const selectedAnswer = useSelector((state) => state.questionnaire.selectedAnswers[question.id]);

  return (
    <div className={styles.questionBlock}>
      <h3 className={styles.questionTitle}>{question.text}</h3>
      <div className={styles.optionsBlock}>
        {question.options.map((option, index) => (
          <label key={index} className={styles.optionLabel}>
            <input
              type="radio"
              name={`question-${question.id}`}
              value={option}
              checked={selectedAnswer === option}
              onChange={() => dispatch(selectOption({ questionId: question.id, option }))}
              className={styles.radioInput}
            />
            {option}
          </label>
        ))}
      </div>
    </div>
  );
};

export default Question;
