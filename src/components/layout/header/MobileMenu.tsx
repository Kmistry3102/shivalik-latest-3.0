"use client";

import { FC } from "react";
import Link from "next/link";
import {  PhoneCallIcon, User, X } from "lucide-react";
import { H2, H3, H4 } from "@/components/ui/Text";
import { motion, AnimatePresence } from "framer-motion";
import { useOutsideClick } from "@/hooks/useOutsideClick";
import { mainNavigationLinks } from "@/constants/header.constant";
import Button from "@/components/ui/Button";

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

const drawerVariants = {
  hidden: { x: "100%" },
  visible: { x: 0 },
};

const MobileMenu: FC<MobileMenuProps> = ({ isOpen, onClose }) => {
  const sideBarRef = useOutsideClick<HTMLDivElement>(onClose);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 z-50"
          initial="hidden"
          animate="visible"
          exit="hidden"
        >
          {/* Drawer */}
          <motion.div
            ref={sideBarRef}
            variants={drawerVariants}
            transition={{
              type: "spring",
              stiffness: 260,
              damping: 28,
              mass: 0.8,
            }}
            className="absolute right-0 top-0 h-screen w-full bg-white flex flex-col"
          >
            {/* Sticky Header */}
            <div className="sticky top-0 z-10 flex items-center justify-between bg-white px-8 py-4  border-b border-b-gray-200">
              <H2>Menu</H2>
              <button
                onClick={onClose}
                className="p-1.5 rounded-full bg-gray-100 hover:bg-gray-200 transition"
              >
                <X size={20} />
              </button>
            </div>

            {/* Scrollable Content */}
            <div className="flex-1 overflow-y-auto px-8 py-6 space-y-8">
              {mainNavigationLinks.map((menu, index) => (
                <div key={index} className="space-y-4">
                  <H3>{menu.title}</H3>

                  {menu.subMenu && (
                    <ul className="space-y-2">
                      {menu.subMenu.map((item, idx) => (
                        <li key={idx}>
                          <Link
                            href={item.href}
                            onClick={onClose}
                            className="group block rounded-lg px-2 py-2 transition hover:bg-gray-100"
                          >
                            <H4 className="flex items-center text-gray-700">
                              <span className="mr-3 h-1.5 w-1.5 rounded-full bg-gray-300 transition group-hover:scale-125 group-hover:bg-black" />
                              {item.label}
                            </H4>
                          </Link>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              ))}
            </div>

            {/* Sticky Footer */}
            <div className="sticky bottom-0 border-t border-gray-200 bg-white px-8 py-5">
              <div className="flex items-center justify-center gap-2">
                <Button
                  label="Login"
                  href="/login"
                  variant="outline"
                  leftIcon={User}
                />
                <Button
                  label="Contact"
                  href="/contact"
                  variant="filled"
                  leftIcon={PhoneCallIcon}
                />
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default MobileMenu;
