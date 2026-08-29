// Константа для типа экшена, чтобы избежать опечаток
export const SET_FILTER = 'SET_FILTER';

// Экшен-креатор (action creator)
export const setFilter = (filterText) => {
  return {
    type: SET_FILTER,
    payload: filterText,
  };
};
