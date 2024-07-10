import React from "react";
import { useDispatch } from "react-redux";
import { addCartAction } from "../store/addCartItemSlice";
import "./Product.css";


const Product = ({ name, id, imgURL, price }) => {

  const dispatch = useDispatch()

  const addToCart = () =>{
    dispatch(addCartAction.addToCart({
      id, 
      name,
      price
    }))
  }
    return (
    <div className="card">
      <img src={imgURL} alt={name} />
      <h2>{name}</h2>
      <p>$ {price}</p>
      <button onClick={addToCart}>Add to cart</button>
    </div>
  );
};

export default Product;
