"use client";

import "swiper/css";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import { IoMdArrowDroprightCircle } from "react-icons/io";
import Image from "next/image";
import { H3 } from "../Text";

interface WalkthroughVideo {
  id: string;
  title: string;
  youtubeUrl: string; // full YouTube URL
  embedUrl: string; // https://www.youtube.com/embed/...
  thumbnail: string; // path from /public
}

interface WalkthroughVideoSecProps {
  sectionTitle?: string;
  videos?: WalkthroughVideo[];
  autoplayDelay?: number;
  className?: string;
}

const DEFAULT_VIDEOS: WalkthroughVideo[] = [
  {
    id: "crown-video-1",
    title: "Walkthrough 1",
    youtubeUrl: "https://youtu.be/RXYz_tf6rEM",
    embedUrl: "https://www.youtube.com/embed/RXYz_tf6rEM",
    thumbnail: "/video/video1.png",
  },
  {
    id: "crown-video-2",
    title: "Walkthrough 2",
    youtubeUrl: "https://youtu.be/nbA0Rl60vcs",
    embedUrl: "https://www.youtube.com/embed/nbA0Rl60vcs",
    thumbnail: "/video/video2.png",
  },
];

export default function WalkthroghVideoSec({
  sectionTitle = "Walkthrough Video",
  videos = DEFAULT_VIDEOS,
  autoplayDelay = 4000,
  className = "",
}: WalkthroughVideoSecProps) {
  return (
    <>
      {/* Full-width Video Slider */}
      <div className="w-full overflow-hidden py-12">
        <Swiper
          spaceBetween={5}
          slidesPerView={1}
          centeredSlides={true}
          modules={[Autoplay, Pagination]}
          autoplay={{
            delay: 2500,
          }}
          pagination={{
            clickable: true,
            dynamicBullets: true,
          }}
          breakpoints={{
            320: {
              slidesPerView: 1,
            },
            640: {
              slidesPerView: 1,
            },
            768: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 3,
            },
            1280: {
              slidesPerView: 4,
            },
            1920: {
              slidesPerView: 5,
            },
          }}
          className="mySwiper center-slider-with-dots center-slider"
        >
          {videos.map((video, index) => (
            <SwiperSlide key={video.id || index}>
              <div className="w-full flex justify-center">
                <div className="relative w-full lg:max-w-6xl h-125 lg:h-125 overflow-hidden bg-black">
                  {/* Thumbnail for better perceived performance */}
                  <Image
                    src={video.thumbnail}
                    alt={video.title}
                    fill
                    className="object-cover"
                    priority={index === 0}
                  />

                  {/* Dark overlay */}
                  <div className="absolute inset-0 bg-black/30" />

                  {/* Play button + title overlay */}
                  <a
                    href={video.youtubeUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="absolute inset-0 flex flex-col items-center justify-between gap-3 text-white group py-10 px-8"
                  >
                    <H3 className="text-white/90">
                      {video.title}
                    </H3>

                    <div>
                      <IoMdArrowDroprightCircle className="text-white/90 text-4xl" />
                    </div>
                    <div></div>
                  </a>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </>
  );
}
