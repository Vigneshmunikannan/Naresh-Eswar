import React, { useState } from "react";
import "./Gallery.css";
import cancel from "./images/close.png";
import img1 from "./images/1.jpg"
import img2 from "./images/2.jpeg"
import img3 from "./images/3.jpeg"
import img4 from "./images/4.jpeg"
import img5 from "./images/5.jpeg"
import img6 from "./images/6.jpeg"
import img7 from "./images/7.jpeg"
import img8 from "./images/8.jpeg"
import img9 from "./images/About.jpeg"
import img10 from "./images/Homeimg.jpeg"
import img11 from "./images/image00001.jpeg"
import img12 from "./images/image00002.jpeg"
import img13 from "./images/image00003.jpeg"
import img14 from "./images/image00004.jpeg"
import img15 from "./images/image00005.jpeg"
import img16 from "./images/image00006.jpeg"
import img17 from "./images/image00007.jpeg"
import img18 from "./images/image00008.jpeg"
import img19 from "./images/image00009.jpeg"
import img20 from "./images/image00010.jpeg"



const imageArray = [img1,img2,img3,img4,img5,img6,img7,img8,img9,img10,img11,img12,img13,img14,img15,img16,img17,img19,img20]; 

export default function Gallery2() {
  const closeIconStyles = {
    position: "fixed",
    top: "60px",
    right: "40px",
    width: "2rem",
    height: "2rem",
    padding: "5px",
    backgroundColor: "rgba(0, 0, 0, 0.4)",
    color: "#ffffff",
    cursor: "pointer",
  };

  const [model, setModel] = useState(false);
  const [tempimgsrc, setTempImgSrc] = useState("");

  const getImg = (imageSrc) => {
    setTempImgSrc(imageSrc);
    setModel(true);
  };

  return (
    <div className="GalCon">
      <div className={model ? "model open" : "model"}>
        <img src={tempimgsrc} alt="" />
        <img
          src={cancel}
          onClick={() => setModel(false)}
          style={closeIconStyles}
          className="custom-close-icon "
          alt=""
        />
      </div>
      <div>
        <h1 className="text-center logo w-[100%]">
          Gallery
        </h1>
      </div>

      <div className="gallery2">
        {imageArray.map((imageSrc, index) => (
          <div
            key={index}
            className="pics"
            onClick={() => {
              getImg(imageSrc, `Image ${index + 1}`, () => setModel(true));
            }}
          >
            <img
              src={imageSrc}
              className="custom-w-100"
              alt={`Image ${index + 1}`}
            />
          </div>
        ))}
      </div>
    </div>
  );
}