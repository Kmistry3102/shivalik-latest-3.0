"use client";
import Image from "next/image";
import SwiperSlider from "../Swiper";
import Container from "../Container";
import { H2, H3, SubTitle } from "../Text";
import Link from "next/link";
import { FiChevronRight } from "react-icons/fi";

const InfoCardSlider = ({
  mainTitle,
  showViewAll = false,
  viewAllHref = "#",
  items,
  titleClassName
}: {
  mainTitle: string;
  showViewAll?: boolean;
  viewAllHref?: string;
  items: any[];
  titleClassName?: string;
}) => {
  if (!items?.length) return null;

  return (
    <div className="pt-10 pb-20 lg:pt-24 lg:pb-48">
      <Container className="text-left mb-4 lg:mb-6">
        <H2 className={`mb-2 lg:mb-3 ${titleClassName}`}>{mainTitle}</H2>
        {showViewAll && (
          <Link
            href={viewAllHref}
            className="text-[#0066CC] hover:text-blue-700 text-sm lg:text-base font-medium transition-colors duration-200 flex items-center gap-1"
          >
            View All <FiChevronRight className="w-4 h-4" />
          </Link>
        )}
      </Container>
      <SwiperSlider
        items={items}
        pagination={false}
        className="mySwiper center-slider overflow-hidden mt-6"
        renderItem={(item) => (
          <div className="block h-full">
            <div className="relative rounded-lg bg-white border border-gray-200 overflow-hidden transition-shadow duration-300 hover:shadow-lg h-full flex flex-col">
              {/* Image Section */}
              <div className="relative w-full h-44 lg:h-70 overflow-hidden">
                <Image
                  src={item.image || item.img}
                  alt={item.title}
                  fill
                  className="object-cover rounded-none!"
                />
              </div>

              {/* Content Section */}
              <div className="p-5 lg:p-6 lg:space-y-2 space-y-1 flex-1 flex flex-col">
                {/* Date */}
                {item.date && (
                  <SubTitle className="text-black/70">{item.date}</SubTitle>
                )}

                {/* Title */}
                <H3 className={`text-lg! lg:text-2xl! font-medium text-black  `}>
                  <span className="line-clamp-1">{item.title}</span>
                </H3>

                {/* Description */}
                {item.description && (
                  <SubTitle className="line-clamp-3 lg:line-clamp-3 text-base! lg:text-lg! font-normal!">
                    {item.description}
                  </SubTitle>
                )}

                 {item.subtitle && (
                  <SubTitle className="line-clamp-3 lg:line-clamp-3 text-base! lg:text-lg! font-normal!">
                    {item.subtitle}
                  </SubTitle>
                )}

                {/* Learn More Link */}
                {item.link && (
                  <Link
                    href={item.link}
                    onClick={item.onClick}
                    className="text-blue-600 hover:text-blue-700 text-base font-normal transition-colors duration-200 mt-auto self-start"
                  >
                    Learn More
                  </Link>
                )}
              </div>
            </div>
          </div>
        )}
      />
    </div>
  );
};

export default InfoCardSlider;
