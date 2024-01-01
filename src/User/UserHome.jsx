/// Import Dependencies //

import React from "react";
//--//

/// File Imports //

//components
import HeaderComponent from "./Components/Header";
import Footer from "./Components/Footer/Footer";
import TabView from "./Components/TabView/TabView";
import Aside from "./Components/Aside";

//--//
export default function UserHome() {
  return (
    <>
      <body className="flex-col">
        <header className="w-full border-red ">
          <HeaderComponent />
        </header>
        <section className="flex ">
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
