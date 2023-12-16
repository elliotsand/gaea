// Slider.js
import React, { useState, useEffect } from 'react';

const Slider = () => {
  const [images, setImages] = useState([
    "rcs_DEW1.png",
    "rcs_DEW2.png",
    "rcs_DEW3.png",
    "rcs_DEW4.png",
    "rcs_DEW5.png",
    "rcs_DEW6.png",
  ]);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 1000);

    return () => clearInterval(interval);
  }, [images]);

  return (
    <div className="slider-container">
      <img src={`/images/${images[currentIndex]}`} alt={`Slide ${currentIndex + 1}`} />
    </div>
  );
};

export default Slider;
