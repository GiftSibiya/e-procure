import React, { useState, useEffect } from "react";
import HeaderComponent from "../../Components/Header/Header";
import Aside from "../../Components/Aside/Aside";
import TenderItem from "../../Components/TenderView/TenderItem";
import axios from "axios"; // Import axios for making HTTP requests

import "./TenderView.css";

export default function TenderView() {
  const [tenders, setTenders] = useState([]);

  useEffect(() => {
    // Fetch data from the server when the component mounts
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:4000/tenderView");
        setTenders(response.data.tenders);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []); // The empty dependency array ensures the effect runs only once after the initial render

  return (
    <>
      <nav>
        <HeaderComponent />
      </nav>
      <body className="createBodySection">
        <Aside />
        <section className="tenderViewContainer">
          <h3 className="tenderView__Header">View Your Active Tenders</h3>

          {/* Map through tenders and render TenderItem for each tender */}

          {tenders.map((tender) => (
            <TenderItem
              key={tender._id}
              tender={tender}
              // variables from database

              name={tender.tenderName}
              description={tender.tenderScope}
              bid={tender.tenderBid}
              closing={tender.tenderClosing}
            />
          ))}
        </section>
      </body>
    </>
  );
}
