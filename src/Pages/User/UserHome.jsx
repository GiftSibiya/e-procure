import React from "react";
import { Link } from "react-router-dom";
import HeaderComponent from "../../Components/Header/Header";
import "./UserHome.css";
import Footer from "../../Components/Footer/Footer";
import TabView from "../../Components/TabView/TabView";

export default function UserHome() {
  return (
    <>
      <header>
        <HeaderComponent />
      </header>
      <body>
        <aside>Aside</aside>
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
