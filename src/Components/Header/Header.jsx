import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";

const HeaderComponent = () => {
  return (
    <>
      <header>
        <div className="header">
          <h1 className="logo">E-PROCURE</h1>
          <div className="Nav">
            <Link to="/" className="Nav__item">
              Intro
            </Link>{" "}
            <Link to="/user" className="Nav__item ">
              User Home
            </Link>
            <Link to="/admin" className="Nav__item ">
              Admin Panel
            </Link>
          </div>
        </div>
      </header>
    </>
  );
};

export default HeaderComponent;
