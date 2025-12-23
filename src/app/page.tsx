import AllArticles from "@/components/section/articles/AllArticles";
import BannerSection from "@/components/ui/cards/BannerSection";
import CenterSlider from "@/components/ui/cards/CenterSlider";
import InfoCardSlider from "@/components/ui/cards/InfoCardSlider";
import Container from "@/components/ui/Container";
import { Ecosystem } from "@/constants/ecosystem.constant";
import { Projects } from "@/constants/projects.constant";
import Link from "next/link";

const Home = () => {
  return (
    <>
      <Container className="bg-[#F5F5F7]! py-5!">
        <div className="">
          <div className="text-base font-normal text-[#575757]">
            Enjoy flexible EMI options with added benefits on select plans.
            <Link
              href={"/"}
              className="text-base font-normal text-[#0066CC] ml-1"
            >
              View Offer
            </Link>
          </div>
        </div>
      </Container>

      {/* Banner */}
      <BannerSection
        title="Crown"
        subtitle="4 BHK Apartments • Bhat"
        image="/main-banner.png"
      />

      {/* All Projects */}
      <CenterSlider
        mainTitle="New at Shivalik"
        mainsubTitle="Built to Inspire"
        items={Projects}
      />

      <InfoCardSlider mainTitle="Ecosystem" items={Ecosystem.items} />

      <BannerSection
        subtitle="Progress with care and conscience."
        image="/project-banner/growing-banner.png"
        isButton={false}
        isTitleLogo={true}
        isMain={false}
        logo="/growing-logo.svg"
      />

      <AllArticles />
    </>
  );
};

export default Home;
