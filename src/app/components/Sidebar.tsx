import { FiPlus, FiSearch } from "react-icons/fi";
import { GoHomeFill } from "react-icons/go";
import { LuLibrary } from "react-icons/lu";
import Box from "./Box";

export const Sidebar: React.FC = () => {
  return (
    <aside className="flex w-72 flex-col gap-y-2 bg-black px-2">
      <Box>
        <nav className="space-y-5 p-4">
          <a
            href=""
            className="flex items-center gap-3 text-sm font-semibold text-zinc-200 transition-colors"
          >
            <GoHomeFill size={24} />
            Home
          </a>
          <a
            href=""
            className="flex items-center gap-3 text-sm font-semibold text-zinc-400 transition-colors hover:text-zinc-200"
          >
            <FiSearch size={24} />
            Search
          </a>
        </nav>
      </Box>
      <Box className="h-full">
        <nav className="flex items-center justify-between p-4">
          <a
            href=""
            className="flex items-center gap-3 text-sm font-semibold text-zinc-400 transition-colors hover:text-zinc-200"
          >
            <LuLibrary size={24} />
            Your Library
          </a>
          <button
            type="button"
            className="flex items-center gap-3 rounded-full p-1 text-sm font-semibold text-zinc-400 transition-colors hover:bg-[#1a1a1a] hover:text-zinc-200"
          >
            <FiPlus size={20} />
          </button>
        </nav>
      </Box>
    </aside>
  );
};
