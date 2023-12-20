import React from "react";
import { Link } from "react-router-dom";

export default function AdminHome() {
  return (
    <>
      <div className="NavItems">
        <Link to="/">Intro</Link> <br />
        <Link to="/user">User Home</Link>
        <br />
      </div>
      <div>This is the Admin Panel</div>
    </>
  );
}
