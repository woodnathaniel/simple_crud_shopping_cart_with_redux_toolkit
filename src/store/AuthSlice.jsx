import { createSlice } from "@reduxjs/toolkit";


 export const authSlice = createSlice({
  name : 'auth',
  initialState: { isLoggedIn: true},

  reducers: {
    LogIn(state){
      state.isLoggedIn = !state.isLoggedIn;
    },

    LogOut(state){
      state.isLoggedIn = state.isLoggedIn;
    }
  }
})

export const authActions = authSlice.actions