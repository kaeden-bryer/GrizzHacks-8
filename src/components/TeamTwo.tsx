import React from "react";
import members from "../data/team.json";
import TeamPic from "./TeamPic";

interface TeamMember {
  source: string;
  linkedIn: string;
  name: string;
  title: string;
}
<TeamPic
              key={index}
              source={member.source}
              linkedIn={member.linkedIn}
              name={member.name}
              title={member.title}
            />

const Team: React.FC = () => {
  return (
    <>
      
        <div>
          {members.map((member: TeamMember, index: number) => (
            



            <div className="flex flex-wrap items-center justify-center gap-8 p-4">
      {Array.from({ length: 11 }).map((_, index) => (
        <div
          key={index}
          className=" bg-primary text-white font-bold rounded-lg sm:w-64 sm:h-72 w-48 h-56 text-center"
        >
          Item {index + 1}

          <img
            src={member.source}
            alt={member.name}
            className="relative rounded-lg w-3/4 h-3/4 overflow-hidden z-10"
          />

        </div>
      ))}
    </div>  
          ))}
        </div>
          


        

    </>
  );
};

export default Team;