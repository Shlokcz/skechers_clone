import React from "react";
import styles from "./shopbystyles.module.css";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { Navigation, Pagination } from "swiper/modules";

const shoes = [
  {
    title: "SLIP_INS",
    src: "/images/slipins.png",
  },
  {
    title: "UNOs",
    src: "/images/unos.png",
  },
  {
    title: "CASUAL SNEAKERS",
    src: "/images/sneaker.png",
  },
  {
    title: "LACE-UPS",
    src: "/images/laceup.png",
  },
  {
    title: "LACE-UPS",
    src: "/images/laceup.png",
  },
  {
    title: "LACE-UPS",
    src: "/images/laceup.png",
  },
  {
    title: "LACE-UPS",
    src: "/images/laceup.png",
  },
];

const Shopbystyles = () => {
  return (
    <div className={styles.shopbystyles}>
      <div className={styles.line}></div>
      <p>Shop By Styles</p>
      <Swiper
        loop={true}
        modules={[Navigation, Pagination]}
        spaceBetween={0}
        slidesPerView={3.5}
        navigation={true}
        pagination={{ clickable: true }}
        autoplay={{ delay: 3000 }} // Enables autoplay
        className={styles.swiperContainer}
      >
        {shoes.map((item, index) => (
          <SwiperSlide key={index} className={styles.imageSlider}>
            <img src={item.src} alt={`Slide ${index + 1}`} />
            <p>{item.title}</p>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Shopbystyles;
