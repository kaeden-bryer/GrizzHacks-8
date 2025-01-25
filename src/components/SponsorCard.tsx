import React from "react";

interface SponsorProps {
  name: string;
  logo: string;
  tier: "bronze" | "silver" | "gold" | "platinum";
  link: string;
}

const SponsorCard: React.FC<SponsorProps> = ({ name, logo, tier, link }) => {
  let size: string;

  if (tier === "bronze") {
    size = "2xl:w-42 lg:w-36 w-20";
  } else if (tier === "silver") {
    size = "2xl:w-52 lg:w-40 w-24";
  } else if (tier === "gold") {
    size = "2xl:w-56 lg:w-44 w-28";
  } else if (tier === "platinum") {
    size = "2xl:w-60 lg:w-48 w-32";
  } else {
    size = ""; // Default or fallback value in case of unknown tier
  }

  return (
    <>
      <a href={link} className="">
        <img src={`sponsors/${logo}`} alt={`${name} logo`} className={size} />
      </a>
    </>
  );
};

export default SponsorCard;
