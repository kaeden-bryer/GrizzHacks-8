import React from "react";
import SponsorGrid from "./SponsorGrid";

const Sponsor = () => {
  return (
    <>
      <section id="sponsors" className="containerr my-16 relative">
        <h1 className="flex justify-center bg-gradient-to-b from-primaryBlueStart to-primaryBlueEnd z-20 bg-clip-text text-center text-5xl py-2 text-transparent font-bold lg:text-7xl">
          Sponsors
        </h1>
        <div className="relative z-10">
          <img
            src="/sponsor-duck.svg"
            className="absolute -right-[13rem] md:-right-[12rem] lg:-right-[10rem] scale-[15%] md:scale-[20%] lg:scale-[25%] -top-[17rem] md:-top-[18rem] lg:-top-[19rem] xl:-top-[16rem] object-cover"
          />
        </div>
        <SponsorGrid />
      </section>
    </>
  );
};

export default Sponsor;
