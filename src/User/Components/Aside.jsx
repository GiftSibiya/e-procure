/// Import Dependancies ///

import React from "react";
import { Link } from "react-router-dom";

//--//

// File Import //

//--//

function Aside() {
  return (
    <section className="flex flex-col h-[80vh] m-2 bg-green-300 p-2 rounded-lg w-[300px] ">
      <h4 className="my-2 text-backgroundColor font-semibold text-center">Tenders</h4>
      <Link to="/tenderCreate">
        <p className="text-[14px] text-backgroundColor my-1">Create Tender</p>
      </Link>
      <Link to={"/tenderView"}>
        <p className=" text-[14px] text-backgroundColor my-1 ">Your Tenders</p>
      </Link>
    </section>
  );
}

export default Aside;