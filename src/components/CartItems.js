import React from "react";
import CartItem from "./CartItem";
import "./Cart.css";
import { useSelector } from "react-redux";


const CartItems = () => {
  // Generating your cartList from store 
  const cartItem = useSelector((state) => state.cartItem.itemsList)
  return (
    <div className="cart-container">
      <h2>Your Cart</h2>
      <ul>
        {cartItem.map((item,index) => (
            <li key={index} >
               {" "}
            <CartItem name={item.name} price={item.price} quantity={item.quantity} total={item.totalPrice}/>
            {" "}
            </li>
          
          ))
        }  
      </ul>
    </div>
  );
};

export default CartItems;
