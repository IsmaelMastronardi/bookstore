import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

const url = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/z5kjKgi8wFsiuCStbu32/books';

export const fetchBooks = createAsyncThunk(
  'books/booksBooksSlice',
  async () => {
    const response = await fetch(url);
    const data = await response.json();
    return data;
  },
);

const initialState = {
  booksArr: [
    // {
    //   item_id: 'item1',
    //   title: 'The Great Gatsby',
    //   author: 'John Smith',
    //   category: 'Fiction',
    // },
    // {
    //   item_id: 'item2',
    //   title: 'Anna Karenina',
    //   author: 'Leo Tolstoy',
    //   category: 'Fiction',
    // },
    // {
    //   item_id: 'item3',
    //   title: 'The Selfish Gene',
    //   author: 'Richard Dawkins',
    //   category: 'Nonfiction',
    // },
  ],
  status: 'loading',
  error: null,
};

const bookSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {
    addBook: (state, { payload }) => {
      const bookItem = {
        item_id: `${Date.now()}a`,
        title: payload.title,
        author: payload.author,
      };
      state.booksArr = state.booksArr.concat(bookItem);
    },
    removeBook: (state, action) => {
      const myId = action.payload;
      state.booksArr = state.booksArr.filter((item) => item.item_id !== myId);
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchBooks.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchBooks.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.booksArr = action.payload;
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

// const deleteId = `${url}/12132152`;
// fetch(deleteId, {
//   method: 'DELETE',
//   body: JSON.stringify({
//     item_id: '12132152',
//   }),
//   headers: {
//     'Content-type': 'application/json; charset=UTF-8',
//   },
// })
//   .then((res) => res.text())
//   .then((text) => console.log(text));

export const { addBook, removeBook } = bookSlice.actions;
export default bookSlice.reducer;
