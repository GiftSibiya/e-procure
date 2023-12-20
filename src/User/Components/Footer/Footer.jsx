import React from "react";
import "./Footer.css";

export default function Footer() {
  return (
    <>
      <section className="footerSection">
        <div className="footerCol">
          <div className="footerCol__logo">E-PROCURE</div>
          <div className="footerCol__menu">
            <p className="footerCol__menu__item">About</p>
            <p className="footerCol__menu__item">Contact</p>
            <p className="footerCol__menu__item">Terms Of Use</p>
            <p className="footerCol__menu__item">Privacy Policy</p>
          </div>
        </div>
      </section>
    </>
  );
}
