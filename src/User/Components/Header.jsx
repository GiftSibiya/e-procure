/// Import Dependencies ///
import React from "react";
import { Link } from "react-router-dom";

//--//

const HeaderComponent = () => {
  return (
    <>
      <header>
        <div className="w-full h-20 items-center justify-between flex bg-appBlue ">
          <h1 className="  font-bold text-appTextWhite">E-PROCURE</h1>
          <div className="w-[500px] justify-around flex  items-center ">
            <Link to="/user" className=" text-appTextWhite ">
              Home
            </Link>
            <Link to="/" className="text-appTextWhite">
              Log Out
            </Link>
            <Link to="" className="text-appTextWhite">
              Queries
            </Link>
            <div className="flex items-center">
              <p className="profile__user">Khanyi Sadik</p>
              <div className="border-2 w-10 h-10 ml-1 border-appTextWhite rounded-full"></div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default HeaderComponent;
