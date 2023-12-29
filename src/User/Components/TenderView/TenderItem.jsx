/// Import Dependancies ///
import React from "react";

//-//
/// Import Files ///
import "./TenderItem.css";
//--//

function TenderItem(props) {
  return (
    // main container

    <section className="itemContainer">
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
        <div className="itemColumn3">
          {/* Posted Date */}
          <div className="itemPos">
            <p className="itemHeader">Tender Posted</p>
            <br />
            <p className="itemPost__date">{props.bid}</p>
          </div>
          {/* Closing Date */}
          <div className="itemPos">
            <p className="itemHeader">Closing Date</p>
            <br />
            <p className="itemPost__date">{props.closing}</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default TenderItem;
