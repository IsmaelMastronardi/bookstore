import { configureStore } from '@reduxjs/toolkit';
import bookStoreReducer from './books/bookSlice';
import CategoriesStoreReduder from './categories/categoriesSlice';

const store = configureStore({
  reducer: {
    bookStore: bookStoreReducer,
    categoriesStore: CategoriesStoreReduder,
  },
});

export default store;
