import Image from "next/image";
import PlayButton from "./PlayButton";

interface PlaylistMixProps {
  albumImageSrc: string;
  albumTitle: string;
  albumDescription: string;
}

export const PlaylistMix: React.FC<PlaylistMixProps> = ({
  albumImageSrc,
  albumTitle,
  albumDescription
}) => {
  return (
    <a
      href=""
      className="group relative flex flex-col rounded-lg bg-zinc-900 p-5 transition-colors hover:bg-zinc-800"
    >
      <div className="relative">
        <Image
          src={albumImageSrc}
          className="w-full rounded-md drop-shadow-lg"
          width={120}
          height={120}
          alt="Capa do álbum"
        />
        <PlayButton className="absolute bottom-0 right-0 -translate-x-2 opacity-0 [transition:transform_200ms,opacity_300ms] group-hover:-translate-y-2 group-hover:opacity-100" />
      </div>
      <strong className="mt-6 line-clamp-1 font-bold">{albumTitle}</strong>
      <span className="mt-2 line-clamp-2 text-sm text-zinc-400">
        {albumDescription}
      </span>
    </a>
  );
};
