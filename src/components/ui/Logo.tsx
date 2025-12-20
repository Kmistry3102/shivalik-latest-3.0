import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";

const Logo = ({ className }: { className?: string }) => {
  return (
    <Link href={"/"}>
      <Image
        src="/main-logo.svg"
        alt="Shivalik logo"
        width={128}
        height={32}
        priority
        className={cn("w-20 lg:w-28 object-cover", className)}
      />
    </Link>
  );
};

export default Logo;
