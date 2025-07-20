// src/components/Carousel/CarouselRightNav.js
import React, { forwardRef } from "react";
import { ReactComponent as RightArrow } from "../../assets/rightArrow.svg";
import styles from "./Carousel.module.css";

const CarouselRightNav = forwardRef((_, ref) => {
  return (
    <div ref={ref} className={`${styles.navButton} ${styles.right}`}>
      <RightArrow />
    </div>
  );
});

export default CarouselRightNav;
