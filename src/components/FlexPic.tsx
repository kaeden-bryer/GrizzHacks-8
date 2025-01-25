import React from "react";
// Import your JSON file
import teamData from "../data/team.json"; // Update with the actual path

const FlexPic = () => {
    return (
        <div className="flex flex-wrap items-center justify-center gap-8 p-4">
            {teamData.map((member, index) => (
                <div
                    key={index}
                    className="bg-primary text-white font-bold rounded-lg sm:w-64 sm:h-72 w-48 h-56  flex flex-col items-center justify-center p-4"
                >
                    {/* Profile Image */}

                    <div className="w-3/4 rounded-lg overflow-hidden mb-4">
                        <img
                            src={member.source}
                            alt={member.name}
                            className="w-full h-full object-cover object-top"
                        />
                    </div>


                    {/* container for text elements in order to left align them with items-start */}

                    <div className=" w-full flex flex-col items-start">
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