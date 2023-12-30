/// Import Dependencies ///

import React, { useState } from "react";

///--///

/// Import Files ///

// Import style sheet
import "./Step1.css";

///--///

//--//
function Step1() {
  const [tenderName, setTenderName] = useState("");
  const [tenderScope, setTenderScope] = useState("");
  const [tenderBid, setTenderBid] = useState("");
  const [tenderIssue, setTenderIssue] = useState("");
  const [tenderClosing, setTenderClosing] = useState("");
  const [tenderSessionDate, setTenderSessionDate] = useState("");
  const [tenderVenue, setTenderVenue] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      let result = await fetch("http://localhost:4000/tenders", {
        method: "post",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          tenderName,
          tenderScope,
          tenderBid,
          tenderIssue,
          tenderClosing,
          tenderSessionDate,
          tenderVenue,
        }),
      });

      if (result.ok) {
        result = await result.json();
        localStorage.setItem("tender", JSON.stringify(result));
        console.log("Data has been sent to mongo", result);
        alert("Tender has been submited");

        // Redirect the user to user page

        window.location.href = "http://localhost:3000/user";
      } else {
        console.error("Error submitting the form");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <form className="tenderForm" method="post" onSubmit={handleSubmit}>
      {" "}
      <div className="tenderForm__info">Tender Details</div>
      <div className="tenderForm__field">
        <div className="row1">
          {/* Name and Description */}
          <div className="tenderForm__name">
            <p className="tenderForm__desciption">Tender Name / Description</p>
            <textarea
              className="tenderForm__medium tendername"
              type="text"
              name="tenderName"
              id=""
              placeholder="Tender Description / Name"
              value={tenderName}
              onChange={(e) => setTenderName(e.target.value)}
            />
          </div>

          {/* Section 1 */}

          <div className="tenderForm__section1">
            {/* Bid Number */}

            <div className="tenderForm__bid">
              <p className="tenderForm__desciption">Bid Number</p>
              <textarea
                className="tenderForm__small"
                type="text"
                name=" tenderBid"
                id=""
                placeholder="Bid Number"
                value={tenderBid}
                onChange={(e) => setTenderBid(e.target.value)}
              />
            </div>

            {/* Issuing  Date */}

            <div className="closing">
              <p className="fieldDescription">Issue Date</p>
              <input
                className="tenderForm__date"
                type="Date"
                name="tenderClosing"
                id=""
                value={tenderIssue}
                onChange={(e) => setTenderIssue(e.target.value)}
              />
            </div>

            {/* Closing Date */}

            <div className="closing">
              <p className="fieldDescription">Closing Date</p>
              <input
                className="tenderForm__date"
                type="Date"
                name="tenderClosing"
                id=""
                value={tenderClosing}
                onChange={(e) => setTenderClosing(e.target.value)}
              />
            </div>
          </div>
        </div>

        {/* Second Row */}

        <div className="row2">
          <div className="tenderForm__scope">
            <p className="fieldDescription">Scope Of Work</p>
            <textarea
              className="tenderForm__textInput tenderInput--Large"
              type="text"
              name="tenderScope"
              id=""
              placeholder="Scope Of Work"
              value={tenderScope}
              onChange={(e) => setTenderScope(e.target.value)}
            />
          </div>
          <div className="tenderForm__section2">
            {/* Session Date an Time */}

            <div className="tenderForm__session">
              <p className="fieldDescription">
                NON-COMPULSORY BRIEFING SESSION DATE AND TIME
              </p>
              <input
                className="tenderForm__textInput tenderForm__date {
                  "
                type="Date"
                name="tenderSessionDate"
                id=""
                value={tenderSessionDate}
                onChange={(e) => setTenderSessionDate(e.target.value)}
              />
              <input className="tenderForm__date" type="Time" name="" id="" />
            </div>

            {/* Session Venue */}
            <div className="tenderForm__session">
              <p className="fieldDescription">BRIEFING SESSION VENUE</p>
              <textarea
                className="tenderForm__textInput tenderForm__medium {
                  "
                type="text"
                name="tenderVenue"
                id=""
                placeholder="Breifing venue"
                value={tenderVenue}
                onChange={(e) => setTenderVenue(e.target.value)}
              />
            </div>
          </div>
        </div>
        <button className="tenderForm__small" type="submit">
          {" "}
          Submit
        </button>
      </div>
    </form>
  );
}

export default Step1;
