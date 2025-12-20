"use client";

import Image from "next/image";
import clsx from "clsx";
import Button from "../Button";
import { H1, SubTitle } from "../Text";
import { ChevronRight } from "lucide-react";

export interface BannerButton {
  label: string;
  href?: string;
  onClick?: () => void;
}

export interface BannerSectionProps {
  title: string;
  subtitle: string;
  image: string;

  buttons?: {
    primary?: BannerButton;
    secondary?: BannerButton;
  };
  className?: string;
}

export default function BannerSection({
  title,
  subtitle,
  image,
  className,
}: BannerSectionProps) {
  return (
    <section className={clsx("relative w-full h-170", className)}>
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src={image}
          alt={title}
          fill
          priority
          className="object-cover object-top"
        />
      </div>

      {/* Content */}
      <div className="relative z-10 flex h-full items-start justify-center py-12 lg:py-24">
        <div className="flex flex-col items-center space-y-3 lg:space-y-6">
          {/* Title */}
          <H1>{title}</H1>

          {/* Subtitle */}
          <SubTitle >
            {subtitle}
          </SubTitle>
          {/* Buttons */}
          <div className="flex items-center justify-center gap-4">
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
      </div>
    </section>
  );
}
