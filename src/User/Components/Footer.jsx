import React from "react";

export default function Footer() {
  return (
    <>
      <section className="flex justify-center h-[120px] w-full">
        <div className=" felx-col items-center">
          <div className="my-1, text-lg. font-bold">E-PROCURE</div>
          <div className="flex">
            <p className="cursor-pointer mx-1 text-sm">About</p>
            <p className="cursor-pointer mx-1 text-sm">Contact</p>
            <p className="cursor-pointer mx-1 text-sm">Terms Of Use</p>
            <p className="cursor-pointer mx-1 text-sm">Privacy Policy</p>
          </div>
        </div>
      </section>
    </>
  );
}
