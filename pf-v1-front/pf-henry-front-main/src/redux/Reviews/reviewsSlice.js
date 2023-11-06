import { createSlice } from '@reduxjs/toolkit';

const reviewsSlice = createSlice({
  name: 'reviews',
  initialState: {
    reviews: [],
    isLoading: false,
  },
  reducers: {
    setReviews: (state, action) => {
      state.reviews = action.payload;
    },
    startLoading: (state) => {
      state.isLoading = true;
    },
    stopLoading: (state) => {
      state.isLoading = false;
    },
    resetReviews: (state) => {
      state.reviews = [];
    },
  },
});

export const { setReviews, startLoading, stopLoading, resetReviews } = reviewsSlice.actions;

const reviewsReducer = reviewsSlice.reducer;
export default reviewsReducer;