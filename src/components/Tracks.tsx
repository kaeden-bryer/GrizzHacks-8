import React from "react";
import TrackCard from "./TrackCard";

const Tracks = () => {
  return (
    <>
      <section id="tracks" className="containerr my-20 oultine outline-white">
        <h1 className="flex justify-center mb-5 bg-gradient-to-b from-primaryBlueStart to-primaryBlueEnd z-20 bg-clip-text text-center text-5xl py-2 text-transparent font-bold lg:text-7xl">
          Tracks
        </h1>
        <div className="grid lg:grid-cols-2 gap-6">
          <TrackCard
            title={"Automotive"}
            description={
              "The Automotive Track is driving into the next generation of automotive innovation. Explore the technologies that are reshaping how we travel, and interact with vehicles. The Automotive Track invites creators to design the future of automotive technology with a vision for smarter, and a more connected world."
            }
            icon={"/images/AutomotiveLogo.svg"}
          />
          <TrackCard
            title={"AI/ML"}
            description={
              "The AI/ML Track is where innovation meets intelligence. This track explores the transformative power of artificial intelligence and machine learning. Taking up on discovering algorithms, building smart systems, and applying data science to real world problems. The AI/ML track is the space to innovate, create, and to push boundaries."
            }
            icon={"/images/AILogo.svg"}
          />
          <TrackCard
            title={"DevTools"}
            description={
              "The DevTools Track is designed for developers to create, and enhance the tools of the development world whether it’s building IDEs, automating workflow, or crafting debugging and testing solutions. DevTools focuses on technical innovation meeting efficiency. Delve into the art of tool creation and explore how developers streamline their workflows, productivity, and build new software."
            }
            icon={"/images/DevToolsLogo.svg"}
          />
          <TrackCard
            title={"Social Good"}
            description={
              "The Social Good Track is dedicated to harnessing technology for positive impact. Focusing on finding solutions that address community needs, sustainability challenges, and educational opportunities. The Social Good Track is all about using technology to improve lives, protect the environment, and ensure that education and opportunities are accessible to all."
            }
            icon={"/images/SocialGoodLogo.svg"}
          />
        </div>
      </section>
    </>
  );
};

export default Tracks;
