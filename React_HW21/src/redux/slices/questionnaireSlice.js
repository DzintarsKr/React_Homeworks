import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  questions: [
    { 
      id: 1, 
      text: "Какой метод преобразует строку в объект JSON?", 
      options: ["JSON.stringify()", "JSON.parse()"], 
      correctAnswer: "JSON.parse()" 
    },
    { 
      id: 2, 
      text: "Что из этого является хуком жизненного цикла в React?", 
      options: ["useEffect()", "useState()"], 
      correctAnswer: "useEffect()" 
    },
    { 
      id: 3, 
      text: "Какое ключевое слово используется для создания переменной с блочной областью видимости, которую нельзя переопределить?", 
      options: ["const", "let"], 
      correctAnswer: "const" 
    },
    { 
      id: 4, 
      text: "Какой тип сборщика проектов используется в Vite по умолчанию?", 
      options: ["Webpack", "Rollup / Esbuild"], 
      correctAnswer: "Rollup / Esbuild" 
    },
    { 
      id: 5, 
      text: "Какое свойство CSS используется для создания сетки Flexbox?", 
      options: ["display: flex", "display: grid"], 
      correctAnswer: "display: flex" 
    }
  ],
  selectedAnswers: {}, // Храним выбранные ответы { 1: "JSON.parse()", ... }
  score: null,         // Итоговый балл
};

const questionnaireSlice = createSlice({
  name: 'questionnaire',
  initialState,
  reducers: {
    selectOption: (state, action) => {
      const { questionId, option } = action.payload;
      state.selectedAnswers[questionId] = option;
    },
    calculateScore: (state) => {
      let currentScore = 0;
      state.questions.forEach((q) => {
        if (state.selectedAnswers[q.id] === q.correctAnswer) {
          currentScore += 1;
        }
      });
      state.score = currentScore;
    }
  }
});

export const { selectOption, calculateScore } = questionnaireSlice.actions;
export default questionnaireSlice.reducer;
