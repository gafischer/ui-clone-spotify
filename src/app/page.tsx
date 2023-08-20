import Image from "next/image";
import { FaUsers } from "react-icons/fa";
import { GoChevronLeft, GoChevronRight } from "react-icons/go";
import { Footer } from "./components/Footer";
import { FriendActivity } from "./components/FriendActivity";
import { PlaylistCard } from "./components/PlaylistCard";
import { PlaylistMix } from "./components/PlaylistMix";
import { Sidebar } from "./components/Sidebar";

const Home: React.FC = () => {
  return (
    <div className="flex h-screen flex-col">
      <div className="flex h-full py-2">
        <Sidebar />
        <main className="flex-1 overflow-hidden rounded-lg bg-gradient-to-b from-indigo-800 to-[#121212] to-35% p-5 hover:overflow-y-auto">
          <header className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <button className="h-8 w-8 rounded-full bg-black/70 p-1">
                <GoChevronLeft size={24} />
              </button>
              <button className="h-8 w-8 rounded-full bg-black/70 p-1">
                <GoChevronRight size={24} />
              </button>
            </div>
            <div className="flex items-center gap-2">
              <button className="flex h-8 w-8 items-center justify-center rounded-full bg-black/70 hover:scale-105 hover:bg-black/90">
                <FaUsers size={16} />
              </button>
              <button className="h-8 w-8 rounded-full bg-black/70 p-1 hover:scale-105 hover:bg-black/90">
                <div className="h-6 w-6 overflow-hidden rounded-full">
                  <Image
                    src="/user.jpg"
                    width={32}
                    height={32}
                    alt="Spotify User"
                  />
                </div>
              </button>
            </div>
          </header>

          <h1 className="mt-7 text-3xl font-semibold">Good Afternoon</h1>

          <div className="mt-4 grid grid-cols-3 gap-4">
            <PlaylistCard
              albumImageSrc="/album.jpg"
              albumTitle="Scaled and Icy"
            />
            <PlaylistCard
              albumImageSrc="/album.jpg"
              albumTitle="Scaled and Icy"
            />
            <PlaylistCard
              albumImageSrc="/album.jpg"
              albumTitle="Scaled and Icy"
            />
            <PlaylistCard
              albumImageSrc="/album.jpg"
              albumTitle="Scaled and Icy"
            />
            <PlaylistCard
              albumImageSrc="/album.jpg"
              albumTitle="Scaled and Icy"
            />
            <PlaylistCard
              albumImageSrc="/album.jpg"
              albumTitle="Scaled and Icy"
            />
          </div>

          <h2 className="mt-12 text-2xl font-semibold">Made for You</h2>

          <div className="mt-6 grid grid-cols-6 gap-6 2xl:grid-cols-6">
            <PlaylistMix
              albumImageSrc="https://dailymix-images.scdn.co/v2/img/ab6761610000e5ebc33cc15260b767ddec982ce8/1/pt-BR/default"
              albumTitle="Daily Mix 1"
              albumDescription="Red Hot Chilli Peppers, Imagine Dragons, Foo Fighters and more"
            />
            <PlaylistMix
              albumImageSrc="https://dailymix-images.scdn.co/v2/img/ab6761610000e5eb196972172c37d934d9ca8093/2/pt-BR/default"
              albumTitle="Daily Mix 2"
              albumDescription="Twenty One Pilots, Hozier, All Time Low and more"
            />
            <PlaylistMix
              albumImageSrc="https://dailymix-images.scdn.co/v2/img/ab6761610000e5eb86410d56f64ab44eca2fe1fa/3/pt-BR/default"
              albumTitle="Daily Mix 3"
              albumDescription="Oriente, Gabriel O Pensador, Maneva and more"
            />
            <PlaylistMix
              albumImageSrc="https://dailymix-images.scdn.co/v2/img/ab6761610000e5ebc36dd9eb55fb0db4911f25dd/4/pt-BR/default"
              albumTitle="Daily Mix 4"
              albumDescription="Bruno Mars, Pitbull, Avicii more"
            />
          </div>
        </main>
        <FriendActivity />
      </div>
      <Footer />
    </div>
  );
};

export default Home;
