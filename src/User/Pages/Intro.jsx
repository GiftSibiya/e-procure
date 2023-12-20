import React from "react";
import { Link } from "react-router-dom";
import("./Intro.css");

export default function Intro() {
  return (
    <>
      <div className="page">
        <div className="container">
          {/*THIS IS THE LEFT SIDE CONTENT */}

          <div className="leftSide">
            <div className="brand">
              <h1 className="logo">E-PROCUREMENT</h1>
              <p className="slogan">
                You're number 1 electronic procurement solution
              </p>
            </div>
            <p className="actionText">
              Say goodbuy to endless paperwork. View and create tender RFQ's the
              21st centuary way
            </p>
          </div>
          {/* */}

          {/* Right Side Login In Sheet*/}
          <div className="rightSide">
            <div className="loginContainer">
              <p className="login__text">Free yourself Today</p>
              <h2 className="logIn">Log in</h2>

              <textarea
                className="TextField"
                name="Username"
                id="Username"
                placeholder="Username"
              ></textarea>
              <textarea
                className="TextField"
                name="Password"
                id="Password"
                placeholder="Password"
              ></textarea>

              {/*Login Box */}
              <div className="loginBox">
                <Link to="/user">
                  <button className="Button">Log In</button>
                </Link>
                <div className="checkContainer">
                  <input className="check" type="checkbox" name="Name" id="" />
                  <p className="checkText">Remember Me</p>
                </div>
              </div>
              {/* */}

              <p className="forgot">Forgot Password?</p>
              <div className="noAcc">
                <p className="noAcc__text">Don't Have An Account?</p>
                <button className="noAcc__btn Button">Sign Up</button>
              </div>
            </div>
          </div>
        </div>

        {/* */}
      </div>
      <div className="NavItems"></div>
    </>
  );
}
