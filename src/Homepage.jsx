import React from "react";
import homeimg1 from "./images/Homeimg.jpeg";

export default function Homepage() {
  return (
      <div id="home" className="bg-color-back man-h-screen flex flex-col lg:flex-row">
        <div className="w-full lg:w-1/2 bg-color-homeLeft p-0 flex items-center justify-center">
          <div className="p-16 sm:p-32 md:p-32 lg:p-50 xl:p-100">
            <p className="name text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-8xl sm:pt-8 md:pt-16 text-center">
              Naresh Eswar
            </p>
            <p className="text-center subfont text-base sm:text-lg md:text-xl lg:text-xl xl:text-xl">
              TV Artist | Entertainer | Vlogger
            </p>
            <div className="text-center"> 
            <button className=" text-center w-fit h-fit mt-5 subfont px-4 md:px-8 py-2 text-xs md:text-sm border-2 border-black text-black-500 hover:bg-color-header hover:text-white ">
              <a href="#contact">GET IN TOUCH</a>
            </button>
            </div>
            
          </div>
        </div>
        <div className="w-full lg:w-1/2 bg-color-white flex items-center justify-center">
        <img src={homeimg1} alt="photo" />
        </div>
      </div>
    );
}