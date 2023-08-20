import { AiOutlineClose, AiOutlineUserAdd } from "react-icons/ai";
import Box from "./Box";
import UserActivity from "./UserActivity";

export const FriendActivity: React.FC = () => {
  return (
    <aside className="flex w-72 bg-black px-2">
      <Box className="h-full p-4">
        <div className="flex items-center justify-between">
          <span className="font-semibold">Firend Activity</span>
          <div className="flex">
            <button
              type="button"
              className="flex items-center gap-3 rounded-full p-1 text-sm font-semibold text-zinc-400 transition-colors hover:text-zinc-200"
            >
              <AiOutlineUserAdd size={20} />
            </button>
            <button
              type="button"
              className="flex items-center gap-3 rounded-full p-1 text-sm font-semibold text-zinc-400 transition-colors duration-300 hover:bg-[#292929] hover:text-zinc-200"
            >
              <AiOutlineClose size={20} />
            </button>
          </div>
        </div>
        <div className="mt-3 space-y-8">
          <UserActivity
            userName="Kleyton Camargo"
            songName="Lágrimas"
            artistName="Baco Exu do Blues"
            playlist="Baco Exu do Blues"
            lastAction="21 min"
            playlistType="Artist"
          />
          <UserActivity
            userName="Zenmuron"
            songName="Dark Horse"
            artistName="Katy Perry"
            playlist="PRISM"
            lastAction="11 hr"
            playlistType="Song"
          />
          <UserActivity
            userName="Mateus Silva"
            songName="hesitation"
            artistName="Andrew Garden"
            playlist="Indie/Surf Rock"
            lastAction="1 d"
            playlistType="Playlist"
          />
        </div>
      </Box>
    </aside>
  );
};
