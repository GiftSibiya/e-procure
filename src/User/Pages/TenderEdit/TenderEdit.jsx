// TenderEdit.jsx

import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import HeaderComponent from "../../Components/Header";
import Aside from "../../Components/Aside/Aside";

function TenderEdit() {
  const { id } = useParams();
  const [formData, setFormData] = useState({
    tenderName: "",
    tenderBid: "",
    tenderScope: "",
    tenderIssue: "",
    tenderClosing: "",
    tenderSessionDate: "",
    tenderVenue: "",
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`http://localhost:4000/tender/${id}`);
        const tenderData = response.data.tender;
        setFormData(tenderData);
      } catch (error) {
        console.error("Error fetching tender details:", error);
      }
    };

    fetchData();
  }, [id]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await axios.post(`http://localhost:4000/tender/${id}/edit`, formData);
      console.log("Tender edited successfully!");
      // Redirect or perform other actions after editing
    } catch (error) {
      console.error("Error editing tender:", error);
    }
  };

  return (
    <>
      <nav>
        <HeaderComponent />
      </nav>
      <body className="createBodySection">
        {" "}
        <Aside />{" "}
        <div>
          <h3>Edit Tender</h3>
          <form onSubmit={handleSubmit}>
            <label>
              Tender Name:
              <input
                type="text"
                name="tenderName"
                value={formData.tenderName}
                onChange={handleInputChange}
              />
            </label>
            <label>
              Bid:
              <input
                type="text"
                name="tenderBid"
                value={formData.tenderBid}
                onChange={handleInputChange}
              />
            </label>
            <label>
              Description/Scope:
              <textarea
                name="tenderScope"
                value={formData.tenderScope}
                onChange={handleInputChange}
              />
            </label>
            <label>
              Issue:
              <input
                type="text"
                name="tenderIssue"
                value={formData.tenderIssue}
                onChange={handleInputChange}
              />
            </label>
            <label>
              Closing Date:
              <input
                type="text"
                name="tenderClosing"
                value={formData.tenderClosing}
                onChange={handleInputChange}
              />
            </label>
            <label>
              Session Date:
              <input
                type="text"
                name="tenderSessionDate"
                value={formData.tenderSessionDate}
                onChange={handleInputChange}
              />
            </label>
            <label>
              Venue:
              <input
                type="text"
                name="tenderVenue"
                value={formData.tenderVenue}
                onChange={handleInputChange}
              />
            </label>
            <button type="submit">Save Changes</button>
          </form>
        </div>
      </body>
    </>
  );
}

export default TenderEdit;
