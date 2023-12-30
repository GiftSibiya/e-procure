import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

function TenderDetails() {
  const { id } = useParams();
  const [tender, setTender] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`http://localhost:4000/tender/${id}`);
        setTender(response.data.tender);
      } catch (error) {
        console.error("Error fetching tender details:", error);
      }
    };

    fetchData();
  }, [id]);

  return (
    <div>
      <h3>Tender Details</h3>
      <p>Name: {tender.tenderName}</p>
      <p>Description: {tender.tenderScope}</p>
      <p>Issue: {tender.tenderIssue}</p>
      <p>Bid: {tender.tenderBid}</p>
      <p>Closing: {tender.tenderClosing}</p>
      {/* Add more details as needed */}
    </div>
  );
}

export default TenderDetails;
