import img1 from "./images/7.jpeg";
import img2 from "./images/2.jpeg";
import img3 from "./images/3.jpeg";
import img4 from "./images/4.jpeg";
import img5 from "./images/5.jpeg";
import img6 from "./images/6.jpeg";
import img7 from "./images/8.jpeg";


function Gallery() {
  const images = [
    { src: img1, height: "600px", top: "0px", col: "auto" },
    { src: img2, height: "350px", top: "0px", col: "auto" },
    { src: img3, height: "450px", top: "0px", col: "auto" },
    { src: img4, height: "630px", top: "0px", col: "auto" },
    { src: img5, height: "600px", top: "-243px", col: "auto" },
    { src: img6, height: "785px", top: "-150px", col: "auto" },
    { src: img7, height: "240px", top: "-280px", col: "2 / span 1" },
  ];

  return (
    <div id="gallery">
      <div className="gallery logo bg-color-100 p-6 md:p-10 lg:p-16">
        <h1 className="gallery-title text-center text-4xl md:text-5xl lg:text-6xl">
          Gallery
        </h1>
        <div className="gallery-photo grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-y-4 sm:gap-y-6 md:gap-y-8 lg:gap-y-10 gap-x-4 sm:gap-x-6 md:gap-x-8 lg:gap-x-10 mt-6 md:mt-10 lg:mt-16" alt="img">
          {images.map((img, index) => (
            <div
              key={index}
              className="gallary-image relative overflow-hidden rounded-lg transform hover:scale-105 transition-transform duration-300"
              style={{ height: img.height, marginTop: img.top, gridColumn: img.col }}
            >
              <img
                src={img.src}
                className="w-full h-auto md:h-full md:w-full"
                alt={`Image ${index + 1}`}
              ></img>
              
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Gallery;

