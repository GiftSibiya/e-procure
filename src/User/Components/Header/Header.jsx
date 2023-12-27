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
            <Link to="/user" className="Nav__item ">
              Home
            </Link>
            <Link to="/" className="Nav__item">
              Log Out
            </Link>
            <Link to="" className="Nav__item">
              Queries
            </Link>
            <div className="profile">
              <p className="profile__user">Khanyi Sadik</p>
              <div className="profile__image"></div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default HeaderComponent;
