import { User } from "lucide-react";
import { SiFacebook, SiInstagram, SiLinkedin, SiYoutube } from "react-icons/si";

export const mainNavigationLinks = [
  {
    title: "Products",
    href: "/projects",
    subMenu: [
      {
        label: "2BHK",
        href: "/",
        subSubMenu: [
          {
            name: "Parklane",
            image: "/header/parklane.png",
            type: "2BHK",
            location: "Keshavbaug",
            href: "/",
          },
          {
            name: "Skyview",
            image: "/header/skyview.png",
            type: "2BHK",
            location: "Gift City",
            href: "/",
          },
        ],
      },
      {
        label: "3BHK",
        href: "/",
        subSubMenu: [
          {
            name: "Greenfield",
            image: "/header/greenfield.png",
            type: "3BHK",
            location: "Shantigram",
            href: "/",
          },
          {
            name: "Parkview 2",
            image: "/header/parkview-2.png",
            type: "3BHK",
            location: "Shela",
            href: "/",
          },
          {
            name: "Skyview",
            image: "/header/skyview.png",
            type: "3BHK",
            location: "Gift City",
            href: "/",
          },
        ],
      },
      {
        label: "4BHK",
        href: "/",
        subSubMenu: [
          {
            name: "Greenfield",
            image: "/header/greenfield.png",
            type: "4BHK",
            location: "Shantigram",
            href: "/",
          },
          {
            name: "Crown",
            image: "/header/crown.png",
            type: "4BHK",
            location: "Bhat",
            href: "/",
          },
          {
            name: "Edge",
            image: "/header/edge.png",
            type: "4BHK",
            location: "Ambli",
            href: "/",
          },
          {
            name: "Greenview",
            image: "/header/greenview.png",
            type: "4BHK",
            location: "Shela",
            href: "/",
          },
        ],
      },
      {
        label: "Offices",
        href: "/",
        subSubMenu: [
          {
            name: "Wave",
            image: "/header/wave.png",
            type: "Offices",
            location: "Vaishnodevi",
            href: "/",
          },
          {
            name: "SPlus",
            image: "/header/splus.png",
            type: "Offices",
            location: "Ognaj",
            href: "/",
          },
          {
            name: "Trophy",
            image: "/header/trophy.png",
            type: "Offices",
            location: "Gift City",
            href: "/",
          },
          {
            name: "The Circle",
            image: "/header/the-circle.png",
            type: "Offices",
            location: "Visat Circle",
            href: "/",
          },
          {
            name: "Curv",
            image: "/header/curv.png",
            type: "Offices",
            location: "Gift City",
            href: "/",
          },
        ],
      },
      {
        label: "Retail",
        href: "/",
        subSubMenu: [
          {
            name: "Wave",
            image: "/header/wave.png",
            type: "Retail",
            location: "Vaishnodevi",
            href: "/",
          },
          {
            name: "SPlus",
            image: "/header/splus.png",
            type: "Retail",
            location: "Ognaj",
            href: "/",
          },
          {
            name: "Parklane",
            image: "/header/parklane.png",
            type: "Retail",
            location: "Keshavbaug",
            href: "/",
          },
          {
            name: "Parkview 2",
            image: "/header/parkview-2.png",
            type: "Retail",
            location: "Shela",
            href: "/",
          },
          {
            name: "Harmony",
            image: "/header/harmony.png",
            type: "Retail",
            location: "Panjrapol",
            href: "/",
          },
          {
            name: "The Circle",
            image: "/header/the-circle.png",
            type: "Retail",
            location: "Visat Circle",
            href: "/",
          },
        ],
      },
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
      {
        label: "Growth Partner",
        href: "/",
        subSubMenu: [
          { label: "Investment Partner", href: "/" },
          { label: "Developer Partner (for partnerships)", href: "/" },
          { label: "Earn (Vendors, CPs, Contractors, Talent)", href: "/" },
          { label: "Incubation (Developer,Product,Services)", href: "/" },
        ],
      },
      { label: "Grade A", href: "/" },
      {
        label: "Farmland",
        href: "/",
        subSubMenu: [
          {
            name: "Farmland",
            image: "/header/farmland.png",
            type: "6000/sq.yd",
            location: "Sachana",
            href: "/",
          },
        ],
      },
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
