import React from "react";
import { Link } from "react-router-dom";

export default function UserHome() {
  return (
    <>
      <div className="NavItems">
        <Link to="/">Intro</Link> <br />
        <Link to="/client">Client Home</Link>
        <br />
        <Link to="/user">User Home</Link>
        <br />
        <Link to="/admin">Admin Panel</Link>
      </div>
      <div>This is the User Home Page</div>
    </>
  );
}
