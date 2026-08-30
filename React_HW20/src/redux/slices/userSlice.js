import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  list: [
    { id: 1, name: 'Alice Johnson', email: 'alice@example.com', role: 'Admin' },
    { id: 2, name: 'Bob Smith', email: 'bob@example.com', role: 'User' },
    { id: 3, name: 'Charlie Brown', email: 'charlie@example.com', role: 'Moderator' },
    { id: 4, name: 'David Miller', email: 'david@example.com', role: 'User' }
  ]
};

const userSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {}
});

export default userSlice.reducer;
