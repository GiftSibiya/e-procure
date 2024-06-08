/// Import Dependencies //

import React from "react";
//--//

/// File Imports //

//components
import HeaderComponent from "./Components/Header";
import Footer from "./Components/Footer";
import TabView from "./Components/TabView/TabView";
import Aside from "./Components/Aside";
import TopUtil from "./Components/Utils/TopUtil";

//--//
export default function UserHome() {
  return (
    <>
      <body className="flex-col">
        <header className="w-full">
          <HeaderComponent />
        </header>
        <section className="flex ">
          <Aside />
          <main>
            <TopUtil/>
            <TabView />
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
