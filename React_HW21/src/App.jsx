import { useSelector, useDispatch } from 'react-redux';
import Question from './components/question';
import Result from './components/result';
import { calculateScore } from './redux/slices/questionnaireSlice';
import './App.css';

const App = () => {
  const dispatch = useDispatch();
  const questions = useSelector((state) => state.questionnaire.questions);

  const handleSubmit = () => {
    dispatch(calculateScore());
  };

  return (
    <div className="questionnaireApp">
      <h1 className="mainHeading">Questionnaire</h1>
      
      <div className="questionsContainer">
        {questions.map((question) => (
          <Question key={question.id} question={question} />
        ))}
      </div>

      <button className="submitBtn" onClick={handleSubmit}>
        Submit
      </button>

      <Result />
    </div>
  );
};

export default App;
