/// Dependencies ///

import React, { useState } from "react";

///--///

/// Import Files ///

// components
import Applications from "./Applications";
import Notifications from "./Notifications";

//--//

const ApplicationsContent = () => (
  <div className="">
    <Applications />
  </div>
);

const NotificationsContent = () => (
  <div className="">
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
      <div className="flex w-[70vw]">
        <div className={`flex-1 p-1 text-center rounded-md, cursor-pointer ${ activeTab === "Applications" ? "bg-slate-200 text-appTextWhite rounded-xl font-semibold" : "unactive"}`}
          onClick={() => handleTabClick("Applications")}>Applications
        </div>
        <div
          className={`flex-1 p-1 text-center rounded-md, cursor-pointer ${ activeTab === "Notifications" ? "bg-slate-200 text-appTextWhite rounded-xl font-semibold" : "unactive"}`}
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
