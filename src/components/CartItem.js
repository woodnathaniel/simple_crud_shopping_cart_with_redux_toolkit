import React from "react";
import { useDispatch } from "react-redux";
import "./Cart.css";
import { addCartAction } from "./../store/addCartItemSlice";



const CartItem = ({ name, quantity, total, price, id }) => {
  const dispatch = useDispatch();
  const removeHandler = () => {
    return dispatch(addCartAction.removeCart(id));
  };
  const addHandler = () => {
   return(
    dispatch(addCartAction.addToCart({
      id,
      name,
      quantity,
      price,
    }))
   ) 
  };
 
  return (
    <div className="cartItem">
      <h2>{name}</h2>
      <p>${price} /-</p>
      <p>x{quantity}</p>
      <article>Total ${total}</article>
      <button className="cart-actions"  onClick={removeHandler()}>
        -
      </button>
      <button className="cart-actions"  onClick={addHandler()}>
        +
      </button>
    </div>
  );
};

export default CartItem;
