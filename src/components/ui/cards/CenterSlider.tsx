"use client"; 
import Image from "next/image";
import SwiperSlider from "../Swiper";
import { H3 } from "../Text";
import Button from "../Button";
import { ChevronRight } from "lucide-react";

const CenterSlider = ({ items }: { items: any }) => {
  return (
    <SwiperSlider
      items={items}
      className="center-slider overflow-hidden"
      renderItem={(item) => (
        <div className="relative">
          <div className="relative w-full h-112.5 lg:h-100 overflow-hidden">
            <Image
              src={item.image}
              alt={item.title}
              fill
              className="object-cover"
            />
            <div className="absolute bottom-0 left-0 right-0 p-6 lg:p-8 pt-16 bg-linear-to-b from-transparent via-black/60 to-black/93 rounded-b-lg" />
          </div>

          {/* Title */}
          <div className="absolute top-0 left-0 right-0 pt-6 lg:pt-16 px-6 lg:px-8 z-10">
            <H3>{item.title}</H3>
          </div>

          {/* Buttons */}
          <div className="absolute bottom-0 left-0 right-0 pb-6 flex justify-center gap-4">
            <Button
              label="Inquire"
              href="/contact"
              variant="outline"
              rightIcon={ChevronRight}
            />
            <Button
              label="Explore"
              href="/projects/crown"
              variant="filled"
              rightIcon={ChevronRight}
            />
          </div>
        </div>
      )}
    />
  );
};

export default CenterSlider;
