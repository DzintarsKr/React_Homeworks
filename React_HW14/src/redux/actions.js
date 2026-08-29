// Определяем тип действия
export const SET_USER_INFO = 'SET_USER_INFO';

// Создаем и экспортируем action creator
export const setUserInfo = (userInfo) => {
  return {
    type: SET_USER_INFO,
    payload: userInfo, // Сюда будем передавать объект с новым именем и статусом
  };
};
