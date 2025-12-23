"use client";
import SimpleBanner from "@/components/ui/cards/SimpleBanner";
import Container from "@/components/ui/Container";
import SwiperSlider from "@/components/ui/Swiper";
import { H2, SubTitle } from "@/components/ui/Text";
import { ProjectTypes } from "@/features/projects/project.types";
import Image from "next/image";
import AllArticles from "../articles/AllArticles";
import CTASection from "@/components/ui/cards/CTASection";
import InfoCardSlider from "@/components/ui/cards/InfoCardSlider";
import BannerSection from "@/components/ui/cards/BannerSection";
import WalkthroghVideoSec from "@/components/ui/cards/WalkThroughVideo";

type SectionProps = { project: ProjectTypes };

const SectionTitle = ({
  title,
  subtitle,
}: {
  title: string;
  subtitle?: string;
}) => (
  <div>
    <H2 className="text-2xl lg:text-4xl">{title}</H2>
    {subtitle ? (
      <SubTitle className="mt-2 text-base lg:text-lg">{subtitle}</SubTitle>
    ) : null}
  </div>
);

const ProjectPage = ({ project }: SectionProps) => {
  const {
    projectName,
    firstHalf,
    secondHalf,
    features,
    gallery,
    videos,
    about,
    location,
    amenitiesSubtitle,
    ctaHeading,
  } = project;

  return (
    <>
      <SimpleBanner firstHalf={firstHalf} secondHalf={secondHalf}>
        {features?.length
          ? features.map((item, idx) => (
              <SubTitle key={idx} className="text-base! font-normal!">
                {item.feature}
              </SubTitle>
            ))
          : null}
      </SimpleBanner>

      {/* Gallery */}
      {gallery?.length ? (
        <div className="py-10 lg:py-24">
          <Container className="mb-5">
            <SectionTitle title="Photos" />
          </Container>
          <SwiperSlider
            items={gallery}
            className="mySwiper center-slider-with-dots center-slider overflow-hidden"
            renderItem={(item, i) => {
              return (
                <div className="relative w-full h-100 lg:h-120 rounded-lg overflow-hidden shadow-md">
                  <Image
                    src={item.img}
                    alt={`slide-${i}`}
                    fill
                    className="object-cover"
                    priority={i === 0}
                  />
                  <div className="absolute top-0 h-full w-full left-0 right-0 p-6 lg:p-8 pt-16 bg-black/10 rounded-lg" />
                </div>
              );
            }}
          />
        </div>
      ) : null}

      {/* Video */}
      <WalkthroghVideoSec />

      {/* About Data */}
      {about && about?.length > 0 && (
        <InfoCardSlider
          mainTitle="The Crown Of Royal Lifestyle."
          items={about}
          titleClassName="text-[22px]! lg:text-3xl! font-semibold! text-[#121212]! mb-1! lg:mb-3"
        />
      )}

      {/* Location */}
      {location &&
        location.map((l, i) => (
          <div key={i}>
            {l.subtitle && (
              <BannerSection
                title={l.title}
                subtitle={l.subtitle}
                image={l.img}
                isLocation={true}
                isMain={false}
              />
            )}
          </div>
        ))}

      {/* Amenities */}
      <Container className="py-20 lg:py-48">
        <SectionTitle title="Amenities" subtitle={amenitiesSubtitle} />
      </Container>

      {/* Cta section */}
      <CTASection title={ctaHeading} />

      {/* articles */}
      <AllArticles />
    </>
  );
};

export default ProjectPage;
