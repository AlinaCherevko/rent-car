//import React from "react";
import { FaRegArrowAltCircleRight } from "react-icons/fa";
import { GoDotFill } from "react-icons/go";
import { FaRegArrowAltCircleLeft } from "react-icons/fa";
import { useState } from "react";
import PropTypes from "prop-types";

import css from "./ImageSlider.module.css";

function ImageSlider({ slides }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToNextSlide = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };
  const goToPreviosSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };
  const goToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex);
  };
  return (
    <div className={css.imgContainer}>
      <FaRegArrowAltCircleLeft
        className={css.leftArrow}
        onClick={() => goToPreviosSlide(currentIndex)}
      />
      <FaRegArrowAltCircleRight
        className={css.rightArrow}
        onClick={() => goToNextSlide(currentIndex)}
      />
      <div className={css.sliderWrap}>
        <img
          className={css.img}
          width="800px"
          src={slides[currentIndex].url}
          alt={slides[currentIndex].title}
        />
      </div>
      <ul className={css.dotList}>
        {slides.map((slide, slideIndex) => (
          <li
            className={currentIndex === slideIndex ? css.active : css.dotItem}
            key={slideIndex}
            onClick={() => goToSlide(slideIndex)}
          >
            <GoDotFill />
          </li>
        ))}
      </ul>
    </div>
  );
}
ImageSlider.propTypes = {
  slides: PropTypes.array.isRequired,
};

export default ImageSlider;
