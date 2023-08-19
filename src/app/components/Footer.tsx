import Image from "next/image";
import { AiOutlinePlaySquare } from "react-icons/ai";
import { BiRepeat } from "react-icons/bi";
import { CgLaptop } from "react-icons/cg";
import { HiOutlineQueueList } from "react-icons/hi2";
import {
  IoIosHeartEmpty,
  IoIosPlay,
  IoIosSkipBackward,
  IoIosSkipForward
} from "react-icons/io";
import { LuMaximize2, LuMic2 } from "react-icons/lu";
import { RxShuffle, RxSpeakerModerate } from "react-icons/rx";

export const Footer: React.FC = () => {
  return (
    <footer className="flex items-center justify-between gap-4 bg-black px-4 pb-2">
      <div className="flex flex-1 items-center gap-3">
        <Image
          className="rounded-md"
          src="/album.jpg"
          width={56}
          height={56}
          alt="Capa do álbum Scaled and Icy da banda Twenty One Pilots"
        />
        <div className="flex flex-col px-2">
          <strong className="font-semibold">Shy Away</strong>
          <span className="text-xs text-zinc-400">Twenty One Pilots</span>
        </div>
        <button className="hover:scale-105">
          <IoIosHeartEmpty
            className="fill-zinc-400 hover:fill-white"
            size={18}
          />
        </button>
      </div>
      <div className="flex flex-auto flex-col items-center gap-2">
        <div className="flex items-center gap-6">
          <RxShuffle size={16} className="text-zinc-200" />
          <IoIosSkipBackward size={24} className="text-zinc-200" />

          <button className="flex h-8 w-8 items-center justify-center rounded-full bg-white pl-1 text-black">
            <IoIosPlay size={24} />
          </button>

          <IoIosSkipForward size={24} className="text-zinc-200" />
          <BiRepeat size={20} className="rotate-180 text-zinc-200" />
        </div>

        <div className="flex w-full items-center justify-center gap-2 px-8">
          <span className="text-xs text-zinc-400">0:58</span>
          <div className="h-1 w-full rounded-full bg-zinc-600">
            <div className="h-1 w-40 rounded-full bg-zinc-200"></div>
          </div>
          <span className="text-xs text-zinc-400">3:57</span>
        </div>
      </div>
      <div className="flex flex-1 items-center justify-end gap-3">
        <AiOutlinePlaySquare size={20} />
        <LuMic2 size={20} />
        <HiOutlineQueueList size={20} />
        <CgLaptop size={20} />
        <div className="flex items-center gap-2">
          <RxSpeakerModerate size={20} />
          <div className="h-1 w-24 rounded-full bg-zinc-600">
            <div className="h-1 w-10 rounded-full bg-zinc-200"></div>
          </div>
        </div>
        <LuMaximize2 size={20} />
      </div>
    </footer>
  );
};
