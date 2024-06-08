import React from "react";
import { Link } from "react-router-dom";

export default function Intro() {
  return (
    <>
      <div className="flex justify-center items-center w-full h-screen ">
        <div className="flex w-[90vw] h-[500px] rounded-md bg-slate-600">
          {/*THIS IS THE LEFT SIDE CONTENT */}

          <div className="flex items-center w-[50vw] rounded-l-lg bg-slate-400 ">
            <div className="flex-col h-[200px] w-full ">
              <h1 className="text-white font-semibold text-[3rem] text-center mb-[10px]">E-PROCUREMENT</h1>
              <p className="text-center text-[1.2rem] mb-[20px] text-appGrey">You're number 1 electronic procurement solution</p>
              <p className="text-center items-center text-appTextWhite">
                Say goodbuy to endless paperwork. <br/>
                View and create tender RFQ's the
                21st centuary way</p>
            </div>
          </div>
          {/* */}

          {/* Right Side Login In Sheet*/}
          <div className="flex justify-center items-center h-full w-[45%] border-r-lg bg-blue-500 rounded-r-lg">
            <div className="flex-col justify-center w-[95%]">
              <p className=" text-center font-semibold text-[25px]">Free yourself Today</p>
              <form className="flex flex-col justify-center items-center">
                <textarea className="resize-none mt-2 w-[28vw] rounded-lg m-auto text-center h-[40px]" name="Username" id="Username" placeholder="Username" required>
                </textarea>
                <textarea className="resize-none mt-2 w-[28vw] text-center rounded-lg h-[40px] " name="Password" id="Password" placeholder="Password" required >
                </textarea>
                <Link to="/user">
                  <button
                    className="my-3 h-[35px] w-[100px] cursor-pointer border-none bg-slate-600 text-white font-semibold rounded-lg hover:bg-green-500 transition-all duration-150"
                    type="submit" >Log In</button>  
                </Link>
              </form>

              {/*Login Box */}
              <div className="flex justify-center  ">
                <div className="flex w-[300px]  items-center justify-between ">
                  <div className="flex justify-center items-center ">
                    <input className=" h-3 w-5" type="checkbox" name="Name" id=""/>
                    <p className="font-5">Remember Me</p>
                  </div>
                  <p className="forgot">Forgot Password?</p>
                </div>
              </div>
              {/* */}
              <div className="flex flex-col my-5  items-center">
                <p className="text-center">Don't Have An Account?</p>
                <button className="bg-orange-400 font-semibold text-white w-[90px] mt-[10px] p-[10px] rounded-md 6">Sign Up</button>
              </div>
            </div>
          </div>
        </div>
        {/* */}

      </div>
      <div className="NavItems"></div>
    </>
  );
}
