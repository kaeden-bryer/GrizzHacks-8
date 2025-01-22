import React from "react";
import SponsorCard from "./SponsorCard";
import sponsors from "../data/sponsors.json";

const SponsorGrid = () => {
  return (
    <>
      {/* LARGE SCREEN SIZE */}
      <div className="hidden xl:grid grid-cols-5 grid-rows-3 gap-1.5 p-4">
        <a
          href="mailto:grizzhacksou@gmail.com"
          className=" text-blackColor bg-navWhite flex flex-col items-center mt-16 p-6 col-span-5 row-span-1 ring-2 ring-primary rounded-md hover:bg-gradient-to-bl hover:from-primaryBlueEnd hover:via-primaryBlueStart hover:to-primaryBlueEnd"
        >
          <h2 className="text-xl lg:text-2xl 2xl:text-3xl font-semibold">
            Thank you for making GrizzHacks 7 happen! We couldn't do it without
            your support.
          </h2>
          <h3 className="text-lg lg:text-xl 2xl:text-2xl font-base mt-4">
            Looking to sponsor?{" "}
            <span className="underline underline-offset-4 decoration-blackColor hover:decoration-yellow decoration-2">
              Contact us for more details!
            </span>
          </h3>
        </a>
        {/* MLH. Bronze */}
        <a
          href={sponsors[0].link}
          className="p-6 col-span-1 row-span-1 bg-navWhite ring-2 ring-primary flex items-center justify-center rounded-md hover:from-[#CD7F32]/40 hover:via-[#CD7F32]/80 hover:to-[#CD7F32]/40 hover:bg-gradient-to-bl"
        >
          <img
            src={`${sponsors[0].logo}`}
            alt={`${sponsors[0].name} Logo`}
            className="absolute w-40"
          />
        </a>

        {/* OUCU. Gold */}
        <a
          href={sponsors[1].link}
          className="p-6 col-span-2 row-span-2 bg-navWhite ring-2 ring-primary flex items-center justify-center rounded-md hover:from-[#D4AF37]/40 hover:via-[#D4AF37]/80 hover:to-[#D4AF37]/40 hover:bg-gradient-to-bl"
        >
          <img
            src={`${sponsors[1].logo}`}
            alt={`${sponsors[1].name} Logo`}
            className=" w-80"
          />
        </a>

        {/* People.Health. Silver */}
        <a
          href={sponsors[2].link}
          className="p-6 col-span-1 row-span-2 bg-navWhite ring-2 ring-primary flex items-center justify-center rounded-md hover:from-[#C0C0C0]/30 hover:via-[#C0C0C0]/70 hover:to-[#C0C0C0]/30 hover:bg-gradient-to-bl"
        >
          <img
            src={`${sponsors[2].logo}`}
            alt={`${sponsors[2].name} Logo`}
            className="absolute w-80"
          />
        </a>

        {/* CyberOU. Bronze */}
        <a
          href={sponsors[3].link}
          className="p-6 col-span-1 row-span-1 bg-navWhite ring-2 ring-primary flex items-center justify-center rounded-md hover:from-[#CD7F32]/40 hover:via-[#CD7F32]/80 hover:to-[#CD7F32]/40 hover:bg-gradient-to-bl"
        >
          <img
            src={`${sponsors[3].logo}`}
            alt={`${sponsors[3].name} Logo`}
            className="absolute w-40"
          />
        </a>

        {/* StandOutStickers. Bronze */}
        <a
          href={sponsors[4].link}
          className="p-6 col-span-1 row-span-1 bg-navWhite ring-2 ring-primary flex items-center justify-center rounded-md hover:from-[#CD7F32]/40 hover:via-[#CD7F32]/80 hover:to-[#CD7F32]/40 hover:bg-gradient-to-bl"
        >
          <img
            src={`${sponsors[4].logo}`}
            alt={`${sponsors[4].name} Logo`}
            className="absolute w-32"
          />
        </a>

        <a
          href={sponsors[5].link}
          className="p-6 col-span-1 row-span-1 bg-navWhite ring-2 ring-primary flex items-center justify-center rounded-md hover:from-[#CD7F32]/40 hover:via-[#CD7F32]/80 hover:to-[#CD7F32]/40 hover:bg-gradient-to-bl"
        >
          <img
            src={`${sponsors[5].logo}`}
            alt={`${sponsors[5].name} Logo`}
            className="absolute w-32"
          />
        </a>
      </div>

      {/*
            Bronze
            hover:from-[#CD7F32]/40 hover:via-[#CD7F32]/80 hover:to-[#CD7F32]/40 hover:bg-gradient-to-bl

            Silver
            hover:from-[#C0C0C0]/30 hover:via-[#C0C0C0]/70 hover:to-[#C0C0C0]/30 hover:bg-gradient-to-bl

            Gold
            hover:from-[#D4AF37]/40 hover:via-[#D4AF37]/80 hover:to-[#D4AF37]/40 hover:bg-gradient-to-bl
        */}

      {/* TABLET SCREEN SIZE */}
      <div className="hidden lg:grid xl:hidden grid-cols-4 grid-rows-3 gap-1.5 p-4">
        {/* OUCU. Gold */}
        <a
          href={sponsors[1].link}
          className="p-6 col-span-2 row-span-2 bg-navWhite ring-2 ring-primary flex items-center justify-center rounded-md hover:from-[#D4AF37]/40 hover:via-[#D4AF37]/80 hover:to-[#D4AF37]/40 hover:bg-gradient-to-bl"
        >
          <img
            src={`${sponsors[1].logo}`}
            alt={`${sponsors[1].name} Logo`}
            className=" w-80"
          />
        </a>

        {/* People.Health. Silver */}
        <a
          href={sponsors[2].link}
          className="p-6 col-span-2 row-span-1 bg-navWhite ring-2 ring-primary flex items-center justify-center rounded-md hover:from-[#C0C0C0]/30 hover:via-[#C0C0C0]/70 hover:to-[#C0C0C0]/30 hover:bg-gradient-to-bl"
        >
          <img
            src={`${sponsors[2].logo}`}
            alt={`${sponsors[2].name} Logo`}
            className="absolute w-80"
          />
        </a>

        {/* MLH. Bronze */}
        <a
          href={sponsors[0].link}
          className="p-6 col-span-1 row-span-1 bg-navWhite ring-2 ring-primary flex items-center justify-center rounded-md hover:from-[#CD7F32]/40 hover:via-[#CD7F32]/80 hover:to-[#CD7F32]/40 hover:bg-gradient-to-bl"
        >
          <img
            src={`${sponsors[0].logo}`}
            alt={`${sponsors[0].name} Logo`}
            className="absolute w-40"
          />
        </a>

        {/* GITHUB BRONZE */}
        <a
          href={sponsors[5].link}
          className="p-6 col-span-1 row-span-1 bg-navWhite ring-2 ring-primary flex items-center justify-center rounded-md hover:from-[#CD7F32]/40 hover:via-[#CD7F32]/80 hover:to-[#CD7F32]/40 hover:bg-gradient-to-bl"
        >
          <img
            src={`${sponsors[5].logo}`}
            alt={`${sponsors[5].name} Logo`}
            className="absolute w-32"
          />
        </a>

        {/* CyberOU. Bronze */}
        <a
          href={sponsors[3].link}
          className="p-6 col-span-1 row-span-1 bg-navWhite ring-2 ring-primary flex items-center justify-center rounded-md hover:from-[#CD7F32]/40 hover:via-[#CD7F32]/80 hover:to-[#CD7F32]/40 hover:bg-gradient-to-bl"
        >
          <img
            src={`${sponsors[3].logo}`}
            alt={`${sponsors[3].name} Logo`}
            className="absolute w-40"
          />
        </a>

        {/* StandOutStickers. Bronze */}
        <a
          href={sponsors[4].link}
          className="p-6 col-span-1 row-span-1 bg-navWhite ring-2 ring-primary flex items-center justify-center rounded-md hover:from-[#CD7F32]/40 hover:via-[#CD7F32]/80 hover:to-[#CD7F32]/40 hover:bg-gradient-to-bl"
        >
          <img
            src={`${sponsors[4].logo}`}
            alt={`${sponsors[4].name} Logo`}
            className="absolute w-32"
          />
        </a>

        {/* THANK YOU */}
        <a
          href="mailto:grizzhacksou@gmail.com"
          className=" text-blackColor bg-navWhite flex flex-col items-center p-6 col-span-2 row-span-1 ring-2 ring-primary rounded-md hover:bg-gradient-to-bl hover:from-primaryBlueEnd hover:via-primaryBlueStart hover:to-primaryBlueEnd"
        >
          <h2 className="text-xl lg:text-2xl 2xl:text-3xl font-semibold">
            Thank you for making GrizzHacks 7 happen! We couldn't do it without
            your support.
          </h2>
          <h3 className="text-lg lg:text-xl 2xl:text-2xl font-base mt-4">
            Looking to sponsor?{" "}
            <span className="underline underline-offset-4 decoration-blackColor hover:decoration-yellow decoration-2">
              Contact us for more details!
            </span>
          </h3>
        </a>
      </div>

      {/* SMALL SCREEN SIZE MOBILE PHONES */}
      <div className="flex lg:hidden flex-col gap-2 mt-8">
        {/* Gold */}
        <a
          href={sponsors[1].link}
          className="h-[20vh] p-6 bg-navWhite ring-2 ring-primary flex items-center justify-center rounded-md hover:from-[#D4AF37]/40 hover:via-[#D4AF37]/80 hover:to-[#D4AF37]/40 hover:bg-gradient-to-bl"
        >
          <img
            src={`${sponsors[1].logo}`}
            alt={`${sponsors[1].name} Logo`}
            className="w-48"
          />
        </a>

        {/* Grid containing both a silver item and a bronze grid*/}
        <div className=" grid grid-cols-2 gap-2 w-full">
          {/* People.Health */}
          <a
            href={sponsors[2].link}
            className="h-[20vh] col-span-1 p-6 bg-navWhite ring-2 ring-primary flex items-center justify-center rounded-md hover:from-[#C0C0C0]/30 hover:via-[#C0C0C0]/70 hover:to-[#C0C0C0]/30 hover:bg-gradient-to-bl"
          >
            <img
              src={`${sponsors[2].logo}`}
              alt={`${sponsors[2].name} Logo`}
              className="absolute w-60"
            />
          </a>
          {/* bronze grid*/}
          <div className="grid grid-cols-2 gap-2 w-full">
            {/* MLH */}
            <a
              href={sponsors[0].link}
              className="h-[20vh] md:p-4 p-2 col-span-1 row-span-1 bg-navWhite ring-2 ring-primary flex items-center justify-center rounded-md hover:from-[#CD7F32]/40 hover:via-[#CD7F32]/80 hover:to-[#CD7F32]/40 hover:bg-gradient-to-bl"
            >
              <img
                src={`${sponsors[0].logo}`}
                alt={`${sponsors[0].name} Logo`}
                className="w-48"
              />
            </a>
            {/* GITHUB */}
            <a
              href={sponsors[5].link}
              className="h-[20vh] md:p-4 p-2 col-span-1 row-span-1 bg-navWhite ring-2 ring-primary flex items-center justify-center rounded-md hover:from-[#CD7F32]/40 hover:via-[#CD7F32]/80 hover:to-[#CD7F32]/40 hover:bg-gradient-to-bl"
            >
              <img
                src={`${sponsors[5].logo}`}
                alt={`${sponsors[5].name} Logo`}
                className="w-48"
              />
            </a>
          </div>
        </div>
        {/* Silver
            <div className="grid grid-cols-4 gap-2 w-full">
                <a
                    href={sponsors[2].link}
                    className="col-span-2 p-6 bg-neutral-950/80 ring-2 ring-primary flex items-center justify-center rounded-md hover:from-[#C0C0C0]/30 hover:via-[#C0C0C0]/70 hover:to-[#C0C0C0]/30 hover:bg-gradient-to-bl"
                >
                    <img src=
                {`${sponsors[2].logo}`}
                alt={`${sponsors[2].name} Logo`} className="w-48" />
                </a>
            </div>
            */}

        {/* Bronze */}
        <div className="grid grid-cols-4 gap-2 w-full">
          {/* CyberOU */}
          <a
            href={sponsors[3].link}
            className="h-[20vh] md:p-4 p-2 col-span-1 row-span-1 bg-navWhite ring-2 ring-primary flex items-center justify-center rounded-md hover:from-[#CD7F32]/40 hover:via-[#CD7F32]/80 hover:to-[#CD7F32]/40 hover:bg-gradient-to-bl"
          >
            <img
              src={`${sponsors[3].logo}`}
              alt={`${sponsors[3].name} Logo`}
              className="w-48"
            />
          </a>

          {/* STAND OUT */}
          <a
            href={sponsors[4].link}
            className="h-[20vh] md:p-4 p-2 col-span-1 row-span-1 bg-navWhite ring-2 ring-primary flex items-center justify-center rounded-md hover:from-[#CD7F32]/40 hover:via-[#CD7F32]/80 hover:to-[#CD7F32]/40 hover:bg-gradient-to-bl"
          >
            <img
              src={`${sponsors[4].logo}`}
              alt={`${sponsors[4].name} Logo`}
              className="w-48"
            />
          </a>

          <a
            href="mailto:grizzhacksou@gmail.com"
            className=" text-blackColor bg-navWhite flex flex-col items-center justify-center p-3 col-span-2 row-span-1 ring-2 ring-primary rounded-md hover:bg-gradient-to-bl hover:from-primaryBlueEnd hover:via-primaryBlueStart hover:to-primaryBlueEnd"
          >
            <h2 className="md:text-lg text-base font-semibold">
              Thank you for making GrizzHacks 7 happen! We couldn't do it
              without your support.
            </h2>
            <h3 className="text-base mt-2">
              Looking to sponsor?{" "}
              <span className="underline underline-offset-4 decoration-blackColor hover:decoration-yellow decoration-2">
                Contact us for more details!
              </span>
            </h3>
          </a>
        </div>
      </div>
    </>
  );
};

export default SponsorGrid;
