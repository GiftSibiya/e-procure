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
      <p className="aside__menu">Your Tenders</p>
    </section>
  );
}

export default Aside;
