"use client";

import type { ReactNode } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";

interface SwiperSliderProps {
  items: any[];
  renderItem: (item: any, index: number) => ReactNode;
  autoplayDelay?: number;
  spaceBetween?: number;
  breakpoints?: any;
  slidesPerView?: number;
  loop?: boolean;
  className?: string;
  pagination?: boolean; // <-- NEW
}

export default function SwiperSlider({
  items,
  renderItem,
  autoplayDelay = 3000,
  spaceBetween = 10,
  slidesPerView = 1.3,
  loop = true,
  className = "",
  pagination = true, // <-- NEW default
  breakpoints = {
    320: { slidesPerView: 1.3 },
    640: { slidesPerView: 1.3 },
    768: { slidesPerView: 2.3 },
    1024: { slidesPerView: 3.3 },
    1280: { slidesPerView: 4.3 },
    1920: { slidesPerView: 5.3 },
  },
}: SwiperSliderProps) {
  return (
    <Swiper
      spaceBetween={spaceBetween}
      slidesPerView={slidesPerView}
      loop={loop}
      centeredSlides={true}
      modules={pagination ? [Autoplay, Pagination] : [Autoplay]} // <-- CONDITIONAL
      autoplay={{
        delay: autoplayDelay,
        disableOnInteraction: false,
      }}
      pagination={
        pagination
          ? { clickable: true, dynamicBullets: true }
          : false // <-- IMPORTANT
      }
      breakpoints={breakpoints}
      className={className}
    >
      {items.map((item, index) => (
        <SwiperSlide key={index}>{renderItem(item, index)}</SwiperSlide>
      ))}
    </Swiper>
  );
}
