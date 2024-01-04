/// Import Dependencies ///

import React, { useState } from "react";

///--///

/// Import Files ///

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
    <form
      className="flex  justify-between"
      method="post"
      onSubmit={handleSubmit}
    >
      {" "}
      <div className=" m-2 ">Tender Details</div>
      <div className=" flex flex-col items-center m-2 h-[820px]  bg-backgroundColor rounded-3xl w-[60vw]">
        {/* First Row For name and Bid Number  */}
        <div className="flex m-10 justify-around w-full">
          {/* Name and Description */}
          <div className=" border-appRed">
            <p className="tenderForm__desciption">Tender Name / Description</p>
            <textarea
              className=" resize-none border-[1px] rounded-md h-[250px] w-[30vw]"
              type="text"
              name="tenderName"
              id=""
              placeholder="Tender Description / Name"
              value={tenderName}
              onChange={(e) => setTenderName(e.target.value)}
            />
          </div>

          {/* Section 1 */}

          <div className="w-[20vw]">
            {/* Bid Number */}

            <div className="">
              <p className="">Bid Number</p>
              <textarea
                className="w-[18vw] p-2 h-[50px] resize-none border-[1px] rounded-md"
                type="text"
                name=" tenderBid"
                id=""
                placeholder="Bid Number"
                value={tenderBid}
                onChange={(e) => setTenderBid(e.target.value)}
              />
            </div>

            {/* Issuing  Date */}

            <div className="">
              <p className="mt-2">Issue Date</p>
              <input
                className="w-[18vw] p-2 h-[50px] resize-none border-[1px] rounded-md"
                type="Date"
                name="tenderClosing"
                id=""
                value={tenderIssue}
                onChange={(e) => setTenderIssue(e.target.value)}
              />
            </div>

            {/* Closing Date */}

            <div className="closing">
              <p className="mt-2">Closing Date</p>
              <input
                className="w-[18vw] p-2 h-[50px] resize-none border-[1px] rounded-md"
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

        <div className="flex m-10 justify-around w-full ">
          <div className="">
            <p className="fieldDescription">Scope Of Work</p>
            <textarea
              className="resize-none border-[1px] rounded-md h-[300px] w-[30vw]"
              type="text"
              name="tenderScope"
              id=""
              placeholder="Scope Of Work"
              value={tenderScope}
              onChange={(e) => setTenderScope(e.target.value)}
            />
          </div>
          <div className="w-[20vw] ">
            <div className="tenderForm__section2">
              {/* Session Date an Time */}

              <div className=" ">
                <p className="fieldDescription">
                  NON-COMPULSORY BRIEFING SESSION DATE AND TIME
                </p>
                <input
                  className="w-[18vw] p-2 h-[50px] resize-none border-[1px] rounded-md"
                  type="Date"
                  name="tenderSessionDate"
                  id=""
                  value={tenderSessionDate}
                  onChange={(e) => setTenderSessionDate(e.target.value)}
                />
                <input
                  className=" my-2 w-[18vw] p-2 h-[50px] resize-none border-[1px] rounded-md"
                  type="Time"
                  name=""
                  id=""
                />
              </div>

              {/* Session Venue */}
              <div className="tenderForm__session">
                <p className="fieldDescription">BRIEFING SESSION VENUE</p>
                <textarea
                  className="w-[18vw] p-2 h-[50px] resize-none border-[1px] rounded-md"
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
        </div>
        <button className="bg-appGreen w-[100px] rounded-lg m-2" type="submit">
          {" "}
          Submit
        </button>
      </div>
    </form>
  );
}

export default Step1;
