import React from "react";
import TenderComp from "../Utils/TenderComp";

function Applications() {
  return <section className="bg-appGrey mt-2 rounded-lg w-[85vw] h-[58vh] overflow-y-scroll">
    <div className="flex flex-col items-center">
      <TenderComp/>
      <TenderComp/>
      <TenderComp/>
      <TenderComp/>
    </div>

  </section>;
}

export default Applications;
