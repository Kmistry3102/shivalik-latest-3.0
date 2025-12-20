import { cn } from "@/lib/utils";

interface HeadingProps {
  children: React.ReactNode;
  className?: string;
}

export const H1 = ({ className, children }: HeadingProps) => {
  return <h1 className={cn("text-[32px] leading-tight lg:text-5xl font-medium text-black tracking-tight", className)}> {children} </h1>;
};

export const H2 = ({ className, children }: HeadingProps) => {
  return (
    <h2 className={cn("text-xl font-semibold", className)}> {children} </h2>
  );
};

export const H3 = ({ className, children }: HeadingProps) => {
  return <h3 className={cn("text-lg font-medium", className)}> {children} </h3>;
};

export const H4 = ({ className, children }: HeadingProps) => {
  return <h4 className={cn("text-base", className)}> {children} </h4>;
};

export const H5 = ({ className, children }: HeadingProps) => {
  return <h5 className={cn("", className)}> {children} </h5>;
};

export const H6 = ({ className, children }: HeadingProps) => {
  return <h6 className={cn("", className)}> {children} </h6>;
};

export const SubTitle = ({ className, children }: HeadingProps) => {
  return <p className={cn("text-[16px] leading-tight lg:text-xl text-black/70 font-medium", className)}> {children} </p>;
};
