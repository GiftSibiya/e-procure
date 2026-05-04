import TenderComp from "../Utils/TenderComp";

function Applications() {
  return (
    <div className="space-y-2 max-h-[55vh] overflow-y-auto pr-0.5">
      <TenderComp
        tenderName="Tender Number 1"
        adDate="2015-03-25"
        closeDate="2024-05-20"
        status="Active"
        submitName="Sheldon Cooper"
        submitDate="2024-06-08"
      />
      <TenderComp
        tenderName="You made another tender"
        adDate="2018-03-25"
        closeDate="2024-05-20"
        status="Pending"
        submitName="Amy Cooper"
        submitDate="2023-06-08"
      />
      <TenderComp
        tenderName="GOsh aren't we tendering"
        adDate="2023-03-25"
        closeDate="2024-05-20"
        status="Closed"
        submitName="Leonard Hofstader"
        submitDate="2024-06-08"
      />
      <TenderComp
        tenderName="Wow another one"
        adDate="2023-03-25"
        closeDate="2024-05-20"
        status="Closed"
        submitName="Steward"
        submitDate="2024-06-08"
      />
    </div>
  );
}

export default Applications;
