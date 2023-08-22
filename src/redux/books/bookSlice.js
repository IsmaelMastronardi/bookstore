import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  booksArr: [
    {
      item_id: 'item1',
      title: 'The Great Gatsby',
      author: 'John Smith',
      category: 'Fiction',
    },
    {
      item_id: 'item2',
      title: 'Anna Karenina',
      author: 'Leo Tolstoy',
      category: 'Fiction',
    },
    {
      item_id: 'item3',
      title: 'The Selfish Gene',
      author: 'Richard Dawkins',
      category: 'Nonfiction',
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
        id: Date.now(),
      };
      state.booksArr = state.booksArr.concat(bookItem);
    },
    removeBook: (state, action) => {
      const myId = action.payload;
      state.booksArr = state.booksArr.filter((item) => item.item_id !== myId);
    },
  },
});

export const { addBook, removeBook } = bookSlice.actions;
export default bookSlice.reducer;
