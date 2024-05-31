import { configureStore,  } from '@reduxjs/toolkit'
import likeReducer from "../slice/likeSlice";
import cartReducer from "../slice2/cartSlice"
import SinglReducer from "../slice3/ids"
export const store = configureStore({
  reducer: {
    like: likeReducer,
    cartproduct: cartReducer,
    id: SinglReducer
  },
})

