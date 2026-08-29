import { SET_FILTER } from './actions';

// Начальное состояние с именами на латинице
const initialState = {
  users: [
    { id: 1, name: 'John Doe', email: 'john@example.com' },
    { id: 2, name: 'Mary Smith', email: 'mary@example.com' },
    { id: 3, name: 'Alex Peterson', email: 'alex@example.com' },
    { id: 4, name: 'Elena Kozlova', email: 'elena@example.com' },
  ],
  filter: '', // Строка фильтрации
};

export const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_FILTER:
      return {
        ...state,
        filter: action.payload, // Обновляем строку фильтра
      };
    default:
      return state;
  }
};
