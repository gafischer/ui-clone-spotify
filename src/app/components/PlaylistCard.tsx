import Image from "next/image";
import PlayButton from "./PlayButton";

interface PlaylistCardProps {
  albumImageSrc: string;
  albumTitle: string;
}

export const PlaylistCard: React.FC<PlaylistCardProps> = ({
  albumImageSrc,
  albumTitle
}) => {
  return (
    <a
      href=""
      className="group flex h-20 items-center gap-4 overflow-hidden rounded bg-white/10 transition-colors hover:bg-white/20"
    >
      <Image
        className="drop-shadow-xl"
        src={albumImageSrc}
        width={80}
        height={80}
        alt="Capa do álbum"
      />
      <strong>{albumTitle}</strong>
      <PlayButton className="ml-auto mr-4 opacity-0 transition-[opacity_400ms,transform_200ms] group-hover:opacity-100" />
    </a>
  );
};
