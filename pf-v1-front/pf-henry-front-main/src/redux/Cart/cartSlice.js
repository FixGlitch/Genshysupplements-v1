import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    productsInCart: {},
    totalPrice: 0,
  },
  reducers: {
    loadProducts: (state, action) => {
      state.productsInCart = action.payload
    },
    addProduct: (state, action) => {
      const { id, product } = action.payload;
      if (state.productsInCart[id]) {
        state.productsInCart[id].quantity += 1;
      } else {
        state.productsInCart[id] = { ...product, quantity: 1 };
      }
      state.totalPrice += (product.price);
    },
    deleteProduct: (state, action) => {
      const id = action.payload;
      if (state.productsInCart[id]) {
        state.totalPrice =
          state.totalPrice -
          state.productsInCart[id].price * state.productsInCart[id].quantity;
        delete state.productsInCart[id];
      }
    },
    updateProductQuantity: (state, action) => {
      const { id, quantity } = action.payload;
      if (state.productsInCart[id]) {
        
        state.productsInCart[id].quantity = quantity;
        state.totalPrice = Object.values(state.productsInCart).reduce(
          (total, product) => total + product.price * product.quantity,
          0
        );
      }
    },
  },
});

export const { addProduct, deleteProduct, updateProductQuantity, loadProducts } =
  cartSlice.actions;
const cartReducer = cartSlice.reducer;
export default cartReducer;
