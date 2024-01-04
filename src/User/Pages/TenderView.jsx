/// Import Dependencies ///
import React, { useState, useEffect } from "react";
import HeaderComponent from "../Components/Header";
//--//

import Aside from "../Components/Aside";
import TenderItem from "../Components/TenderItem";
import axios from "axios";
import Footer from "../Components/Footer";

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
      <body className="flex my-10">
        <Aside />
        <section className="flex-col items-center rounded-md bg-backgroundColor w-full h-[800px]">
          <h3 className="text-center">View Your Active Tenders</h3>
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
      <footer>
        <Footer />
      </footer>
    </>
  );
}

export default TenderView;
