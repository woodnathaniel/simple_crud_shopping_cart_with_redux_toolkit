import React from "react";
import { useSelector } from "react-redux";
import Header from "./Header";
import Products from "./Products";

import "./Layout.css";
import CartItems from "./CartItems";





const Layout = () => {

  const itemList = useSelector((state) => state.cartItem.itemsList);
  console.log(itemList);
  let total = 0;
  for(const item of itemList){
      total += item.totalPrice;
   }

  const state = useSelector(state => (state.cartItem.showCart));
  console.log(state)
  return (
    <React.Fragment>
      <div className="layout">
         <Header />
          {state && <CartItems />}
        <Products />
        <div className="total-price">
          <h3>Total: ${total}</h3>
          <button className="orderBtn">Place Order</button>
        </div>{" "}
      </div>
    </React.Fragment>
  );
};

export default Layout;
