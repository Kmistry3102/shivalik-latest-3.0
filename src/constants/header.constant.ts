import { User } from "lucide-react";
import { SiFacebook, SiInstagram, SiLinkedin, SiYoutube } from "react-icons/si";

export const mainNavigationLinks = [
  {
    title: "Products",
    href: "/projects",
    subMenu: [
      { label: "2BHK", href: "/" },
      { label: "3BHK", href: "/" },
      { label: "4BHK", href: "/" },
      { label: "Offices", href: "/" },
      { label: "Retail", href: "/" },
    ],
  },
  {
    title: "Ecosystem",
    href: "/ecosystem",
    subMenu: [
      { label: "Furniture", href: "/" },
      { label: "Education", href: "/" },
      { label: "Fund", href: "/" },
      { label: "OS", href: "/" },
    ],
  },
  {
    title: "Connect",
    href: "/projects",
    subMenu: [
      { label: "Growth Partner", href: "/" },
      { label: "Grade A", href: "/" },
      { label: "Farmland", href: "/" },
    ],
  },
  {
    title: "Login",
    href: "/login",
    icon: User,
  },
  {
    title: "Download App",
    isAppDownload: true,
  },
];

// Social Media Links
export const socialLinks = {
  links: [
    { src: "https://facebook.com/ShivalikGroup", icon: SiFacebook },
    { src: "https://instagram.com/shivalikgroup", icon: SiInstagram },
    // { src: "https://twitter.com/shivalik_group", icon: SiX },
    { src: "https://in.linkedin.com/company/shivalik-group", icon: SiLinkedin },
    {
      src: "https://www.youtube.com/channel/UCsy9wUC47HDWZuVxl-h6-Ug",
      icon: SiYoutube,
    },
  ],
};

// App Store URLs
export const APP_STORE_URL =
  "https://apps.apple.com/in/app/r-reimagined-real-estate/id6747890096";
export const PLAY_STORE_URL =
  "https://play.google.com/store/apps/details?id=com.realEstateOS";
