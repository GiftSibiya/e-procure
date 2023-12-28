/// Import Depenencies ///
import React from "react";
import { Link } from "react-router-dom";

//--//

/// Import Files ///

//--//

export default function ClientHome() {
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
      <div>This is the Client home page</div>
    </>
  );
}
