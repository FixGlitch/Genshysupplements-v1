import { createSlice } from "@reduxjs/toolkit";

const productSlice = createSlice({
  name: "products",
  initialState: {
    products: [],
    detail: {},
    currentPage: "",
    totalPages: "",
    totalResults: "",
    isLoading: false,
    category: [],
    diet: [],
    flavor: [],
    weightType: []
  },
  reducers: {
    getProductById: (state, action) => {
      state.detail = action.payload;
    },
    getProductsByFilter: (state, action) => {
      state.totalPages = action.payload.totalPages;
      state.products = action.payload.products;
      state.currentPage = action.payload.currentPage;
      state.totalResults = action.payload.totalResults;
    },
    addProduct: (state, action) => {
      state.products.push(action.payload);
    },
    setProperty: (state, action) => {
      if (action.payload.property === 'weight.type') state.weightType = action.payload.data.foundValues
      else state[action.payload.property] = action.payload.data.foundValues
    },
    startLoading: (state) => {
      state.isLoading = true;
    },
    stopLoading: (state) => {
      state.isLoading = false;
    },
    resetDetail: (state) => {
      state.detail = null; 
    },
  },
});

export const {
  getProductById,
  getProductsByFilter,
  addProduct,
  startLoading,
  stopLoading,
  setProperty,
  resetDetail
} = productSlice.actions;

const productsReducer = productSlice.reducer;
export default productsReducer;
