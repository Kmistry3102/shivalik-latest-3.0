"use client";

import Link from "next/link";
import clsx from "clsx";
import { LucideIcon } from "lucide-react";

interface ButtonProps {
  label: string;
  href?: string;
  variant?: "outline" | "filled";
  leftIcon?: LucideIcon;
  rightIcon?: LucideIcon;
  onClick?: () => void;
  className?: string;
}

const Button = ({
  label,
  href = "#",
  variant = "outline",
  leftIcon: LeftIcon,
  rightIcon: RightIcon,
  onClick,
  className,
}: ButtonProps) => {
  const baseStyles =
    "group inline-flex items-center gap-2 lg:px-6 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 justify-center";

  const variants = {
    outline: "border border-black text-black hover:bg-black hover:text-white",
    filled: "bg-black text-white hover:bg-black/90",
  };

  return (
    <Link
      href={href}
      onClick={onClick}
      className={clsx(baseStyles, variants[variant], className)}
    >
      {/* Left Icon */}
      {LeftIcon && (
        <LeftIcon className="w-4 h-4 transition-transform duration-300 group-hover:-translate-x-0.5" />
      )}

      <span>{label}</span>

      {/* Right Icon */}
      {RightIcon && (
        <RightIcon className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5" />
      )}
    </Link>
  );
};

export default Button;
