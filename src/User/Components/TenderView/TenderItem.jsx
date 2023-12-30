/// Import Dependancies ///
import React from "react";
import axios from "axios";

//-//
/// Import Files ///
import "./TenderItem.css";
import { Link } from "react-router-dom";
//--//

function TenderItem({ tender, onDelete }) {
  const {
    _id,
    tenderName,
    tenderScope,
    tenderIssue,
    tenderBid,
    tenderClosing,
  } = tender;

  const handleDelete = async () => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this tender?"
    );

    if (confirmDelete) {
      try {
        await axios.delete(`http://localhost:4000/tender/${_id}`);
        // Call the onDelete function (passed as a prop) to update the UI or perform any other actions
        onDelete(_id);
        console.log("Tender deleted successfully!");
      } catch (error) {
        console.error("Error deleting tender:", error);
      }
    }
  };

  return (
    // main container

    <section className="itemContainer">
      <div className="tenderBox">
        {/* item Rows */}

        <div className="itemRow">
          {/* item column 1*/}

          <div className="itemColumn itemName">
            <p className="itemHeader">Tender Name</p>
            <p className="itemName__name">{tenderName}</p>
          </div>
        </div>
        {/* item Column 2 */}

        <div className="itemRow2">
          <div className="itemColumn PostDescription">
            <p className="itemHeader">Description</p>
            <p className="itemDescription">{tenderScope}</p>
          </div>
        </div>
        {/* item Column 3 */}

        <div className="itemRow">
          <div className="itemColumn itemColumn3">
            {/* Bid Bumber */}
            <div className="itemBid">
              <p className="itemHeader">Bid No.</p>
              <br />
              <p className="itemPost__date">{tenderBid}</p>
            </div>
            {/* Posted Date */}
            <div className="itemPos">
              <p className="itemHeader">Posted Date</p>
              <br />
              <p className="itemPost__date">{tenderIssue}</p>
            </div>
            {/* Closing Date */}
            <div className="itemClosing">
              <p className="itemHeader">Closing Date</p>
              <br />
              <p className="itemPost__date">{tenderClosing}</p>
            </div>
          </div>
        </div>
      </div>
      <div className="crudBar">
        <div className="crudButttons">
          <Link to={`/tender/${_id}`}>
            <button className="crudBtn">View Details</button>
          </Link>
          <Link to={`/tender/${_id}/edit`}>
            <button className="crudBtn">Edit Details</button>
          </Link>
          <button className="crudBtn" onClick={handleDelete}>
            Delete Tender
          </button>
        </div>
      </div>
    </section>
  );
}

export default TenderItem;
