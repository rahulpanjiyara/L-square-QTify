// src/components/Carousel/CarouselLeftNav.js
import React, { forwardRef } from "react";
import { ReactComponent as LeftArrow } from "../../assets/leftArrow.svg";
import styles from "./Carousel.module.css";

const CarouselLeftNav = forwardRef((_, ref) => {
  return (
    <div ref={ref} className={`${styles.navButton} ${styles.left}`}>
      <LeftArrow />
    </div>
  );
});

export default CarouselLeftNav;
