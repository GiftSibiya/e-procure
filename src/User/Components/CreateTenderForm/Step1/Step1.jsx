/// Import Dependencies ///

import React from "react";

///--///

/// Import Files ///

// Import style sheet
import "./Step1.css";
function Step1() {
  return (
    <section className="tenderForm">
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
                name="tenderName"
                id=""
                placeholder="Bid Number"
              />
            </div>
            {/* Closing Date */}

            <div className="closing">
              <p className="fieldDescription">Closing Date</p>
              <input
                className="tenderForm__date"
                type="Date"
                name="tenderName"
                id=""
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
              name="tenderDescription"
              id=""
              placeholder="Scope Of Work"
            />
          </div>
          <div className="tenderForm__section2">
            <div className="tenderForm__session">
              <p className="fieldDescription">
                NON-COMPULSORY BRIEFING SESSION DATE AND TIME
              </p>
              <textarea
                className="tenderForm__textInput tenderForm__medium {
                  "
                type="text"
                name="Breifing session"
                id=""
                placeholder="Breifing session / date"
              />
            </div>
            <div className="tenderForm__session">
              <p className="fieldDescription">BRIEFING SESSION VENUE</p>
              <textarea
                className="tenderForm__textInput tenderForm__medium {
                  "
                type="text"
                name="Breifing venue"
                id=""
                placeholder="Breifing venue"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Step1;
