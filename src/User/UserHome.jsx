/// Import Dependencies //

import React from "react";
import { Link } from "react-router-dom";

//--//

/// File Imports //

// style sheet
import "./UserHome.css";

//components
import HeaderComponent from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import TabView from "./Components/TabView/TabView";
import Aside from "./Components/Aside/Aside";

//--//
export default function UserHome() {
  return (
    <>
      <body>
        <header className="header">
          <HeaderComponent />
        </header>
        <section className="bodySection">
          <Aside />
          <main>
            <section className="user__info">Hello Khanyi</section>
            <section className="mainSection">
              <TabView />
            </section>
          </main>
        </section>
      </body>
      <footer>
        <Footer />
      </footer>
    </>
  );
}
