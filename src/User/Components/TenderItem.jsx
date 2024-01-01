/// Import Dependancies ///
import React from "react";
import axios from "axios";

//-//
/// Import Files ///
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

    <section className="flex-col, justify-between, w-[20vw], h-[150px], my-1, rounded-2xl, p-1, bg-appGreen">
      <div className="flex">
        {/* item Rows */}

        <div className="h-full, flex-[1]">
          {/* item column 1*/}

          <div className="flex, border-grey border-[1px] ">
            <p className="text-center">Tender Name</p>
            <p className="font-[5px], w-full;, h-full, py-1">{tenderName}</p>
          </div>
        </div>
        {/* item Column 2 */}

        <div className="h-full, flex[2]">
          <div className="flex, border-grey border-[1px], h-full , flex-col. justify-start ">
            <p className="text-center">Description</p>
            <p className="items-center, font-[15px], h-full ">{tenderScope}</p>
          </div>
        </div>
        {/* item Column 3 */}

        <div className="itemRow">
          <div className="flex, border-grey border-[1px] , ">
            {/* Bid Bumber */}
            <div className="itemBid">
              <p className="text-center">Bid No.</p>
              <br />
              <p className="text-center, text-[11px]">{tenderBid}</p>
            </div>
            {/* Posted Date */}
            <div className="itemPos">
              <p className="text-center">Posted Date</p>
              <br />
              <p className="text-center, text-[11px]">{tenderIssue}</p>
            </div>
            {/* Closing Date */}
            <div className="itemClosing">
              <p className="text-center">Closing Date</p>
              <br />
              <p className="text-center, text-[11px]">{tenderClosing}</p>
            </div>
          </div>
        </div>
      </div>
      <div className="flex, p-1, justify-center">
        <div className="flex, py-1, justify-center, w-[80vw], rounded-md">
          <Link to={`/tender/${_id}`}>
            <button className="cursor-pointer, border-appGrey, mx-1, border-[1px]">
              View Details
            </button>
          </Link>
          <Link to={`/tender/${_id}/edit`}>
            <button className="cursor-pointer, border-appGrey, mx-1, border-[1px]">
              Edit Details
            </button>
          </Link>
          <button
            className="cursor-pointer, border-appGrey, mx-1, border-[1px]"
            onClick={handleDelete}
          >
            Delete Tender
          </button>
        </div>
      </div>
    </section>
  );
}

export default TenderItem;
