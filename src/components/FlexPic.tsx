import React from "react";
// Import your JSON file
import teamData from "../data/team.json"; // Update with the actual path

const FlexPic = () => {
  return (
    <>
      <h1 className="flex justify-center bg-gradient-to-b from-primaryBlueStart to-primaryBlueEnd z-20 bg-clip-text text-center text-5xl py-2 text-transparent font-bold lg:text-7xl">
        Meet Our Team
      </h1>
      <div className="font-montserrat grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 justify-items-center gap-1 p-4">
        {teamData.map((member, index) => (
          <div
            key={index}
            className="rounded-lg w-full h-auto flex flex-col items-start justify-center p-4"
          >
            {/* Profile Image */}
            <div className="relative w-full 2xl:h-64 xl:h-56 lg:h-52 md:h-48 sm:h-44 h-auto max-h-40 sm:max-h-none rounded-lg overflow-hidden mb-4">
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
                  className="p-2 absolute z-20 scale-[50%] md:scale-[60%] -right-8 -bottom-8 md:-right-6 md:-bottom-6"
                />
              </a>
            </div>

            {/* Container for text elements */}
            <div className="font-montserrat w-full flex flex-col items-start -mt-4">
              {/* Name */}
              <h2 className="font-semibold text-blackColor text-lg md:text-xl mt-1 font-montserrat">
                {member.name}
              </h2>
              {/* Title */}
              <p className="text-blackColor text-sm md:text-base -mt-1 font-montserrat">
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
