"use client";
import { useEffect, useState } from "react";
import Container from "@/components/ui/Container";
import Logo from "@/components/ui/Logo";
import HeaderMenu from "./HeaderMenu";
import { usePathname } from "next/navigation";
import { Projects } from "@/constants/projects.constant";
import { motion } from "framer-motion";
import ProjectStickyHeader from "@/components/ui/ProjectStickyHeader";

const Header = () => {
  const pathname = usePathname();
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    let lastScrollY = 0;

    const handleScroll = () => {
      const current = window.scrollY;

      if (current > 200 && current > lastScrollY) {
        setHidden(true);
      } else {
        setHidden(false);
      }

      lastScrollY = current;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isProjectPage = pathname.startsWith("/projects/");
  let projectName = "";

  if (isProjectPage) {
    const slug = pathname.split("/")[2];
    const project = Projects.find((p) => p.slug === slug);
    if (project) projectName = project.projectName;
  }

  return (
    <>
      {/* MAIN HEADER */}
      <motion.header
        animate={{ y: hidden ? -80 : 0 }}
        transition={{ duration: 0.35, ease: "easeOut" }}
        className="sticky top-0 z-50 bg-white/70 backdrop-blur-xl border-b border-gray-200 "
      >
        <Container>
          <div className="flex items-center justify-between py-3">
            <Logo />
            <HeaderMenu />
          </div>
        </Container>
      </motion.header>

      {/* PROJECT HEADER (ALWAYS PRESENT ON PROJECT PAGE) */}
      {isProjectPage && projectName && (
        <ProjectStickyHeader
          projectName={projectName}
          mainHeaderHidden={hidden}
        />
      )}
    </>
  );
};

export default Header;
