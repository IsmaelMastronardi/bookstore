import { configureStore } from '@reduxjs/toolkit';
import bookStoreReducer from './books/bookSlice';

const store = configureStore({
  reducer: {
    bookStore: bookStoreReducer,
  },
});

export default store;
