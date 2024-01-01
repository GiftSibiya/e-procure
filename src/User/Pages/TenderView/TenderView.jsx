import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import HeaderComponent from "../../Components/Header";
import Aside from "../../Components/Aside/Aside";
import TenderItem from "../../Components/TenderView/TenderItem";
import axios from "axios";

import "./TenderView.css";

function TenderView() {
  const [tenders, setTenders] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:4000/tenderView");
        setTenders(response.data.tenders);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <nav>
        <HeaderComponent />
      </nav>
      <body className="createBodySection">
        <Aside />
        <section className="tenderViewContainer">
          <h3 className="tenderView__Header">View Your Active Tenders</h3>
          {tenders.map((tender) => (
            <TenderItem
              key={tender._id}
              tender={tender}
              name={tender.tenderName}
              description={tender.tenderScope}
              issue={tender.tenderIssue}
              bid={tender.tenderBid}
              closing={tender.tenderClosing}
            />
          ))}
        </section>
      </body>
    </>
  );
}

export default TenderView;
