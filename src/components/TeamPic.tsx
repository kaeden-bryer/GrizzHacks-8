"use client";
import React, { useState } from "react";

interface TeamPicProps {
  source: string;
  linkedIn: string;
  name: string;
  title: string;
}

const TeamPic: React.FC<TeamPicProps> = ({ source, linkedIn, name, title }) => {
  const [hovered, setHovered] = useState(false);
  return (
    <div className="flex flex-col items-center gap-0.5 relative">
      <div className="absolute inset-0 bg-neutral-950/10 rounded-full hidden xl:block"></div>
      <a
        href={linkedIn}
        target="_blank"
        rel="noopener noreferrer"
        className="relative xl:w-44 xl:h-44 lg:w-36 lg:h-36 w-16 h-16 object-cover rounded-full cursor-pointer ring-2 ring-primary ring-opacity-40"
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        <img
          src={source}
          alt={name}
          className="absolute inset-0 rounded-full w-full h-full object-cover object-top -z-10"
        />
        {hovered && (
          <div className="hidden lg:flex h-1/2 w-full absolute bottom-0 bg-gradient-to-b from-transparent to-primaryBlueDark opacity-90 z-10 rounded-b-full justify-center items-end pb-3">
            <div className="flex gap-2 justify-center items-center">
              <p className="xl:text-2xl text-white lg:text-xl text-lg">
                {name}
              </p>
            </div>
          </div>
        )}
      </a>
      <p className="lg:hidden">{name}</p>
    </div>
  );
};

export default TeamPic;
