import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const url = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/z5kjKgi8wFsiuCStbu32/books';

export const fetchBooks = createAsyncThunk(
  'books/booksBooksSlice',
  async () => {
    try {
      const response = await axios.get(url);
      const data = await response.data;
      return data;
    } catch (error) {
      throw new Error(error);
    }
  },
);

export const createBook = createAsyncThunk('books/createBook', async (book) => {
  try {
    await axios.post(url, book);
    return book;
  } catch (error) {
    throw new Error(error);
  }
});

export const deleteBook = createAsyncThunk('books/deletbook', async (id) => {
  const delId = `${url}/${id}`;
  try {
    await axios.delete(delId);
  } catch (error) {
    throw new Error(error);
  }
  return id;
});

const initialState = {
  booksArr: [],
  newArr: [],
  status: 'loadging',
  error: null,
};

const bookSlice = createSlice({
  name: 'booksArr',
  initialState,
  reducers: {
    removeBook: (state, action) => {
      const myId = action.payload;
      const deleteId = `${url}/${myId}`;
      fetch(deleteId, {
        method: 'DELETE',
        body: JSON.stringify({
          item_id: myId,
        }),
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
      });
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchBooks.pending, (state) => {
      state.status = 'loading';
    });
    builder.addCase(fetchBooks.rejected, (state, action) => {
      state.status = 'error';
      state.error = `${action.error.message}. Error getting your books`;
    });
    builder.addCase(fetchBooks.fulfilled, (state, action) => {
      state.status = 'succeeded';
      state.booksArr = action.payload;
      state.error = '';
    });
    builder.addCase(createBook.rejected, (state, action) => {
      state.status = 'createError';
      state.error = `${action.error.message}. Error uploading the new book.`;
    });
    builder.addCase(createBook.fulfilled, (state, action) => {
      state.status = 'succeeded';
      const pay = action.payload;
      const newKey = pay.item_id;
      state.booksArr[newKey] = [{
        title: pay.title,
        author: pay.author,
        category: pay.category,
      }];
      state.error = '';
    });
    builder.addCase(deleteBook.fulfilled, (state, action) => {
      state.status = 'succeeded';
      delete state.booksArr[action.payload];
    });
    builder.addCase(deleteBook.rejected, (state, action) => {
      state.status = 'deleteError';
      state.error = `${action.error.message}. Error Deleting the book`;
    });
  },
});

export const { removeBook } = bookSlice.actions;
export default bookSlice.reducer;
