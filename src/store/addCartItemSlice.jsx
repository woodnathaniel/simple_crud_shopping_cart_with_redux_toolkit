import { createSlice } from "@reduxjs/toolkit";

export const addCartItemSlice = createSlice({
  name: 'cartItem',
  initialState: { 
    showCart: false,
    itemsList:[],
    totalQuantity: 0,
   },

  reducers: {
    showCart(state){
      state.showCart = !state.showCart
    },
    addToCart(state, action){
      const newItem = action.payload
      const existingItem = state.itemsList.find((item) => item.id === newItem?.id)
      console.log(existingItem);
      console.log(newItem);
      if(existingItem){
        existingItem.quantity++;
        existingItem.totalPrice += newItem.price;
      }else{
        state.itemsList.push({
          id: newItem.id,
          price: newItem.price,
          quantity: 1,
          totalPrice: newItem.price,
          name: newItem.name
        })
        state.totalQuantity++
      } 
    },
    removeCart(state, action){
      const id = action.payload
      console.log(action.payload);
      console.log(id);
      const existingItem = state.itemsList.find(item => item.id === id);
      console.log(existingItem)
    
      
      if(existingItem.quantity === 1){
        state.itemsList = state.itemsList.filter(item => item.id !== id)
        console.log(id)
      }else{
        existingItem.quantity--; 
        existingItem.totalPrice -= existingItem.price;
      }
    }
  }
})

export const addCartAction = addCartItemSlice.actions;