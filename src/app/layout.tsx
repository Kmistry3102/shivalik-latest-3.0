import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/layout/header/Header";
import Footer from "@/components/layout/footer/Footer";

export const metadata: Metadata = {
  title: {
    template: "%s | Shivalik Group",
    default: "Shivalik Group – Building Trust Through Excellence",
  },
  description:
    "Shivalik Group is a trusted real estate and construction company delivering high-quality residential and commercial projects with innovation and integrity.",
  keywords: [
    "Shivalik Group",
    "real estate company",
    "construction company",
    "residential projects",
    "commercial projects",
  ],
  openGraph: {
    title: "Shivalik Group",
    description:
      "Building premium residential and commercial spaces with trust and quality.",
    url: "https://shivalikgroup.com",
    siteName: "Shivalik Group",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`antialiased`}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
