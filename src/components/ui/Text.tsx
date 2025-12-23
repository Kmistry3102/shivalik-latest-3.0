import { cn } from "@/lib/utils";

interface HeadingProps {
  children: React.ReactNode;
  className?: string;
}

export const H1 = ({ className, children }: HeadingProps) => {
  return (
    <h1
      className={cn(
        "text-4xl lg:text-5xl font-medium text-[#121212]",
        className
      )}
    >
      {children}
    </h1>
  );
};

export const H2 = ({ className, children }: HeadingProps) => {
  return (
    <h2
      className={cn(
        "text-3xl lg:text-4xl font-medium text-[#121212]",
        className
      )}
    >
      {children}
    </h2>
  );
};

export const H3 = ({ className, children }: HeadingProps) => {
  return (
    <h3 className={cn("text-2xl lg:text-3xl text-white ", className)}>
      {children}
    </h3>
  );
};

export const H4 = ({ className, children }: HeadingProps) => {
  return <h4 className={cn("text-lg", className)}> {children} </h4>;
};

export const H5 = ({ className, children }: HeadingProps) => {
  return (
    <h5 className={cn("text-base font-normal text-gray-800", className)}>
      {" "}
      {children}{" "}
    </h5>
  );
};

export const H6 = ({ className, children }: HeadingProps) => {
  return <h6 className={cn("", className)}> {children} </h6>;
};

export const SubTitle = ({ className, children }: HeadingProps) => {
  return (
    <p
      className={cn(
        "text-xl leading-tight lg:text-2xl text-[#575757] font-medium",
        className
      )}
    >
      {children}
    </p>
  );
};
