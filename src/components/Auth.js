import React from "react";
import "./Auth.css";
import { useSelector, useDispatch } from "react-redux";
import { authActions } from "../store/AuthSlice";


const Auth = () => {

  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn)
  const dispatch = useDispatch()
  const handleLogIn = (e) =>{
    e.preventDefault();
    dispatch(authActions.LogIn())
    console.log('submitted')
  }
  return (
    <div className="container">
      <h1>Login</h1>{" "}
      <form onSubmit={handleLogIn} onClick={console.log(isLoggedIn)} >
        <label htmlFor="id">Id</label>
        <input type="text" name="id" id="id" />
        <label htmlFor="password">Password</label>
        <input type="password" name="password" id="password" />
        <button className="login-btn" type="submit">
          Login
        </button>
      </form>
    </div>
  );
};

export default Auth;
