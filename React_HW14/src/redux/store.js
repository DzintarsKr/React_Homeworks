import { createStore } from 'redux';
import { userReducer } from './reducers';

// Создаем Redux store на основе нашего редьюсера
const store = createStore(userReducer);

export default store;
