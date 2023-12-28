/// Import Dependancies ///
import React from "react";

//-//
/// Import Files ///
import "./TenderItem.css";
//--//

function TenderItem() {
  return (
    // main container

    <section className="itemContainer">
      {/* item Rows */}

      <div className="itemRow">
        {/* item column 1*/}

        <div className="itemColumn">
          <p className="itemHeader">Tender Name</p>
        </div>
      </div>
      {/* item Column 2 */}

      <div className="itemRow2">
        <div className="itemColumn PostDescription">
          <p className="itemHeader">Description</p>
          <p className="itemDescription">Description</p>
        </div>
      </div>
      {/* item Column 3 */}

      <div className="itemRow">
        <div className="itemColumn3">
          {/* Posted Date */}
          <div className="itemPos">
            <p className="itemHeader">Tender Posted</p>
            <br />
            <p className="itemPost__date">24 December 2023</p>
          </div>
          {/* Closing Date */}
          <div className="itemPos">
            <p className="itemHeader">Tender Posted</p>
            <br />
            <p className="itemPost__date">24 December 2023</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default TenderItem;
