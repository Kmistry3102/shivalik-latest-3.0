"use client";
import Image from "next/image";
import Button from "../Button";
import SwiperSlider from "../Swiper";
import Container from "../Container";
import { H2, H3, SubTitle } from "../Text";
import { ChevronRight } from "lucide-react";

const CenterSlider = ({
  mainTitle,
  mainsubTitle,
  items,
}: {
  mainTitle: string;
  mainsubTitle?: string;
  items: any[];
}) => {
  if (!items?.length) return null;

  return (
    <div className="py-10 lg:py-24">
      <Container className="text-center mb-4 lg:mb-6">
        <H2 className="mb-2 lg:mb-3">{mainTitle}</H2>
        <SubTitle className="text-lg!">{mainsubTitle}</SubTitle>
      </Container>
      <SwiperSlider
        items={items}
        className="mySwiper center-slider-with-dots center-slider overflow-hidden mt-6"
        renderItem={(item) => (
          <div className="relative">
            <div className="relative w-full h-112.5 lg:h-115 overflow-hidden">
              <Image
                src={item.bannerImage}
                alt={item.projectName}
                fill
                className="object-cover"
              />
              <div className="absolute bottom-0 left-0 right-0 p-6 lg:p-8 pt-16 bg-linear-to-b from-transparent via-black/60 to-black/93 rounded-b-lg" />
            </div>

            {/* Title */}
            <div className="absolute top-0 left-0 right-0 pt-6 lg:pt-10 px-6 lg:px-8 z-10">
              <H3 className="text-center text-white font-bold!">{item.projectName}</H3>
            </div>

            {/* Buttons */}
            <div className="absolute bottom-0 left-0 right-0 pb-6 flex justify-center gap-2">
              <Button
                label="Inquire"
                href="/contact"
                variant="inverseOutline"
                rightIcon={ChevronRight}
              />
              <Button
                label="Explore"
                href="/projects/crown"
                variant="inverseFilled"
                rightIcon={ChevronRight}
              />
            </div>
          </div>
        )}
      />
    </div>
  );
};

export default CenterSlider;
