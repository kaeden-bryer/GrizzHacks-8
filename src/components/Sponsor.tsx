import React from "react";
import SponsorGrid from "./SponsorGrid";

const Sponsor = () => {
  return (
    <>
      <section id="sponsors" className="containerr my-16">
        <h1 className="flex justify-center mb-5 bg-gradient-to-b from-primaryBlueStart to-primaryBlueEnd z-20 bg-clip-text text-center text-5xl py-2 text-transparent font-bold lg:text-7xl">
          Sponsors
        </h1>
        {/* <SponsorGrid /> */}
        <div className="flex flex-col justify-center items-center gap-10 mt-20">
          <img
            src="/images/sponsor_logos/oucu.svg"
            alt="Oakland University Credit Union"
            className="w-80"
          />
          <img
            src="/images/sponsor_logos/cyberOU.svg"
            alt="CyberOU"
            className="w-64"
          />
          <div className="flex items-center">
            <img
              src="/images/sponsor_logos/mlh-logo-color.svg"
              alt="MLH"
              className="w-40"
            />
            <img
              src="/images/sponsor_logos/people-health.svg"
              alt="People.Health"
              className="w-40 object-cover"
            />
            <img
              src="/images/sponsor_logos/stand-out-stickers-logo.png"
              alt="StandOut Stickers"
              className="w-40"
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default Sponsor;
