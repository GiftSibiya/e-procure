/// Import Dependencies ///

import React, { useState } from "react";

///--///

/// Import Files ///

///--///

//--//
const Step2 = ({ onSubmitStep2 }) => {
  const [tenderPreQual, setTenderPreQual] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      let result = await fetch("http://localhost:4000/tenders", {
        method: "post",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          tenderPreQual,
        }),
      });

      if (result.ok) {
        result = await result.json();
        localStorage.setItem("tender", JSON.stringify(result));
        console.log("Data has been sent to mongo", result);
        alert("Tender has been submitted");
        onSubmitStep2(tenderPreQual); // Pass tenderPreQual to onSubmitStep2

        // Redirect the user to user page
        window.location.href = "http://localhost:3000/user";
      } else {
        console.error("Error submitting the form");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };
  return (
    <form
      className="flex  justify-between"
      method="post"
      onSubmit={handleSubmit}
    >
      <div className=" m-2 ">Pre Qualifiers</div>
      <div className=" flex flex-col items-center m-2 h-[400px]  bg-backgroundColor rounded-3xl w-[60vw]">
        <div className="flex m-10 justify-around w-full">
          <div className=" border-appRed">
            <p className="tenderForm__desciption">Enter Pre Qualifiers</p>
            <textarea
              className=" resize-none border-[1px] rounded-md h-[250px] w-[30vw]"
              type="text"
              name="tenderName"
              id=""
              placeholder="Enter Your Pre-Qualifiers Here"
              value={tenderPreQual}
              onChange={(e) => setTenderPreQual(e.target.value)}
            />
          </div>
        </div>
        <button
          className="bg-appGreen w-[100px] rounded-lg m-2"
          type="submit"
          onClick={handleSubmit}
        >
          Submit
        </button>
      </div>
    </form>
  );
};

export default Step2;
