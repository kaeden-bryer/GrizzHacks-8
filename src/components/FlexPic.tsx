import React from "react";
// Import your JSON file
import teamData from "../data/team.json"; // Update with the actual path

const FlexPic = () => {
    return (
        <div className="flex flex-wrap items-center justify-center gap-8 p-4">
            {teamData.map((member, index) => (
                <div
                    key={index}
                    className="bg-primary text-white font-bold rounded-lg sm:w-64 sm:h-80 w-48 h-56 flex flex-col items-start justify-center p-4"
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
                                className="absolute bottom-2 left-2 p-1 bg-blue-500 rounded-full"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="24"
                                    height="24"
                                    fill="white"
                                    viewBox="0 0 24 24"
                                >
                                    <path d="M22.23 0h-20.46c-.99 0-1.77.78-1.77 1.77v20.46c0 .99.78 1.77 1.77 1.77h20.46c.99 0 1.77-.78 1.77-1.77v-20.46c0-.99-.78-1.77-1.77-1.77zm-12.85 18.23h-3.53v-9.7h3.53v9.7zm-1.77-11.11c-1.13 0-1.77-.86-1.77-1.81 0-.95.64-1.81 1.77-1.81s1.77.86 1.77 1.81c0 .95-.64 1.81-1.77 1.81zm11.62 11.11h-3.53v-5.17c0-1.23-.45-2.07-1.59-2.07-.86 0-1.37.58-1.6 1.15-.08.2-.1.48-.1.75v5.33h-3.53v-9.7h3.53v1.31c1.68-2.48 4.76-1.92 4.76 1.17v7.91z"/>
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
                        {member.linkedIn && (
                            <a
                                href={member.linkedIn}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-blue-300 underline mt-2"
                            >
                                LinkedIn
                            </a>
                        )}
                    </div>
                </div>
            ))}
        </div>
    );
};

export default FlexPic;
