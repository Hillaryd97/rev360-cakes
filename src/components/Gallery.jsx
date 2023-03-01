import React, { useState } from "react";
import gallery1 from "./assets/IMG_6703_Original.jpg";
import gallery2 from "./assets/IMG_6704_Original.jpg";
import gallery3 from "./assets/IMG_6705_Original.jpg";
import gallery4 from "./assets/IMG_6706_Original.jpg";
import gallery5 from "./assets/IMG_6707_Original.jpg";
import gallery6 from "./assets/IMG_6708_Original.jpg";
import gallery7 from "./assets/IMG_6709_Original.jpg";
import gallery8 from "./assets/IMG_6710_Original.jpg";
import gallery9 from "./assets/IMG_6711_Original.jpg";
import gallery10 from "./assets/IMG_6712_Original.jpg";
import gallery15 from "./assets/IMG_6714_Original.jpg";
import gallery16 from "./assets/pexels-javon-swaby-1829423.jpg";
import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";
import { motion } from "framer-motion";

const Gallery = () => {
  const slides = [
    {
      url: `${gallery9}`,
    },
    {
      url: `${gallery2}`,
    },
    {
      url: `${gallery3}`,
    },
    {
      url: `${gallery4}`,
    },
    {
      url: `${gallery5}`,
    },
    {
      url: `${gallery6}`,
    },
    {
      url: `${gallery7}`,
    },
    {
      url: `${gallery8}`,
    },
    {
      url: `${gallery1}`,
    },
    {
      url: `${gallery10}`,
    },
    {
      url: `${gallery15}`,
    },
    {
      url: `${gallery16}`,
    },
  ];

  const slideLeft = () => {
    var slider = document.getElementById("slider");
    slider.scrollLeft = slider.scrollLeft - 290;
  };

  const slideRight = () => {
    var slider = document.getElementById("slider");
    slider.scrollLeft = slider.scrollLeft + 290;
  };
  return (
    <div id="gallery" className="h-screen bg-gradient-to-t from-pastel-blue to-pastel-pink flex items-center justify-center py-10">
      <div className="container mx-auto ">
       <div className="mx-4 lg:mx-0">
       <div className="flex flex-col items-center space-y-1 lg:space-y-2">
          <p className="text-2xl font-bold tracking-wide text-dark-blue">
            ~ Gallery ~
          </p>
          <h1 className="text-pink-600 font-bold text-xl lg:text-3xl text-center">
            Custom cakes for every occasion
          </h1>
          <p className="text-center">
            <i>
              Personalize your cake for your special occasion and make it truly
              one of a kind.
            </i>
          </p>
        </div>
        <div className="py-10 relative text-center group ">
          <div className="relative flex items-center">
            <BsChevronCompactLeft onClick={slideLeft} size={40} className="cursor-pointer opacity-50 hover:opacity-100" />
            <div
              id="slider"
              className="w-full h-full overflow-x-scroll scroll whitespace-nowrap scroll-smooth scrollbar-hide"
            >
              {slides.map((slide, slideIndex) => (
                <motion.img 
                  src={`${slide.url}`}
                  key={slideIndex}
                  alt="/"
                  className="w-[300px] h-[300px] lg:w-[400px] lg:h-[400px] inline-block p-2 cursor-pointer hover:scale-105 ease-in-out duration-300"
                />
              ))}
            </div>
            <BsChevronCompactRight onClick={slideRight} size={40} className="cursor-pointer opacity-50 hover:opacity-100" />
          </div>
        </div>
       </div>
      </div>
    </div>
  );
};

export default Gallery;
