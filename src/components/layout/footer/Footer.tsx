"use client";

import { useState } from "react";
import Link from "next/link";
import FooterMenuItem from "./FooterMenuItem";
import { mainNavigationLinks, socialLinks } from "@/constants/header.constant";
import Container from "@/components/ui/Container";

const Footer = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <footer className="bg-black text-white">
      <Container className="py-16">
        {/* Menu */}
        <div className="grid grid-cols-1 gap-6">
          {mainNavigationLinks.map((item, index) => (
            <FooterMenuItem
              key={index}
              item={item}
              isOpen={openIndex === index}
              onToggle={() =>
                setOpenIndex(openIndex === index ? null : index)
              }
            />
          ))}
        </div>

        {/* Divider */}
        <div className="border-t border-white/30 mt-10 pt-10">
          {/* Social Icons */}
          <div className="flex gap-6 mb-5">
            {socialLinks.links.map((item, index) => {
              const Icon = item.icon;
              return (
                <Link
                  key={index}
                  href={item.src}
                  target="_blank"
                  className="text-white/60 hover:text-white transition"
                >
                  <Icon className="w-5 h-5" />
                </Link>
              );
            })}
          </div>

          {/* Powered By */}
          <p className="text-sm text-white/60">
            Powered by{" "}
            <Link
              href="https://realestateos.com"
              className="text-white hover:text-white/80 text-base"
              target="_blank"
            >
              Real Estate OS
            </Link>
          </p>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
