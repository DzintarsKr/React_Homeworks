import { SET_USER_INFO } from './actions';

// Начальное состояние с именем и статусом пользователя
const initialState = {
  name: 'Guest',
  status: 'Offline',
};

// Создаем и экспортируем редьюсер
export const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USER_INFO:
      return {
        ...state,
        ...action.payload, // Обновляем имя и/или статус из payload
      };
    default:
      return state;
  }
};
