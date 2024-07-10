import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addCartAction } from "../store/addCartItemSlice";
import "./Cart.css";


const Cart = () => {
  
  const quantity = useSelector((state) => state.cartItem.totalQuantity)
  const dispatch = useDispatch()
  const handleAdd = ()=>{
    dispatch(addCartAction.showCart())
  }
  return (
    
    
    <div className="cartIcon"  onClick={handleAdd}>
      <h3>Cart: {quantity} Items</h3>
    </div>
  );
};

export default Cart;
