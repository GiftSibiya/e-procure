/// Import Dependencies ///

import React, { useState } from "react";

///--///

/// Import Files ///

// style sheet
import "./TabView.css";

// components
import Tenders from "./Tenders/Tenders";
import Applications from "./Applications/Applications";
import Notifications from "./Notifications/Notifications";

//--//

const TendersContent = () => (
  <div className="tabHeader">
    <Tenders />
  </div>
);

const ApplicationsContent = () => (
  <div className="tabHeader">
    <Applications />
  </div>
);

const NotificationsContent = () => (
  <div className="tabHeader">
    <Notifications />
  </div>
);

const TabView = () => {
  const [activeTab, setActiveTab] = useState("Applications");

  const handleTabClick = (tab) => {
    setActiveTab(tab);
    // You can add additional logic or state updates based on the selected tab
  };

  return (
    <div>
      <div className="tab-bar">
        <div
          className={`tab ${activeTab === "Tenders" ? "active" : "unactive"}`}
          onClick={() => handleTabClick("Tenders")}
        >
          Browse Tenders
        </div>
        <div
          className={`tab ${
            activeTab === "Applications" ? "active" : "unactive"
          }`}
          onClick={() => handleTabClick("Applications")}
        >
          Applications
        </div>
        <div
          className={`tab ${
            activeTab === "Notifications" ? "active" : "unactive"
          }`}
          onClick={() => handleTabClick("Notifications")}
        >
          Notifications
        </div>
      </div>
      <div className="tab-content">
        {activeTab === "Applications" && <ApplicationsContent />}
        {activeTab === "Tenders" && <TendersContent />}
        {activeTab === "Notifications" && <NotificationsContent />}
      </div>
    </div>
  );
};

export default TabView;
