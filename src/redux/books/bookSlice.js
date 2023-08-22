import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  booksArr: [
    {
      title: 'stormligth',
      author: 'Brandon Sanderson',
      genre: 'Fantasy',
      id: 1,
    },
    {
      title: 'Harry Potter',
      author: 'J.K. Rawling',
      genre: 'Fantasy',
      id: 2,
    },
  ],
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
    removeBook: (state, action) => {
      const myId = action.payload;
      state.booksArr = state.booksArr.filter((item) => item.id !== myId);
    },
  },
});

export const { addBook, removeBook } = bookSlice.actions;
export default bookSlice.reducer;
