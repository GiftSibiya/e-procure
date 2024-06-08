import React from "react";
import TenderComp from "../Utils/TenderComp";

function Applications() {
  return <section className="bg-gray-200 mt-2 rounded-lg w-[80vw] h-[58vh] overflow-y-scroll">
    <div className="flex flex-col items-center">
      <TenderComp 
      tenderName={"Tender Number 1"} adDate={"2015-03-25"} closeDate={"2024-05-20"} status={"Active"} submitName={"Sheldon Cooper"} submitDate={"2024-06-08"}/>
      <TenderComp 
      tenderName={"You made another tender"} adDate={"2018-03-25"} closeDate={"2024-05-20"} status={"Pending"} submitName={"Amy Cooper"} submitDate={"2023-06-08"}/>
      <TenderComp 
      tenderName={"GOsh aren't we tendering"} adDate={"2023-03-25"} closeDate={"2024-05-20"} status={"Closed"} submitName={"Leonard Hofstader"} submitDate={"2024-06-08"}/>
      <TenderComp 
      tenderName={"Wow another one"} adDate={"2023-03-25"} closeDate={"2024-05-20"} status={"Closed"} submitName={"Steward"} submitDate={"2024-06-08"}/>
      <TenderComp 
      tenderName={"Wow another one"} adDate={"2023-03-25"} closeDate={"2024-05-20"} status={"Closed"} submitName={"Steward"} submitDate={"2024-06-08"}/>
      <TenderComp 
      tenderName={"Wow another one"} adDate={"2023-03-25"} closeDate={"2024-05-20"} status={"Closed"} submitName={"Steward"} submitDate={"2024-06-08"}/>
    </div>

  </section>;
}

export default Applications;
