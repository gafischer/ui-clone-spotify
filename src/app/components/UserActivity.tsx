import { AiOutlineUser } from "react-icons/ai";
import { BiMusic, BiUserVoice } from "react-icons/bi";
import { LiaDotCircle } from "react-icons/lia";

interface UserActivityProps {
  userName: string;
  songName: string;
  artistName: string;
  playlist: string;
  lastAction: string;
  playlistType: "Artist" | "Song" | "Playlist";
}

const playlistIcons = {
  Artist: <BiUserVoice size={16} />,
  Song: <LiaDotCircle size={16} />,
  Playlist: <BiMusic size={16} />
};

const UserActivity: React.FC<UserActivityProps> = ({
  userName,
  songName,
  artistName,
  playlist,
  lastAction,
  playlistType
}) => {
  return (
    <div className="flex gap-2 text-zinc-300">
      <div className="flex h-11 w-11 items-center justify-center rounded-full bg-zinc-500">
        <AiOutlineUser size={20} className="text-white" />
      </div>
      <div className="flex flex-1 flex-col justify-between">
        <div className="flex justify-between">
          <a href="" className="text-xs font-bold hover:underline">
            {userName}
          </a>
          <span className="text-[10px] font-semibold">{lastAction}</span>
        </div>
        <a href="" className="text-xs hover:underline">
          {songName} • {artistName}
        </a>
        <a href="" className="flex items-center gap-1 text-xs hover:underline">
          {playlistIcons[playlistType]}
          {playlist}
        </a>
      </div>
    </div>
  );
};

export default UserActivity;
