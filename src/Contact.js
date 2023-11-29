import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faFacebook } from '@fortawesome/free-brands-svg-icons';
import { faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faYoutube } from '@fortawesome/free-brands-svg-icons';

export default function ContactPage() {
  return (
    <div id="contact"  className="w-100% h-screen flex justify-center items-center bg-color-100">
      <div className="w-100%  hidden sm:block w-1/2"></div>
      <div className=" w-100% md:w-1/2 text-white m-10 md:m-20 flex items-center justify-center ">
        <div className="bg-color-header p-10 md:p-16 space-y-4 w-full ">
          <div className="text-4xl md:text-5xl">
            <p>GET IN</p>
            <p>TOUCH</p>
          </div>
          <div className="text-sm md:text-base">
            chennai
            <br />
            nareshalpy@gmail.com
          </div>
          {/* <div>hbfhjb</div> */}
          <div className="icons">
          <a href="https://www.instagram.com/naresheswar/?utm_source=ig_web_button_share_sheet&igshid=OGQ5ZDc2ODk2ZA=="><FontAwesomeIcon icon={faInstagram}className="icons-item"  /></a>
          <a href="https://www.facebook.com/Actor.NareshEswar?mibextid=LQQJ4d"><FontAwesomeIcon icon={faFacebook}className="icons-item" /></a>
          <a href="https://x.com/naresh_eswar?s=20"><FontAwesomeIcon icon={faTwitter} className="icons-item"/></a>
          <a href="https://www.youtube.com/@ExplorewithNareshPapri/videos"><FontAwesomeIcon icon={faYoutube}className="icons-item" /></a>
          </div>
          <div> 
            <button className=" text-center w-fit h-fit mt-5 subfont px-4 md:px-8 py-2 text-xs md:text-sm border-2 border-black text-black-500 hover:bg-color-header hover:text-white ">
              <a href="mailto:nareshalpy@gmail.com">SEND MAIL</a>
            </button>
            </div>
        </div>
      </div>
    </div>
  );
}