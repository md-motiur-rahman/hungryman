import React, { useState } from "react";
import "./LogIn.css";
import { assets } from "../../assets/assets";
function LogIn({ setShowLogin }) {
  const [currState, setCurrState] = useState("Login");
  return (
    <div className="login-popup">
      <form className="login-popup-container">
        <div className="login-popup-title">
          <h2>{currState}</h2>
          <img
            onClick={() => setShowLogin(false)}
            src={assets.cross_icon}
            alt=""
          />
        </div>
        <div className="login-popup-input">
          {currState === "Sign Up" ? (
            <input type="text" name="" id="" placeholder="Your Name" />
          ) : (
            <></>
          )}
          <input type="email" name="" id="" placeholder="Your Email" />
          <input type="password" name="" id="" placeholder="Password" />
        </div>
        <button>{currState === "Sign Up" ? "Sign Up" : "Login"}</button>
        {currState === "Sign Up" ? (
          <div className="login-popup-condition">
            <input type="checkbox" name="" id="" required />
            <p>By continuing, I agree the terms and conditions</p>
          </div>
        ) : (
          <></>
        )}
        {currState === "Login" ? (
          <p>
            Create a new account?{" "}
            <span onClick={() => setCurrState("Sign Up")}>Sign Up here</span>
          </p>
        ) : (
          <p>
            Already have an account?{" "}
            <span onClick={() => setCurrState("Login")}>Login Here</span>
          </p>
        )}
      </form>
    </div>
  );
}

export default LogIn;
