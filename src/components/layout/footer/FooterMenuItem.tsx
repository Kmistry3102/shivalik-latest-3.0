import { APP_STORE_URL, PLAY_STORE_URL } from "@/constants/header.constant";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { FiChevronDown } from "react-icons/fi";
import { SiAppstore, SiGoogleplay } from "react-icons/si";

interface Props {
  item: any;
  isOpen: boolean;
  onToggle: () => void;
}

const FooterMenuItem = ({ item, isOpen, onToggle }: Props) => {
  const hasSubMenu = item.subMenu?.length > 0;

  // 🔹 Download App
  if (item.isAppDownload) {
    return (
      <div className="flex items-center justify-between">
        <span className="text-base">Download App</span>
        <div className="flex gap-2">
          <Link
            href={APP_STORE_URL}
            target="_blank"
            className="bg-white/20 p-2 rounded-lg"
            aria-label="App Store"
          >
            <SiAppstore className="w-5 h-5" />
          </Link>
          <Link
            href={PLAY_STORE_URL}
            target="_blank"
            className="bg-white/20 p-2 rounded-lg"
            aria-label="Play Store"
          >
            <SiGoogleplay className="w-5 h-5" />
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-5">
      {/* Header */}
      <button
        onClick={hasSubMenu ? onToggle : undefined}
        className="flex items-center justify-between text-left"
      >
        <span className="text-base">{item.title}</span>
        {hasSubMenu && (
          <motion.span
            animate={{ rotate: isOpen ? 180 : 0 }}
            transition={{ duration: 0.3 }}
          >
            <FiChevronDown />
          </motion.span>
        )}
        {!hasSubMenu && item.icon && <item.icon size={18} />}
      </button>

      {/* Submenu */}
      <AnimatePresence>
        {isOpen && hasSubMenu && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <ul className="space-y-4 pl-2">
              {item.subMenu.map((sub: any, idx: number) => (
                <li key={idx}>
                  <Link
                    href={sub.href}
                    className="text-white/70 hover:text-white transition"
                  >
                    {sub.label}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default FooterMenuItem;
