import React from "react";
import Header from "../header/header";
import Button from "../buttons/button";
import Info from "../info/info";

export default function Card() {
  return (
    <section className="flex flex-col gap-6 w-full h-screen justify-evenly items-center ">
      <Header />
      <div className="grid  grid-cols-1 grid-rows-3 shadow-md  w-1/2 h-1/2 bg-white rounded-md">
        <div className="flex justify-evenly mt-6">
          <p className="text-xl font-semibold capitalize text-GrayishBlue">
            100k pageviews
          </p>
          <p className="text-4xl font-bold uppercase text-DarkDesaturatedBlue">
            ${16}.00/
            <span className="text-sm font-semibold capitalize text-GrayishBlue">
              month
            </span>
          </p>
        </div>
        <div className=" flex w-full h-full justify-center mt-6 ">
          <input className="slider" type="range" min="0" max="100"></input>
        </div>
        {/* toggle section */}
        <div className="flex justify-center w-full ">
          <label class="inline-flex items-center cursor-pointer">
            <span class=" text-sm font-medium text-GrayishBlue dark:text-gray-300 me-6 capitalize ">
              Monthly billing
            </span>
            <input type="checkbox" value="" class="sr-only peer"></input>
            <div class="relative w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
            <span class="ms-6 text-sm font-medium text-GrayishBlue dark:text-gray-300 capitalize">
              Toggle me{" "}
              <span className="text-LightRed ms-2 ">25% discount</span>{" "}
            </span>
          </label>
        </div>
        {/* constant text to be changed  */}
        <div className="w-full  h-full flex justify-around mb-8 ">
          <div className="flex flex-col gap-4 ">
            <div className="flex ">
              <img
                className="w-4 h-4 me-2 mt-1 "
                src="/images/icon-check.svg"
                alt="checker"
              ></img>
              <p className="text-GrayishBlue capitalize font-medium ">
                unlimited website{" "}
              </p>
            </div>
            <div className="flex ">
              <img
                className="w-4 h-4 me-2 mt-1 "
                src="/images/icon-check.svg"
                alt="checker"
              ></img>
              <p className="text-GrayishBlue capitalize font-medium ">
                100% data ownership{" "}
              </p>
            </div>
            <div className="flex ">
              <img
                className="w-4 h-4 me-2 mt-1 "
                src="/images/icon-check.svg"
                alt="checker"
              ></img>
              <p className="text-GrayishBlue capitalize font-medium ">
                email reports{" "}
              </p>
            </div>
          </div>

          <div className="flex h-full flex-col items-center justify-center ">
            {/* button props */}
            <Button
              onClick={onclick}
              textColor="#fff"
              bgColor="hsl(227, 35%, 25%)"
              text={"start my trial"}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
