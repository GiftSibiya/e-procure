/// Import Dependancies ///
import React from "react";

//--//

/// Import Files ///
import "./TenderView.css";
import HeaderComponent from "../../Components/Header/Header";
import Aside from "../../Components/Aside/Aside";
import TenderItem from "../../Components/TenderView/TenderItem";

//--//

export default function TenderView() {
  return (
    <>
      <nav>
        <HeaderComponent />
      </nav>
      <body className="createBodySection">
        <Aside />
        <section className="tenderViewContainer">
          <h3 className="tenderView__Header">View Your Active Tenders</h3>
          <TenderItem />
        </section>
      </body>
    </>
  );
}
