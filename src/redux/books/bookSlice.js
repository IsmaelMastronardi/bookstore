import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const url = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/z5kjKgi8wFsiuCStbu32/books';

export const fetchBooks = createAsyncThunk(
  'books/booksBooksSlice',
  // eslint-disable-next-line consistent-return
  async () => {
    try {
      const response = await axios.get(url);
      const data = await response.data;
      return data;
    } catch (error) {
      console.log(error);
    }
  },
);

export const createBook = createAsyncThunk('books/createBook', async (book) => {
  try {
    const response = await axios.post(url, book);
    console.log(response);
    return book;
  } catch (error) {
    return error;
  }
});

export const deleteBook = createAsyncThunk('books/deletbook', async (id) => {
  const delId = `${url}/${id}`;
  try {
    await axios.delete(delId);
  } catch (error) {
    console.log(error);
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
    builder.addCase(fetchBooks.fulfilled, (state, action) => {
      state.status = 'succeeded';
      state.booksArr = action.payload;
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
    });
    builder.addCase(deleteBook.fulfilled, (state, action) => {
      state.status = 'succeeded';
      delete state.booksArr[action.payload];
    });
  },
});

// const myId = 'z5kjKgi8wFsiuCStbu32';
// const url = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/z5kjKgi8wFsiuCStbu32/books';
// fetch(url, {
//   method: 'GET',
//   headers: {
//     'Content-type': 'application/json; charset=UTF-8',
//   },
// })
//   .then((response) => (response.text()))
//   .then((text) => console.log(text));

// fetch(url, {
//   method: 'POST',
//   body: JSON.stringify({
//     item_id: 121321522,
//     title: 'stormligth Archive',
//     author: 'Branderson',
//     category: 'Medieval Fantasy',
//   }),
//   headers: {
//     'Content-type': 'application/json; charset=UTF-8',
//   },
// })
//   .then((res) => res.text())
//   .then((text) => console.log(text));

// const deleteId = `${url}/1692888643585a`;
// fetch(deleteId, {
//   method: 'DELETE',
//   body: JSON.stringify({
//     item_id: '1692888643585a',
//   }),
//   headers: {
//     'Content-type': 'application/json; charset=UTF-8',
//   },
// })
//   .then((res) => res.text())
//   .then((text) => console.log(text));

export const { removeBook } = bookSlice.actions;
export default bookSlice.reducer;
