import React from "react";

interface TrackCardProps {
  title: string;
  description: string;
  icon: string;
}

const TrackCard: React.FC<TrackCardProps> = ({ title, description, icon }) => {
  return (
    <div className="flex flex-col gap-2 lg:gap-4 px-4 bg-bgblue ring-4 ring-primary lg:p-5 p-3 rounded-2xl">
      <div className="flex flex-row items-center justify-center gap-4">
        <img src={icon} alt={`${title} track`} className="w-16" />
        <h2 className="text-xl lg:text-2xl text-blackColor font-semibold">
          {title}
        </h2>
      </div>
      <p className="2xl:text-xl lg:text-lg md:text-base text-sm text-center text-blackColor">
        {description}
      </p>
    </div>
  );
};

export default TrackCard;
