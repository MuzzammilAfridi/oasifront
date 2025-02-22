// src/components/PerfectImageSlider.jsx
import React, { useState, useEffect } from "react";

const images = [
  './electronics-2.webp',
  './electronics.webp',
  './faishon-2.webp',
  './faishon.webp',
  './makeup.webp',
  './sports.webp',
  './travel.webp',
];

const PerfectImageSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  useEffect(() => {
    const interval = setInterval(nextSlide, 4000);  
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full max-w-5xl mx-auto mt-10 overflow-hidden rounded-xl shadow-lg">
      <div
        className="flex transition-transform duration-700 ease-in-out"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {images.map((image, index) => (
          <div key={index} className="w-full h-[70vh] flex-shrink-0">
            <img
              src={image}
              alt={`Slide ${index + 1}`}
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </div>

      {/* Navigation Arrows */}
      <button
        className="absolute z-5 top-1/2 left-[10px] transform -translate-y-1/2 text-white bg-black/60 p-3 rounded-full hover:bg-black transition"
        onClick={prevSlide}
      >
        &#8592;
      </button>
      <button
        className="absolute top-1/2 right-[10px] transform -translate-y-1/2 text-white bg-black/60 p-3 rounded-full hover:bg-black transition"
        onClick={nextSlide}
      >
        &#8594;
      </button>

      {/* Dots Navigation */}
      <div className="absolute bottom-1 left-1/2 transform -translate-x-1/2 flex space-x-3">
        {images.map((_, index) => (
          <div
            key={index}
            className={`w-4 h-4 rounded-full cursor-pointer ${
              index === currentIndex ? "bg-white" : "bg-gray-400"
            }`}
            onClick={() => setCurrentIndex(index)}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default PerfectImageSlider;
