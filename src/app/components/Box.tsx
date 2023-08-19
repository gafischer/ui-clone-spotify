import { twMerge } from "tailwind-merge";

interface BoxProps {
  children: React.ReactNode;
  className?: string;
}

const Box: React.FC<BoxProps> = ({ children, className }) => {
  return (
    <div className={twMerge("w-full rounded-lg bg-[#121212]", className)}>
      {children}
    </div>
  );
};

export default Box;
