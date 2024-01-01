/// Import Dependancies ///

import React from "react";
import { Link } from "react-router-dom";

//--//

// File Import //

import "./Aside.css";

//--//

function Aside() {
  return (
    <section className="aside">
      <h4 className="aside__title">Tenders</h4>
      <Link to="/tenderCreate">
        <p className="aside__menu">Create Tender</p>
      </Link>
      <Link to={"/tenderView"}>
        <p className=" text-3xl ">Your Tenders</p>
      </Link>
    </section>
  );
}

export default Aside;
