import React from "react";
import { Link } from "react-router-dom";

export default function Intro() {
  return (
    <>
      <div className="flex justify-center items-center w-full h-full">
        <div className="flex w-[90vw] rounded-md bg-backgroundColor">
          {/*THIS IS THE LEFT SIDE CONTENT */}

          <div className="flex-col justify-center items-center h-90 w-[55%] rounded-l-lg bg-appBlue">
            <div className="flex h-[20vh] items-center justify-around">
              <h1 className="">E-PROCUREMENT</h1>
              <p className="">
                You're number 1 electronic procurement solution
              </p>
            </div>
            <p className="mt-40 items-center">
              Say goodbuy to endless paperwork. View and create tender RFQ's the
              21st centuary way
            </p>
          </div>
          {/* */}

          {/* Right Side Login In Sheet*/}
          <div className="flex justift-center items-center h-full w-[45%] border-r-lg bg-appGrey">
            <div className="flex-col justify-center">
              <p className="login__text">Free yourself Today</p>
              <h2 className="logIn">Log in</h2>
              <form>
                <textarea
                  className="resize-none mt-2 w-[30vw]"
                  name="Username"
                  id="Username"
                  placeholder="Username"
                  required
                ></textarea>
                <textarea
                  className="resize-none mt-2 w-[30vw]"
                  name="Password"
                  id="Password"
                  placeholder="Password"
                  required
                ></textarea>
                <Link to="/user">
                  <button
                    className="my-3 h-[35px] w-[100px] cursor-pointer border-none bg-appBlue "
                    type="submit"
                  >
                    Log In
                  </button>
                </Link>
              </form>

              {/*Login Box */}
              <div className="flex justify-between">
                <div className="flex items-center">
                  <input
                    className="mr-5 h-3 w-5"
                    type="checkbox"
                    name="Name"
                    id=""
                  />
                  <p className="font-5">Remember Me</p>
                </div>
              </div>
              {/* */}

              <p className="forgot">Forgot Password?</p>
              <div className="flex-col my-5 ">
                <p className="noAcc__text">Don't Have An Account?</p>
                <button className="noAcc__btn Button">Sign Up</button>
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
