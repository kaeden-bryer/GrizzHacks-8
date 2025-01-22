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
    <>
      <div className="flex flex-col justify-center gap-4 relative z-10">
        <div className="bg-yellow absolute top-0 -z-20 w-64 h-72 rounded-xl"></div>
        <a
          href={linkedIn}
          target="_blank"
          rel="noopener noreferrer"
          className="relative top-4 xl:w-52 xl:h-52 lg:w-36 lg:h-36 w-16 h-16 object-cover rounded-lg cursor-pointer mx-auto"
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
        >
          <img
            src={source}
            alt={name}
            className="relative rounded-lg w-full h-full overflow-hidden object-cover object-top -z-10"
          />
          <img
            src="/images/linkedin.svg"
            className="absolute -bottom-5 -right-5 scale-[60%]"
          />
        </a>
        <div className="flex flex-col items-start w-64">
          <h2 className="px-5 font-semibold text-blackColor text-xl mt-1">
            {name}
          </h2>
          <p className="px-5 text-blackColor text-base -mt-1">{title}</p>
        </div>
      </div>
    </>
  );
};

export default TeamPic;
