import { createSlice } from "@reduxjs/toolkit";


const initialState = {
  likedProducts: JSON.parse(localStorage.getItem("likedProducts") ||  "[]"),
};

const likeSlice = createSlice({
  name: "like",
  initialState,
  reducers: {
    likeProduct: (state, action) => {
      const { id } = action.payload;
      const existingProductIndex = state.likedProducts.findIndex(
        (product) => product.id === id
      );
      if (existingProductIndex === -1) {
        state.likedProducts.push(action.payload);
        localStorage.setItem("likedProducts", JSON.stringify(state.likedProducts));
      }
    },
    dislikeProduct:(state, action) => {
      const { id } = action.payload;
      state.likedProducts = state.likedProducts.filter(product => product.id !== id);
      localStorage.setItem("likedProducts", JSON.stringify(state.likedProducts));
    }
  },
});

export default likeSlice.reducer;
export const { likeProduct, dislikeProduct } = likeSlice.actions;
