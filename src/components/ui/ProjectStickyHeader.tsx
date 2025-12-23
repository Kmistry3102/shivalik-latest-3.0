"use client";
import { motion } from "framer-motion";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import { ChevronRight } from "lucide-react";
import Logo from "./Logo";

interface Props {
  projectName: string;
  mainHeaderHidden: boolean;
}

const ProjectStickyHeader = ({ projectName, mainHeaderHidden }: Props) => {
  return (
    <motion.div
      animate={{
        top: mainHeaderHidden ? 0 : 0, 
      }}
      transition={{ duration: 0.3, ease: "easeOut" }}
      className="sticky z-40 bg-white/70 backdrop-blur-xl border-b border-gray-200"
    >
      <Container>
        <div className="flex items-center justify-between py-3">
          <div className="flex items-center justify-end gap-1">
            <Logo />
            <span className="font-light text-2xl">|</span>
            <h2 className="text-lg font-semibold mt-1">{projectName}</h2>
          </div>

          <Button
            label="Enquire"
            href="/contact"
            variant="outline"
            rightIcon={ChevronRight}
            className="py-1.5!"
          />
        </div>
      </Container>
    </motion.div>
  );
};

export default ProjectStickyHeader;