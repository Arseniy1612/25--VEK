import React, { useState, useContext } from "react";
import "./Gallery.css";
import { LanguageContext } from "../context/LanguageContext";
import img1 from "../assets/gallery1.jpg";
import img2 from "../assets/gallery2.jpg";
import img3 from "../assets/gallery3.jpg";
import img4 from "../assets/gallery4.jpg";
import img5 from "../assets/gallery5.jpg";
import img6 from "../assets/gallery6.jpg";

function Gallery() {
  const { language } = useContext(LanguageContext);

  const [activeImg, setActiveImg] = useState(null);

  const images = [
    img1,
    img2,
    img3,
    img4,
    img5,
    img6,
  ];

  return (
    <section className="gallery">

      <h1>
        {language === "ru"
          ? "Фотогалерея"
          : "Фотогалерея"}
      </h1>

      <div className="gallery-grid">

        {images.map((img, i) => (
          <div
            className="gallery-item"
            key={i}
            onClick={() => setActiveImg(img)}
          >
            <img src={img} alt="" />
          </div>
        ))}

      </div>
      {activeImg && (
        <div
          className="fullscreen"
          onClick={() => setActiveImg(null)}
        >
          <img src={activeImg} alt="" />
        </div>
      )}

    </section>
  );
}

export default Gallery;