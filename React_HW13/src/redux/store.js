import { createStore } from 'redux';
import { rootReducer } from './reducer';

// Создаем store на основе нашего редьюсера
const store = createStore(rootReducer);

export default store;
