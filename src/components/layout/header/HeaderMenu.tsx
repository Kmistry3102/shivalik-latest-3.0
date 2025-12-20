"use client";

import { Menu } from "lucide-react";
import { useState } from "react";
import MobileMenu from "./MobileMenu";
import { mainNavigationLinks } from "@/constants/header.constant";
import {  H4 } from "@/components/ui/Text";

const HeaderMenu = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div className="flex items-center">
      {/* Desktop Nav */}
      <div className="hidden lg:flex gap-6 font-medium">
        {mainNavigationLinks.map((menu, index) => (
          <div key={index} className="space-y-4">
            <H4>{menu.title}</H4>
          </div>
        ))}
      </div>
      {/* Mobile Menu Button */}
      <button
        onClick={() => setIsMobileMenuOpen(true)}
        className="lg:hidden ml-2 p-2"
        aria-label="Open menu"
      >
        <Menu size={24} />
      </button>

      {/* Mobile Menu */}
      <MobileMenu
        isOpen={isMobileMenuOpen}
        onClose={() => setIsMobileMenuOpen(false)}
      />
    </div>
  );
};

export default HeaderMenu;
