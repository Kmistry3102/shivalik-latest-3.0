"use client";

import { FC } from "react";
import Link from "next/link";
import { ArrowLeft, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { H3, H4, H5 } from "@/components/ui/Text";
import Button from "@/components/ui/Button";
import Image from "next/image";

interface SubMenuItem {
  label: string;
  href: string;
  name: string;
  image: string;
  type: string;
  location: string;
}

interface MobileSubMenuPanelProps {
  activeMenu: string | null;
  menuItems: SubMenuItem[];
  onBack: () => void;
  onClose: () => void;
}

const panelVariants = {
  hidden: { x: "100%", opacity: 0 },
  visible: { x: 0, opacity: 1 },
  exit: { x: "100%", opacity: 0 },
};

const MobileSubMenuPanel: FC<MobileSubMenuPanelProps> = ({
  activeMenu,
  menuItems,
  onBack,
  onClose,
}) => {
  return (
    <AnimatePresence>
      {activeMenu && (
        <motion.div
          key="submenu-panel"
          variants={panelVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
          transition={{
            type: "spring",
            stiffness: 300,
            damping: 30,
            mass: 0.8,
          }}
          className="absolute right-0 top-0 w-full h-screen bg-white z-60 flex flex-col"
        >
          {/* TOP BAR */}
          <div className="sticky top-0 flex items-center justify-between bg-white px-8 py-4">
            <button onClick={onBack}>
              <ArrowLeft size={20} />
            </button>

            <button
              onClick={onClose}
              className="p-1.5 rounded-full bg-gray-100 hover:bg-gray-200"
            >
              <X size={20} />
            </button>
          </div>

          <div className="px-8 my-4">
            {/* TITLE */}
            {activeMenu === "Growth Partner" && (
              <div className="mb-4">
                <H3 className="text-black">{activeMenu}</H3>
              </div>
            )}

            {/* SUBMENU LIST */}
            <div className="space-y-4">
              {menuItems.map((item, index) => {
                return (
                  <Link
                    key={index}
                    href={item.href}
                    onClick={onClose}
                    className="block text-base text-gray-700"
                  >
                    {item.label && (
                      <H4 className="text-base text-gray-700">{item.label}</H4>
                    )}

                    {item.name && (
                      <div className="rounded-xl p-4 border border-gray-100 hover:border-gray-200 transition-colors duration-200 relative z-50">
                        <div className="flex items-end justify-between">
                          {/* Content Section */}
                          <div className="flex-1 min-w-0 space-y-2">
                            {item.name && (
                              <H4 className="text-xl text-black font-semibold leading-tight">
                                {item.name}
                              </H4>
                            )}

                            {item.type && item.location && (
                              <H5 className="text-sm text-gray-600 leading-relaxed">
                                {item.type} at {item.location}
                              </H5>
                            )}

                            {item.name && (
                              <div className="flex gap-2">
                                <Button
                                  label="Learn More"
                                  variant="outline"
                                  className="border-none p-0! text-gray-700 font-light!"
                                />
                                <Button
                                  label="Inquire Now"
                                  variant="filled"
                                  className="border-none p-0! bg-transparent! text-gray-700! font-light!"
                                />
                              </div>
                            )}


                          </div>

                          {item.image && (
                            <div className="shrink-0">
                              <Image
                                src={item.image}
                                alt={item.name}
                                width={90}
                                height={90}
                                className="object-contain"
                              />
                            </div>
                          )}
                        </div>
                      </div>
                    )}
                  </Link>
                );
              })}
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default MobileSubMenuPanel;
