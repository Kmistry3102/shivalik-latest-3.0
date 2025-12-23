"use client";
import { ReactNode } from "react";
import Container from "../Container";
import { H3 } from "../Text";
import Button from "../Button";
import { ChevronRight } from "lucide-react";

interface SimpleBannerProps {
  firstHalf?: string;
  secondHalf?: string;
  children?: ReactNode;
}
const SimpleBanner = ({
  firstHalf,
  secondHalf,
  children,
}: SimpleBannerProps) => {
  return (
    <Container className="py-10 lg:py-24">
      <div className="space-y-2">
        <div>
          <H3 className="text-[22px] lg:text-3xl text-black font-semibold">
            {firstHalf}
          </H3>
          <H3 className="text-[22px] lg:text-3xl text-black font-semibold">
            {secondHalf}
          </H3>
        </div>
        <div className="space-y-2">{children}</div>
        <div className="flex items-center justify-start gap-2 mt-3">
          <Button
            label="Inquire Now"
            href="/contact"
            variant="outline"
            rightIcon={ChevronRight}
          />
          <Button
            label="Site Visit"
            href="/projects/crown"
            variant="filled"
            rightIcon={ChevronRight}
          />
        </div>
      </div>
    </Container>
  );
};

export default SimpleBanner;
