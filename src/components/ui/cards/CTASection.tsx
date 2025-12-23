import { ChevronRight } from "lucide-react";
import Button from "../Button";
import Container from "../Container";
import { H3 } from "../Text";

const CTASection = ({ title }: { title?: string }) => {
  return (
    <Container className="bg-black! py-45 promo-card-bg relative">
      {/* Animated background effects */}
      <div className="promo-card-glow" />
      <div className="promo-card-glow" />

      {/* Floating particles */}
      <div className="absolute top-[20%] left-[10%] w-3 h-3 bg-white/50 rounded-full blur-[2px] animate-[particleFloat_8s_ease-in-out_infinite] z-3" />
      <div className="absolute top-[60%] left-[25%] w-4 h-4 bg-white/40 rounded-full blur-[2px] animate-[particleFloat_10s_ease-in-out_infinite_2s] z-3" />
      <div className="absolute top-[40%] right-[15%] w-3 h-3 bg-white/45 rounded-full blur-[2px] animate-[particleFloat_9s_ease-in-out_infinite_1s] z-3" />
      <div className="absolute top-[70%] right-[30%] w-4 h-4 bg-white/40 rounded-full blur-[2px] animate-[particleFloat_11s_ease-in-out_infinite_3s] z-3" />
      <div className="absolute top-[30%] left-[40%] w-3 h-3 bg-white/50 rounded-full blur-[2px] animate-[particleFloat_7s_ease-in-out_infinite_1.5s] z-3" />

      {/* Light beam effect */}
      <div className="absolute top-0 left-0 w-full h-full opacity-50 z-2 pointer-events-none overflow-hidden">
        <div className="absolute top-0 left-0 w-[200%] h-full bg-linear-to-r from-transparent via-white/20 to-transparent animate-[beamSweep_8s_ease-in-out_infinite]" />
      </div>

      <div className="promo-card-content w-full mx-auto text-white flex flex-col items-center justify-center gap-12">
        <div className="flex flex-col items-center gap-5">
          {/* Title */}
          <H3 className="text-white text-center">{title}</H3>

          {/* Buttons */}
          <div className="flex gap-3">
            <Button
              label="Inquire Now"
              href="/contact"
              variant="inverseOutline"
              rightIcon={ChevronRight}
            />
            <Button
              label="Site Visit"
              href="/projects/crown"
              variant="inverseFilled"
              rightIcon={ChevronRight}
            />
          </div>
        </div>
      </div>
    </Container>
  );
};

export default CTASection;
