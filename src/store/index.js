import { configureStore } from "@reduxjs/toolkit";
import { addCartItemSlice } from "./addCartItemSlice";
import { authSlice } from "./AuthSlice";


export const store = configureStore({
   reducer:{
      auth: authSlice.reducer,
      cartItem: addCartItemSlice.reducer
   } 
})