import { createSlice } from "@reduxjs/toolkit";



const initialState = {
  cart: JSON.parse(localStorage.getItem("carted") ||  "[]"),
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    cartproducts: (state, action) => {
      const { id } = action.payload;
      const existingProductIndex = state.cart.findIndex(
        (product) => product.id === id
      );
      if (existingProductIndex === -1) {
        state.cart.push(action.payload);
        localStorage.setItem("carted", JSON.stringify(state.cart));
      }
    }
  },
});

export default cartSlice.reducer;
export const { cartproducts } = cartSlice.actions;
