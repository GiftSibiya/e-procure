// import Dependencies //

import React from "react";
import HeaderComponent from "../../Components/Header/Header";
import Aside from "../../Components/Aside/Aside";
import CreateTenderForm from "../../Components/CreateTenderForm/CreateTenderForm";

//--//

// Import Files //

import "./TenderCreate.css";

//--//

export default function TenderCreate() {
  return (
    <>
      <header>
        <HeaderComponent />
      </header>

      <body className="createBodySection">
        <Aside />
        <CreateTenderForm />

        <main></main>
      </body>
    </>
  );
}
