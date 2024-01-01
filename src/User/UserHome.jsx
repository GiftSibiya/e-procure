/// Import Dependencies //

import React from "react";
//--//

/// File Imports //

// style sheet
import "./UserHome.css";

//components
import HeaderComponent from "./Components/Header";
import Footer from "./Components/Footer/Footer";
import TabView from "./Components/TabView/TabView";
import Aside from "./Components/Aside/Aside";

//--//
export default function UserHome() {
  return (
    <>
      <body>
        <header className="w-full border-red ">
          <HeaderComponent />
        </header>
        <section className="bodySection">
          <Aside />
          <main>
            <section className="bg-appOrange h-20 rounded-2xl my-2 text-center">
              Hello Khanyi
            </section>
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
///
