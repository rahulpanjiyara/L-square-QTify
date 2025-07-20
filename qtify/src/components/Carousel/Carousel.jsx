// src/components/Carousel/Carousel.js
import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import styles from "./Carousel.module.css";

import CarouselLeftNav from "./CarouselLeftNav";
import CarouselRightNav from "./CarouselRightNav";

function Carousel({ data, renderItem }) {
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  return (
    <div className={styles.carouselContainer}>
      <div className={styles.navWrapper}>
        <CarouselLeftNav ref={prevRef} />
        <CarouselRightNav ref={nextRef} />
      </div>

      <Swiper
        modules={[Navigation]}
        navigation={{
          prevEl: prevRef.current,
          nextEl: nextRef.current,
        }}
        onInit={(swiper) => {
          swiper.params.navigation.prevEl = prevRef.current;
          swiper.params.navigation.nextEl = nextRef.current;
          swiper.navigation.init();
          swiper.navigation.update();
        }}
        spaceBetween={20}
        breakpoints={{
          320: { slidesPerView: 2 },
          600: { slidesPerView: 3 },
          960: { slidesPerView: 5 },
          1280: { slidesPerView: 8 },
        }}
      >
        {data.map((item, index) => (
          <SwiperSlide key={index}>{renderItem(item)}</SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default Carousel;
