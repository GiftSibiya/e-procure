/// Import Dependancies ///
import React from "react";

//-//
/// Import Files ///
import "./TenderItem.css";
import { Link } from "react-router-dom";
//--//

function TenderItem(props) {
  return (
    // main container

    <section className="itemContainer">
      <div className="tenderBox">
        {/* item Rows */}

        <div className="itemRow">
          {/* item column 1*/}

          <div className="itemColumn itemName">
            <p className="itemHeader">Tender Name</p>
            <p className="itemName__name">{props.name}</p>
          </div>
        </div>
        {/* item Column 2 */}

        <div className="itemRow2">
          <div className="itemColumn PostDescription">
            <p className="itemHeader">Description</p>
            <p className="itemDescription">{props.description}</p>
          </div>
        </div>
        {/* item Column 3 */}

        <div className="itemRow">
          <div className="itemColumn itemColumn3">
            {/* Bid Bumber */}
            <div className="itemBid">
              <p className="itemHeader">Bid No.</p>
              <br />
              <p className="itemPost__date">{props.bid}</p>
            </div>
            {/* Posted Date */}
            <div className="itemPos">
              <p className="itemHeader">Posted Date</p>
              <br />
              <p className="itemPost__date">{props.issue}</p>
            </div>
            {/* Closing Date */}
            <div className="itemClosing">
              <p className="itemHeader">Closing Date</p>
              <br />
              <p className="itemPost__date">{props.closing}</p>
            </div>
          </div>
        </div>
      </div>
      <div className="crudBar">
        <div className="crudButttons">
          <button className="crudBtn">View Details</button>
          <button className="crudBtn">Edit Details</button>
          <button className="crudBtn">Delete Tender</button>
        </div>
      </div>
    </section>
  );
}

export default TenderItem;
