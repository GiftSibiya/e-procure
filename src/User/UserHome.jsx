import React from "react";
import { Link } from "react-router-dom";
import HeaderComponent from "./Components/Header/Header";
import "./UserHome.css";
import Footer from "./Components/Footer/Footer";
import TabView from "./Components/TabView/TabView";
import Aside from "./Components/Aside/Aside";

export default function UserHome() {
  return (
    <>
      <header>
        <HeaderComponent />
      </header>
      <body>
        <Aside />
        <main>
          <section className="user__info">Hello Khanyi</section>
          <section className="mainSection">
            <TabView />
          </section>
        </main>
      </body>
      <footer>
        <Footer />
      </footer>
    </>
  );
}
