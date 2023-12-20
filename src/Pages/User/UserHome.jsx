import React from "react";
import { Link } from "react-router-dom";
import HeaderComponent from "../../Components/Header/Header";
import "./UserHome.css";

export default function UserHome() {
  return (
    <>
      <body>
        <HeaderComponent />
        <div className="NavItems">
          <Link to="/">Intro</Link> <br />
          <Link to="/user">User Home</Link>
          <br />
          <Link to="/admin">Admin Panel</Link>
        </div>
        <div>This is where you sign up my boy</div>
      </body>
    </>
  );
}
