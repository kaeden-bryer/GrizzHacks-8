import React from "react";

interface TrackCardProps {
  title: string;
  description: string;
  icon: string;
}

const TrackCard: React.FC<TrackCardProps> = ({ title, description, icon }) => {
  return (
    <div className="flex flex-col gap-4 px-4 bg-bgblue ring-2 ring-primary lg:p-5 p-3 rounded-md">
      <div className="flex flex-row items-center justify-center gap-4">
        <img src={icon} alt={`${title} track`} className="w-16 lg:w-20" />
        <h5 className="text-xl lg:text-3xl font-bold">{title}</h5>
      </div>
      <p className="2xl:text-xl text-sm text-center">{description}</p>
    </div>
  );
};

export default TrackCard;
