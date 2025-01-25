import React from "react";
import SponsorCard from "./SponsorCard";
import sponsors from "../data/sponsors.json";

const SponsorGrid = () => {
  return (
    <>
      {/* LARGE SCREEN SIZE */}
      <div className="hidden xl:grid grid-cols-5 grid-rows-3 gap-1.5 p-4 mt-8">
        {/* MLH. Bronze */}
        <a
          href={sponsors[0].link}
          className="p-6 col-span-1 row-span-1 ring-2 ring-primary bg-bgblue flex items-center justify-center rounded-md hover:from-[#CD7F32]/80 hover:via-[#CD7F32]/40 hover:to-[#CD7F32]/80 hover:bg-gradient-to-bl"
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
          className="p-6 col-span-2 row-span-2 ring-2 ring-primary bg-bgblue flex items-center justify-center rounded-md hover:from-[#D4AF37]/80 hover:via-[#D4AF37]/40 hover:to-[#D4AF37]/80 hover:bg-gradient-to-bl"
        >
          <img
            src={`${sponsors[1].logo}`}
            alt={`${sponsors[1].name} Logo`}
            className=" w-80"
          />
        </a>

        {/* 365 Retail Markets. Silver */}
        <a
          href={sponsors[6].link}
          className="p-6 col-span-2 row-span-1 ring-2 ring-primary bg-bgblue flex items-center justify-center rounded-md hover:from-[#C0C0C0]/70 hover:via-[#C0C0C0]/30 hover:to-[#C0C0C0]/70 hover:bg-gradient-to-bl"
        >
          <img
            src={`${sponsors[6].logo}`}
            alt={`${sponsors[6].name} Logo`}
            className="absolute w-80"
          />
        </a>

        {/* Github. Bronze */}
        <a
          href={sponsors[5].link}
          className="p-6 col-span-1 row-span-1 ring-2 ring-primary bg-bgblue flex items-center justify-center rounded-md hover:from-[#CD7F32]/80 hover:via-[#CD7F32]/40 hover:to-[#CD7F32]/80 hover:bg-gradient-to-bl"
        >
          <img
            src={`${sponsors[5].logo}`}
            alt={`${sponsors[5].name} Logo`}
            className="absolute w-32"
          />
        </a>

        {/* People.Health. Silver */}
        <a
          href={sponsors[2].link}
          className="p-6 col-span-2 row-span-1 ring-2 ring-primary bg-bgblue flex items-center justify-center rounded-md hover:from-[#C0C0C0]/70 hover:via-[#C0C0C0]/30 hover:to-[#C0C0C0]/70 hover:bg-gradient-to-bl"
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
          className="p-6 col-span-1 row-span-1 ring-2 ring-primary bg-bgblue flex items-center justify-center rounded-md hover:from-[#CD7F32]/80 hover:via-[#CD7F32]/40 hover:to-[#CD7F32]/80 hover:bg-gradient-to-bl"
        >
          <img
            src={`${sponsors[3].logo}`}
            alt={`${sponsors[3].name} Logo`}
            className="absolute w-56"
          />
        </a>

        {/* Thank you message */}
        <a
          href="mailto:grizzhacksou@gmail.com"
          className="h-full text-blackColor bg-bgblue flex flex-col justify-center p-6 col-span-3 row-span-1 ring-2 ring-primary rounded-md hover:bg-gradient-to-bl hover:from-primaryBlueEnd/90 hover:via-primaryBlueStart/50 hover:to-primaryBlueEnd/90"
        >
          <h2 className="text-center text-xl lg:text-2xl 2xl:text-3xl font-semibold">
            Thank you for making GrizzHacks 7 happen! We couldn't do it without
            your support.
          </h2>
          <h3 className="text-center text-lg lg:text-xl 2xl:text-2xl font-base mt-4">
            Looking to sponsor?{" "}
            <span className="underline underline-offset-4 decoration-blackColor hover:decoration-faqColor decoration-2">
              Contact us for more details!
            </span>
          </h3>
        </a>

        {/* StandOutStickers. Bronze */}
        <a
          href={sponsors[4].link}
          className="p-6 col-span-1 row-span-1 ring-2 ring-primary bg-bgblue flex items-center justify-center rounded-md hover:from-[#CD7F32]/80 hover:via-[#CD7F32]/40 hover:to-[#CD7F32]/80 hover:bg-gradient-to-bl"
        >
          <img
            src={`${sponsors[4].logo}`}
            alt={`${sponsors[4].name} Logo`}
            className="absolute w-32"
          />
        </a>
      </div>

      {/*
            Bronze
            hover:from-[#CD7F32]/80 hover:via-[#CD7F32]/40 hover:to-[#CD7F32]/80 hover:bg-gradient-to-bl

            Silver
            hover:from-[#C0C0C0]/70 hover:via-[#C0C0C0]/30 hover:to-[#C0C0C0]/70 hover:bg-gradient-to-bl

            Gold
            hover:from-[#D4AF37]/80 hover:via-[#D4AF37]/40 hover:to-[#D4AF37]/80 hover:bg-gradient-to-bl
        */}

      {/* TABLET SCREEN SIZE */}
      <div className="hidden lg:grid xl:hidden grid-cols-4 grid-rows-3 gap-1.5 p-4">
        {/* OUCU. Gold */}
        <a
          href={sponsors[1].link}
          className="p-6 col-span-2 row-span-2 bg-bgblue ring-2 ring-primary flex items-center justify-center rounded-md hover:from-[#D4AF37]/80 hover:via-[#D4AF37]/40 hover:to-[#D4AF37]/80 hover:bg-gradient-to-bl"
        >
          <img
            src={`${sponsors[1].logo}`}
            alt={`${sponsors[1].name} Logo`}
            className=" w-80"
          />
        </a>

        {/* 365 Retail Markets. Silver */}
        <a
          href={sponsors[6].link}
          className="p-6 col-span-2 row-span-1 bg-bgblue ring-2 ring-primary flex items-center justify-center rounded-md hover:from-[#C0C0C0]/70 hover:via-[#C0C0C0]/30 hover:to-[#C0C0C0]/70 hover:bg-gradient-to-bl"
        >
          <img
            src={`${sponsors[6].logo}`}
            alt={`${sponsors[6].name} Logo`}
            className="absolute w-80"
          />
        </a>

        {/* MLH. Bronze */}
        <a
          href={sponsors[0].link}
          className="p-6 col-span-1 row-span-1 bg-bgblue ring-2 ring-primary flex items-center justify-center rounded-md hover:from-[#CD7F32]/80 hover:via-[#CD7F32]/40 hover:to-[#CD7F32]/80 hover:bg-gradient-to-bl"
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
          className="p-6 col-span-1 row-span-1 bg-bgblue ring-2 ring-primary flex items-center justify-center rounded-md hover:from-[#CD7F32]/80 hover:via-[#CD7F32]/40 hover:to-[#CD7F32]/80 hover:bg-gradient-to-bl"
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
          className="p-6 col-span-1 row-span-1 bg-bgblue ring-2 ring-primary flex items-center justify-center rounded-md hover:from-[#CD7F32]/80 hover:via-[#CD7F32]/40 hover:to-[#CD7F32]/80 hover:bg-gradient-to-bl"
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
          className="p-6 col-span-1 row-span-1 bg-bgblue ring-2 ring-primary flex items-center justify-center rounded-md hover:from-[#CD7F32]/80 hover:via-[#CD7F32]/40 hover:to-[#CD7F32]/80 hover:bg-gradient-to-bl"
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
          className=" text-blackColor bg-bgblue flex flex-col items-center p-6 col-span-2 row-span-1 ring-2 ring-primary rounded-md hover:bg-gradient-to-bl hover:from-primaryBlueEnd/90 hover:via-primaryBlueStart/50 hover:to-primaryBlueEnd/90"
        >
          <h2 className="text-xl md:text-xl lg:text-2xl  font-semibold">
            Thank you for making GrizzHacks 7 happen! We couldn't do it without
            your support.
          </h2>
          <h3 className="text-lg md:text-lg lg:text-xl  font-base mt-4">
            Looking to sponsor?{" "}
            <span className="underline underline-offset-4 decoration-blackColor hover:decoration-faqColor decoration-2">
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
          className="h-[20vh] p-6 bg-bgblue ring-2 ring-primary flex items-center justify-center rounded-md hover:from-[#D4AF37]/80 hover:via-[#D4AF37]/40 hover:to-[#D4AF37]/80 hover:bg-gradient-to-bl"
        >
          <img
            src={`${sponsors[1].logo}`}
            alt={`${sponsors[1].name} Logo`}
            className="w-48"
          />
        </a>

        {/* Grid containing both a silver item and a bronze grid*/}
        <div className=" grid grid-cols-2 gap-2 w-full">
          {/* 365 Retail Markets */}
          <a
            href={sponsors[6].link}
            className="h-[20vh] col-span-1 p-6 bg-bgblue ring-2 ring-primary flex items-center justify-center rounded-md hover:from-[#C0C0C0]/70 hover:via-[#C0C0C0]/30 hover:to-[#C0C0C0]/70 hover:bg-gradient-to-bl"
          >
            <img
              src={`${sponsors[6].logo}`}
              alt={`${sponsors[6].name} Logo`}
              className="absolute w-60"
            />
          </a>
          {/* bronze grid*/}
          <div className="grid grid-cols-2 gap-2 w-full">
            {/* MLH */}
            <a
              href={sponsors[0].link}
              className="h-[20vh] md:p-4 p-2 col-span-1 row-span-1 bg-bgblue ring-2 ring-primary flex items-center justify-center rounded-md hover:from-[#CD7F32]/80 hover:via-[#CD7F32]/40 hover:to-[#CD7F32]/80 hover:bg-gradient-to-bl"
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
              className="h-[20vh] md:p-4 p-2 col-span-1 row-span-1 bg-bgblue ring-2 ring-primary flex items-center justify-center rounded-md hover:from-[#CD7F32]/80 hover:via-[#CD7F32]/40 hover:to-[#CD7F32]/80 hover:bg-gradient-to-bl"
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
            className="h-[20vh] md:p-4 p-2 col-span-1 row-span-1 bg-bgblue ring-2 ring-primary flex items-center justify-center rounded-md hover:from-[#CD7F32]/80 hover:via-[#CD7F32]/40 hover:to-[#CD7F32]/80 hover:bg-gradient-to-bl"
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
            className="h-[20vh] md:p-4 p-2 col-span-1 row-span-1 bg-bgblue ring-2 ring-primary flex items-center justify-center rounded-md hover:from-[#CD7F32]/80 hover:via-[#CD7F32]/40 hover:to-[#CD7F32]/80 hover:bg-gradient-to-bl"
          >
            <img
              src={`${sponsors[4].logo}`}
              alt={`${sponsors[4].name} Logo`}
              className="w-48"
            />
          </a>

          <a
            href="mailto:grizzhacksou@gmail.com"
            className=" text-blackColor bg-bgblue flex flex-col items-center justify-center p-3 col-span-2 row-span-1 ring-2 ring-primary rounded-md hover:bg-gradient-to-bl hover:from-primaryBlueEnd/90 hover:via-primaryBlueStart/50 hover:to-primaryBlueEnd/90"
          >
            <h2 className="md:text-lg text-base font-semibold">
              Thank you for making GrizzHacks 7 happen! We couldn't do it
              without your support.
            </h2>
            <h3 className="text-base mt-2">
              Looking to sponsor?{" "}
              <span className="underline underline-offset-4 decoration-blackColor hover:decoration-faqColor decoration-2">
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
