import React from "react";
// Import your JSON file
import teamData from "../data/team.json"; // Update with the actual path

const FlexPic = () => {
  return (
    <div className="flex flex-wrap items-center justify-center sm:gap-8 gap-6 p-4">
      {teamData.map((member, index) => (
        <div
          key={index}
          className=" text-black font-bold rounded-lg sm:w-64 sm:h-80 w-48 h-60 flex flex-col items-start justify-center p-4"
        >
          {/* Profile Image */}
          <div className="relative w-full rounded-lg overflow-hidden mb-4">
            <img
              src={member.source}
              alt={member.name}
              className="w-full h-full object-cover object-top"
            />

            {/* LinkedIn SVG Icon Overlay */}
            {member.linkedIn && (
              <a
                href={member.linkedIn}
                target="_blank"
                rel="noopener noreferrer"
                className="absolute bottom-2 right-2 z-10"
              >
                {/* SVG LinkedIn Icon */}
                
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  width="24"
                  height="24"
                  fill="white"
                  className="hover:fill-blue-500 transition-colors"
                >
                  <path d="M19 0h-14c-2.2 0-4 1.8-4 4v16c0 2.2 1.8 4 4 4h14c2.2 0 4-1.8 4-4v-16c0-2.2-1.8-4-4-4zm-10 18h-3v-10h3v10zm-1.5-11c-.9 0-1.5-.6-1.5-1.5s.6-1.5 1.5-1.5 1.5.6 1.5 1.5-.6 1.5-1.5 1.5zm11.5 11h-3v-5.5c0-1.4-.9-2.5-2.3-2.5-1.7 0-2.7 1.3-2.7 3v5.5h-3v-10h3v1.3c.4-.7 1.3-1.3 2.4-1.3 1.8 0 3.2 1.5 3.2 3.5v6.5z"/>
                </svg>
              </a>
            )}
          </div>

          {/* Container for text elements */}
          <div className="w-full flex flex-col items-start">
            {/* Name */}
            <h2 className="text-lg font-semibold text-left">{member.name}</h2>
            {/* Title */}
            <p className="text-sm">{member.title}</p>
            {/* LinkedIn (only show if there's a link) */}
            {/* No longer needed here as SVG is handling the LinkedIn link */}
          </div>
        </div>
      ))}
    </div>
  );
};

export default FlexPic;
