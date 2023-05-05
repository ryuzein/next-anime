import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";

interface AnimeCardProps {
  title: string;
  type: string;
  image: string;
  newEpisodes?: {
    episodeId: string;
    episodeTitle: string;
    episodeNumber: number;
  };
}

const AnimeCard: React.FC<AnimeCardProps> = ({
  image,
  title,
  type,
  newEpisodes,
}) => {
  return (
    <div className="rounded-md overflow-hidden relative">
      <LazyLoadImage
        width="100%"
        src={image}
        effect="blur"
        className="aspect-[124/185]"
      />
      <div className="bg-[#2A2C31] p-2 mt-[-6px]">
        <h3 className="text-sm font-semibold line-clamp-1">{title}</h3>
        <p className="text-xs text-gray-500 mt-1 flex items-center justify-between">
          <span>{type}</span>
          {newEpisodes && <span>Episodes: {newEpisodes.episodeNumber}</span>}
        </p>
      </div>
    </div>
  );
};

export default AnimeCard;
