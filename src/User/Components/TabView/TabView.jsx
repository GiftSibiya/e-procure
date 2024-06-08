/// Dependencies ///

import React, { useState } from "react";

///--///

/// Import Files ///

// components
import Applications from "./Applications";
import Notifications from "./Notifications";

//--//

const ApplicationsContent = () => (
  <div className="tabHeader">
    <Applications />
  </div>
);

const NotificationsContent = () => (
  <div className="w-[75vw]">
    <Notifications />
  </div>
);

const TabView = () => {
  const [activeTab, setActiveTab] = useState("Applications");

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div>
      <div className="flex  w-[75vw] ">
        <div className={`flex-1 p-1 text-center rounded-md, cursor-pointer ${ activeTab === "Applications" ? "bg-appGreen text-appTextWhite rounded-xl" : "unactive"}`}
          onClick={() => handleTabClick("Applications")}>Applications
        </div>
        <div
          className={`flex-1 p-1 text-center rounded-md, cursor-pointer ${ activeTab === "Notifications" ? "bg-appGreen text-appTextWhite rounded-xl" : "unactive"}`}
          onClick={() => handleTabClick("Notifications")}>Notifications
        </div>
      </div>
      <div className="tab-content">
        {activeTab === "Applications" && <ApplicationsContent />}
        {activeTab === "Notifications" && <NotificationsContent />}
      </div>
    </div>
  );
};

export default TabView;
