import React from "react";

export default function Header() {
  return (
    <div className=" w-full h-32 justify-center items-center flex gap-4  flex-col ">
      <p className=" text-3xl font-bold capitalize text-DarkDesaturatedBlue ">simple, traffice-based pricing</p>
      <p className="text-xs font-semibold capitalize text-LightGrayishBlue">  Sign-up for our 30-day trial. No credit card required. </p>
    </div>
  );
}
