import React from "react";
import Aboutimg from "./images/About.jpeg";

export default function About() {
  return (
    <div id="about"className="bg-gray-200 min-h-screen flex flex-col lg:flex-row">
    <div className="w-full lg:w-1/2 bg-color-white p-4 flex items-center justify-center">
      <div className="p-10 sm:p-32 md:p-10 lg:p-50 xl:p-100 text-center">
        <p className="text-center logo text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-8xl sm:pt-8 md:pt-16 text-center">
          Artist
        </p>
        <p className="text-center subfont text-base sm:text-lg md:text-xl lg:text-xl xl:text-xl mt-4">
        Naresh Eswar is an Indian Television and Film Actor. He works in the Malayalam and Tamil Film and Television Industries. His actual name is Narendran B. He is famous by his professional name which is Naresh Eswar. He was born in Trivandrum, Kerala. His father’s name is Dr. Bhagavatheeswaran and his mother’s name is Seethalakshmi. He pursued his Bachelor’s in Computer Applications and then joined the Information Technology Industry. After his education, he ventured a business.
Then he entered the acting Industry as he always had a passion for acting.
        </p>
        {/* <p className="text-center subfont text-base sm:text-lg md:text-xl lg:text-xl xl:text-xl mt-4">
          I have worked with global brands like Anissa & Tam Co., Mintmade
          Fashion, and Tully and Drive.
        </p> */}
      </div>
    </div>
    <div className="w-full lg:w-1/2 bg-color-white p-4 flex items-center justify-center">
      <img src={Aboutimg} alt="" className="p-3 sm:p-10 md:p-10 lg:p-12 xl:p-20 h-auto md:max-h-full rounded" />
    </div>
  </div>
  );
}