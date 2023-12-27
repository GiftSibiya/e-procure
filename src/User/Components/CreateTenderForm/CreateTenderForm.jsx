// Import Dependencies //

import React, { useState } from "react";

//--//

/// Import Files ///

//style sheet
import "./CreateTenderForm.css";

// tab components
import Step1 from "./Step1/Step1";
import Step2 from "./Step2/Step2";
import Step3 from "./Step3/Step3";
import Step4 from "./Step4/Step4";
import Step5 from "./Step5/Step5";
//--//

const Step1Content = () => (
  <div className="tabContent">
    <Step1 />
  </div>
);
const Step2Content = () => (
  <div className="tabContent">
    <Step2 />
  </div>
);
const Step3Content = () => (
  <div className="tabContent">
    <Step3 />
  </div>
);
const Step4Content = () => (
  <div className="tabContent">
    <Step4 />
  </div>
);
const Step5Content = () => (
  <div className="tabContent">
    <Step5 />
  </div>
);

const TabView = () => {
  const [activeTab, setActiveTab] = useState("Step1");

  const handleTabClick = (tab) => {
    setActiveTab(tab);
    // You can add additional logic or state updates based on the selected tab
  };

  return (
    <section className="form">
      <div className="form__header">Create New Tender</div>
      <div className="tab-bar">
        <div
          className={`tab ${activeTab === "Step1" ? "active" : "unactive"}`}
          onClick={() => handleTabClick("Step1")}
        >
          Step 1
        </div>

        <div
          className={`tab ${activeTab === "Step2" ? "active" : "unactive"}`}
          onClick={() => handleTabClick("Step2")}
        >
          Step 2
        </div>

        <div
          className={`tab ${activeTab === "Step3" ? "active" : "unactive"}`}
          onClick={() => handleTabClick("Step3")}
        >
          Step 3
        </div>
        <div
          className={`tab ${activeTab === "Step4" ? "active" : "unactive"}`}
          onClick={() => handleTabClick("Step4")}
        >
          Step4
        </div>
        <div
          className={`tab ${activeTab === "Step5" ? "active" : "unactive"}`}
          onClick={() => handleTabClick("Step5")}
        >
          Step5
        </div>
      </div>
      <div className="tab-content">
        {activeTab === "Step1" && <Step1Content />}
        {activeTab === "Step2" && <Step2Content />}
        {activeTab === "Step3" && <Step3Content />}
        {activeTab === "Step4" && <Step4Content />}
        {activeTab === "Step5" && <Step5Content />}
      </div>
    </section>
  );
};

export default TabView;
