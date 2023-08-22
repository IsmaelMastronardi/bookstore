import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  booksArr: [],
};

const bookSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {
    addBook: (state, { payload }) => {
      const bookItem = {
        title: payload.title,
        author: payload.author,
        // genre: payload.genre,
        id: Date.now(),
      };
      state.booksArr = state.booksArr.concat(bookItem);
    },
  },
});

export const { addBook } = bookSlice.actions;
export default bookSlice.reducer;
