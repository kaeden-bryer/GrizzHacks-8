"use client";
import React, { useState } from "react";
// Import your JSON file
import teamData from "../data/team.json"; // Update with the actual path

const FlexPic = () => {
  return (
    <>
      <h1 className="flex justify-center bg-gradient-to-b from-primaryBlueStart to-primaryBlueEnd z-20 bg-clip-text text-center text-5xl py-2 text-transparent font-bold lg:text-7xl">
        Meet Our Team
      </h1>
      <div className="flex flex-wrap items-center justify-center sm:gap-8 gap-6 p-4 lg:-mt-8 -mt-16">
        {teamData.map((member, index) => (
          <div
            key={index}
            className="rounded-lg sm:w-64 sm:h-80 w-48 h-60 flex flex-col items-start justify-center p-4"
          >
            {/* Profile Image */}
            <div className="relative w-full rounded-lg overflow-hidden mb-4">
              <img
                src={member.source}
                alt={member.name}
                className="w-full h-full object-cover object-top"
              />
              <a
                href={member.linkedIn}
                target="_blank"
                rel="noopener noreferrer"
                className="absolute bottom-0 right-0 rounded-lg z-20 w-full h-full hover:bg-navWhite/10"
              >
                <img
                  src="/images/linkedin.svg"
                  className="p-2 absolute z-20 scale-[60%] -right-6 -bottom-6"
                />
              </a>
            </div>

            {/* Container for text elements */}
            <div className="w-full flex flex-col items-start -mt-4">
              {/* Name */}
              <h2 className="font-semibold text-blackColor text-xl mt-1 font-montserrat">
                {member.name}
              </h2>
              {/* Title */}
              <p className="text-blackColor text-base -mt-1 font-montserrat">
                {member.title}
              </p>
              {/* LinkedIn (only show if there's a link) */}
              {/* No longer needed here as SVG is handling the LinkedIn link */}
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default FlexPic;
