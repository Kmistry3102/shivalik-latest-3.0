import BannerSection from "@/components/ui/cards/BannerSection";
import CenterSlider from "@/components/ui/cards/CenterSlider";
import { Projects } from "@/constants/projects.constant";

const Home = () => {
  return (
    <>
      {/* Banner */}
      <BannerSection
        title="Crown"
        subtitle="4 BHK Apartments • Bhat"
        image="/main-banner.png"
      />

      {/* All Projects */}
      <CenterSlider items={Projects} />
    </>
  );
};

export default Home;
