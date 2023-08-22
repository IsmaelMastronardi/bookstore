import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  categoriesArr: [],
};

const categoriesSlice = createSlice({
  name: 'categories',
  initialState,
  reducers: {
    checkStatus: (state, action) => {
      if (action.payload === 'construction') {
        state.categoriesArr = 'under construcction';
      }
    },
  },
});

export const { checkStatus } = categoriesSlice.actions;
export default categoriesSlice.reducer;
