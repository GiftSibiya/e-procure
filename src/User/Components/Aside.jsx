/// Import Dependancies ///

import React from "react";
import { Link } from "react-router-dom";

//--//

// File Import //

//--//

function Aside() {
  return (
    <section className="felx-col, cursor-pointer, mx-2 bg-appGreen p-2 rounded-lg w-[150px] ">
      <h4 className="my-2">Tenders</h4>
      <Link to="/tenderCreate">
        <p className="text-[14px],  my-1">Create Tender</p>
      </Link>
      <Link to={"/tenderView"}>
        <p className=" text-[14px], my-1 ">Your Tenders</p>
      </Link>
    </section>
  );
}

export default Aside;
