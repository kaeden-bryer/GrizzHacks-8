import React from "react";
import members from "../data/team.json";
import TeamPic from "./TeamPic";

interface TeamMember {
  source: string;
  linkedIn: string;
  name: string;
  title: string;
}

const Team: React.FC = () => {
  return (
    <>
      <section id="team" className="containerr my-16">
        <h1 className="flex justify-center mb-5 bg-gradient-to-b from-primaryBlueStart to-primaryBlueEnd z-20 bg-clip-text text-center text-5xl py-2 text-transparent font-bold lg:text-7xl">
          Meet Our Team
        </h1>
        <div className="flex justify-center items-center xl:gap-8 gap-4 flex-wrap">
          {members.map((member: TeamMember, index: number) => (
            <TeamPic
              key={index}
              source={member.source}
              linkedIn={member.linkedIn}
              name={member.name}
              title={member.title}
            />
          ))}
        </div>
      </section>
    </>
  );
};

export default Team;
