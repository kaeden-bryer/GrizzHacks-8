import React from "react";
import SponsorGrid from "./SponsorGrid";

const Sponsor = () => {
  return (
    <>
      <section id="sponsors" className="containerr my-16">
        <h1 className="flex justify-center mb-5 bg-gradient-to-b from-primaryBlueStart to-primaryBlueEnd z-20 bg-clip-text text-center text-5xl py-2 text-transparent font-bold lg:text-7xl">
          Sponsors
        </h1>
        <SponsorGrid />
      </section>
    </>
  );
};

export default Sponsor;
