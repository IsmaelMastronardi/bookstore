import { configureStore } from '@reduxjs/toolkit';
import bookStoreReducer from './books/bookSlice';

console.log(bookStoreReducer);
// eslint-disable-next-line import/prefer-default-export
export const store = configureStore({
  reducer: {
    bookStore: bookStoreReducer,
  },
});
