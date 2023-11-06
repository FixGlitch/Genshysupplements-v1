import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  order_detail: {},
  orders: [],
  currentPage: "",
  totalPages: "",
  totalResults: "",
};

export const orderSlice = createSlice({
  name: "order",
  initialState: initialState,
  reducers: {
    setOrder: (state, action) => {
      state.order_detail = action.payload;
    },
    setAllOrders: (state, action) => {
      state.totalPages = action.payload.totalPages;
      state.orders = action.payload.orders;
      state.currentPage = action.payload.currentPage;
      state.totalResults = action.payload.totalResults;
    },
  },
});

export const { setAllOrders, setOrder } = orderSlice.actions;

export default orderSlice.reducer;
