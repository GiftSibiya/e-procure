// import Dependencies //

import React from "react";
import HeaderComponent from "../Components/Header";
import Aside from "../Components/Aside";
import Footer from "../Components/Footer";
import CreateTenderForm from "../Components/CreateTenderForm/CreateTenderForm";

//--//

// Import Files //

//--//

export default function TenderCreate() {
  return (
    <>
      <header>
        <HeaderComponent />
      </header>

      <body className="flex my-10 ">
        <Aside />
        <CreateTenderForm />

        <main></main>
      </body>
      {/* <footer>
        <Footer />
      </footer> */}
    </>
  );
}
