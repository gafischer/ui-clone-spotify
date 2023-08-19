import { IoIosPlay } from "react-icons/io";
import { twMerge } from "tailwind-merge";

interface PlayButtonProps {
  className?: string;
}

const PlayButton: React.FC<PlayButtonProps> = ({ className }) => {
  return (
    <button
      className={twMerge(
        "flex h-12 w-12 items-center justify-center rounded-full bg-green-500 text-black drop-shadow-lg hover:scale-110 hover:brightness-105",
        className
      )}
    >
      <IoIosPlay className="ml-[1px]" size={28} />
    </button>
  );
};

export default PlayButton;
