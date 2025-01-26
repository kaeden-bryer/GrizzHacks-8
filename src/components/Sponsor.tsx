import React from "react";
import SponsorGrid from "./SponsorGrid";

const Sponsor = () => {
  return (
    <>
      <section id="sponsors" className="containerr relative font-montserrat">
        <h1 className="flex justify-center bg-gradient-to-b from-primaryBlueStart to-primaryBlueEnd z-20 bg-clip-text text-center text-5xl py-2 text-transparent font-bold lg:text-7xl">
          Sponsors
        </h1>
        <div className="md:-mt-16 -mt-12 flex flex-col justify-end items-end relative">
          <div className="flex justify-end w-full max-w-40 max-h-64 overflow-hidden">
            <img
              src="/sponsor-duck.svg"
              className="mr-4 w-2/5 h-auto md:w-1/2 md:h-auto lg:w-2/3 lg:h-auto object-cover"
            />
          </div>
          <div className="w-full">
            <SponsorGrid />
          </div>
        </div>
      </section>
    </>
  );
};

export default Sponsor;
