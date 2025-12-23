"use client";

import Image from "next/image";
import clsx from "clsx";
import Button from "../Button";
import { H1, SubTitle } from "../Text";
import { ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";
import Container from "../Container";

export interface BannerButton {
  label: string;
  href?: string;
  onClick?: () => void;
}

export interface BannerSectionProps {
  title?: string;
  subtitle: string;
  image?: string;
  isButton?: boolean;
  className?: string;
  isTitleLogo?: boolean;
  logo?: string;
  isMain?: boolean;
  isLocation?: boolean;
}

export default function BannerSection({
  title,
  isTitleLogo = false,
  logo,
  subtitle,
  image,
  isButton = true,
  className,
  isMain = true,
  isLocation = false,
}: BannerSectionProps) {
  return (
    <section
      className={`relative w-full h-170 ${
        isMain && !isLocation ? "" : "py-10 lg:py-24 "
      } ${className}`}
    >
      {/* Background Image */}
      {image && (
        <>
          <div className="absolute inset-0">
            <Image
              src={image}
              alt={subtitle}
              fill
              priority
              className="object-cover object-top"
            />
          </div>

          {isLocation && <div className="absolute inset-0 bg-black/20"></div>}
        </>
      )}

      {/* Content */}
      <Container>
        <div className="relative z-10 flex h-full items-start justify-center py-12 lg:py-24">
          <div className="flex flex-col items-center space-y-3 lg:space-y-6">
            {/* Title */}
            {isTitleLogo ? (
              <Image
                src={logo || ""}
                alt={"Logo"}
                width={260}
                height={40}
                className="w-full lg:w-100 h-auto mx-auto object-contain"
              />
            ) : (
              <H1
                className={`${
                  isLocation
                    ? "text-3xl lg:text-4xl font-medium text-white/80 "
                    : "text-black"
                }`}
              >
                {title}
              </H1>
            )}

            {/* Subtitle */}
            <SubTitle
              className={
                isTitleLogo
                  ? "text-base! lg:text-lg!"
                  : isLocation
                  ? "text-base text-white/70 font-medium! text-center"
                  : isMain
                  ? "text-[#575757] text-lg"
                  : ""
              }
            >
              {subtitle}
            </SubTitle>

            {/* Buttons */}
            {isButton && !isLocation && (
              <div className="flex items-center justify-center gap-2 mt-1.5">
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
            )}

            {isButton && isLocation && (
              <div className="flex items-center justify-center gap-2">
                <Button
                  label="Inquire Now"
                  href="/contact"
                  variant="inverseOutline"
                  rightIcon={ChevronRight}
                />
                <Button
                  label="Get Direction"
                  href="/projects/crown"
                  variant="inverseFilled"
                  rightIcon={ChevronRight}
                />
              </div>
            )}
          </div>
        </div>
      </Container>
    </section>
  );
}
