import React from "react";
import sponsors from "../data/sponsors.json";

const SponsorGrid = () => {
  return (
    <>
      {/* LARGE SCREEN SIZE xl */}
      <div className="hidden xl:grid grid-cols-5 grid-rows-[150px,150px,150px,150px,150px] gap-1.5 p-1">
        {/* OUCU. Gold */}
        <a
          href={sponsors[1].link}
          className="p-6 col-span-2 row-span-2 ring-2 ring-primary bg-offWhite flex items-center justify-center rounded-md hover:from-[#D4AF37]/80 hover:via-[#D4AF37]/40 hover:to-[#D4AF37]/80 hover:bg-gradient-to-bl"
        >
          <img
            src={`${sponsors[1].logo}`}
            alt={`${sponsors[1].name} Logo`}
            className=" w-[24rem]"
          />
        </a>

        {/* 365 Retail Markets. Silver */}
        <a
          href={sponsors[6].link}
          className="p-6 col-span-2 row-span-1 ring-2 ring-primary bg-offWhite flex items-center justify-center rounded-md hover:from-[#C0C0C0]/70 hover:via-[#C0C0C0]/30 hover:to-[#C0C0C0]/70 hover:bg-gradient-to-bl"
        >
          <img
            src={`${sponsors[6].logo}`}
            alt={`${sponsors[6].name} Logo`}
            className="absolute w-[26rem]"
          />
        </a>

        {/* KLA. Bronze */}
        <a
          href={sponsors[8].link}
          className="p-6 col-span-1 row-span-1 ring-2 ring-primary bg-offWhite flex items-center justify-center rounded-md hover:from-[#CD7F32]/80 hover:via-[#CD7F32]/40 hover:to-[#CD7F32]/80 hover:bg-gradient-to-bl"
        >
          <img
            src={`${sponsors[8].logo}`}
            alt={`${sponsors[8].name} Logo`}
            className="absolute w-[10rem]"
          />
        </a>

        {/* People.Health. Silver */}
        <a
          href={sponsors[2].link}
          className="p-6 col-span-2 row-span-1 ring-2 ring-primary bg-offWhite flex items-center justify-center rounded-md hover:from-[#C0C0C0]/70 hover:via-[#C0C0C0]/30 hover:to-[#C0C0C0]/70 hover:bg-gradient-to-bl"
        >
          <img
            src={`${sponsors[2].logo}`}
            alt={`${sponsors[2].name} Logo`}
            className="absolute w-[22rem]"
          />
        </a>

        {/* Martinrea. Bronze */}
        <a
          href={sponsors[11].link}
          className="p-6 col-span-1 row-span-1 ring-2 ring-primary bg-offWhite flex items-center justify-center rounded-md hover:from-[#CD7F32]/80 hover:via-[#CD7F32]/40 hover:to-[#CD7F32]/80 hover:bg-gradient-to-bl"
        >
          <img
            src={`${sponsors[11].logo}`}
            alt={`${sponsors[11].name} Logo`}
            className="absolute w-[10rem]"
          />
        </a>

        {/* MLH. Bronze */}
        <a
          href={sponsors[0].link}
          className="p-6 col-span-1 row-span-1 ring-2 ring-primary bg-offWhite flex items-center justify-center rounded-md hover:from-[#CD7F32]/80 hover:via-[#CD7F32]/40 hover:to-[#CD7F32]/80 hover:bg-gradient-to-bl"
        >
          <img
            src={`${sponsors[0].logo}`}
            alt={`${sponsors[0].name} Logo`}
            className="absolute w-[10rem]"
          />
        </a>

        {/* Whisker. Silver */}
        <a
          href={sponsors[9].link}
          className="p-6 col-span-2 row-span-1 ring-2 ring-primary bg-offWhite flex items-center justify-center rounded-md hover:from-[#C0C0C0]/70 hover:via-[#C0C0C0]/30 hover:to-[#C0C0C0]/70 hover:bg-gradient-to-bl"
        >
          <img
            src={`${sponsors[9].logo}`}
            alt={`${sponsors[9].name} Logo`}
            className="absolute w-[20rem]"
          />
        </a>

        {/* FreeWili. Gold */}
        <a
          href={sponsors[7].link}
          className="p-6 col-span-2 row-span-2 ring-2 ring-primary bg-offWhite flex items-center justify-center rounded-md hover:from-[#D4AF37]/80 hover:via-[#D4AF37]/40 hover:to-[#D4AF37]/80 hover:bg-gradient-to-bl"
        >
          <img
            src={`${sponsors[7].logo}`}
            alt={`${sponsors[7].name} Logo`}
            className=" w-[32rem]"
          />
        </a>

        {/* Github. Bronze */}
        <a
          href={sponsors[5].link}
          className="p-6 col-span-1 row-span-1 ring-2 ring-primary bg-offWhite flex items-center justify-center rounded-md hover:from-[#CD7F32]/80 hover:via-[#CD7F32]/40 hover:to-[#CD7F32]/80 hover:bg-gradient-to-bl"
        >
          <img
            src={`${sponsors[5].logo}`}
            alt={`${sponsors[5].name} Logo`}
            className="absolute w-[10rem]"
          />
        </a>

        {/* 87SportsCards. Bronze */}
        <a
          href={sponsors[10].link}
          className="p-6 col-span-1 row-span-1 ring-2 ring-primary bg-offWhite flex items-center justify-center rounded-md hover:from-[#CD7F32]/80 hover:via-[#CD7F32]/40 hover:to-[#CD7F32]/80 hover:bg-gradient-to-bl"
        >
          <img
            src={`${sponsors[10].logo}`}
            alt={`${sponsors[10].name} Logo`}
            className="absolute w-[8rem]"
          />
        </a>

        {/* CyberOU. Bronze */}
        <a
          href={sponsors[3].link}
          className="p-6 col-span-1 row-span-1 ring-2 ring-primary bg-offWhite flex items-center justify-center rounded-md hover:from-[#CD7F32]/80 hover:via-[#CD7F32]/40 hover:to-[#CD7F32]/80 hover:bg-gradient-to-bl"
        >
          <img
            src={`${sponsors[3].logo}`}
            alt={`${sponsors[3].name} Logo`}
            className="absolute w-[14rem]"
          />
        </a>

        {/* OGrizzlys. Bronze */}
        <a
          href={sponsors[12].link}
          className="p-6 col-span-1 row-span-1 ring-2 ring-primary bg-offWhite flex items-center justify-center rounded-md hover:from-[#CD7F32]/80 hover:via-[#CD7F32]/40 hover:to-[#CD7F32]/80 hover:bg-gradient-to-bl"
        >
          <img
            src={`${sponsors[12].logo}`}
            alt={`${sponsors[12].name} Logo`}
            className="absolute w-[12rem]"
          />
        </a>

        {/* Thank you message */}
        {/* A huge thank you to our amazing sponsors! Your support means the
            world to us and helps make everything we do possible. We couldnt do
            it without you—thanks for being part of our journey!*/}
        <a
          href="mailto:grizzhacksou@gmail.com"
          className="h-full text-blackColor bg-offWhite flex flex-col justify-center p-6 col-span-3 row-span-1 ring-2 ring-primary rounded-md hover:bg-gradient-to-bl hover:from-primaryBlueEnd/90 hover:via-primaryBlueStart/50 hover:to-primaryBlueEnd/90"
        >
          <h2 className="text-center text-lg lg:text-xl 2xl:text-2xl font-semibold">
            Thank you for being a part of our journey. We couldn&apos;t do it
            without you!
          </h2>
          <p className="text-center text-lg lg:text-xl 2xl:text-xl font-base mt-4">
            Looking to sponsor? Email us at{" "}
            <span className="underline underline-offset-4 decoration-blackColor hover:decoration-faqColor decoration-2">
              grizzhacksou@gmail.com
            </span>{" "}
            for more details!
          </p>
        </a>

        {/* StandOutStickers. Bronze */}
        <a
          href={sponsors[4].link}
          className="p-6 col-span-1 row-span-1 ring-2 ring-primary bg-offWhite flex items-center justify-center rounded-md hover:from-[#CD7F32]/80 hover:via-[#CD7F32]/40 hover:to-[#CD7F32]/80 hover:bg-gradient-to-bl"
        >
          <img
            src={`${sponsors[4].logo}`}
            alt={`${sponsors[4].name} Logo`}
            className="absolute w-[10rem]"
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

      {/* LAPTOP SIZE lg */}
      <div className="hidden lg:grid xl:hidden grid-cols-4 grid-rows-[100px,100px,100px,100px,100px,100px] gap-1.5 p-1">
        {/* OUCU. Gold */}
        <a
          href={sponsors[1].link}
          className="p-6 col-span-2 row-span-2 bg-offWhite ring-2 ring-primary flex items-center justify-center rounded-md hover:from-[#D4AF37]/80 hover:via-[#D4AF37]/40 hover:to-[#D4AF37]/80 hover:bg-gradient-to-bl"
        >
          <img
            src={`${sponsors[1].logo}`}
            alt={`${sponsors[1].name} Logo`}
            className=" w-[20rem]"
          />
        </a>

        {/* FreeWili. Gold */}
        <a
          href={sponsors[7].link}
          className="p-6 col-span-2 row-span-2 bg-offWhite ring-2 ring-primary flex items-center justify-center rounded-md hover:from-[#D4AF37]/80 hover:via-[#D4AF37]/40 hover:to-[#D4AF37]/80 hover:bg-gradient-to-bl"
        >
          <img
            src={`${sponsors[7].logo}`}
            alt={`${sponsors[7].name} Logo`}
            className=" w-[28rem]"
          />
        </a>

        {/* 365 Retail Markets. Silver */}
        <a
          href={sponsors[6].link}
          className="p-6 col-span-2 row-span-1 bg-offWhite ring-2 ring-primary flex items-center justify-center rounded-md hover:from-[#C0C0C0]/70 hover:via-[#C0C0C0]/30 hover:to-[#C0C0C0]/70 hover:bg-gradient-to-bl"
        >
          <img
            src={`${sponsors[6].logo}`}
            alt={`${sponsors[6].name} Logo`}
            className="absolute w-[22rem]"
          />
        </a>

        {/* People.Health. Silver */}
        <a
          href={sponsors[2].link}
          className="p-6 col-span-2 row-span-1 bg-offWhite ring-2 ring-primary flex items-center justify-center rounded-md hover:from-[#C0C0C0]/70 hover:via-[#C0C0C0]/30 hover:to-[#C0C0C0]/70 hover:bg-gradient-to-bl"
        >
          <img
            src={`${sponsors[2].logo}`}
            alt={`${sponsors[2].name} Logo`}
            className="absolute w-[22rem]"
          />
        </a>

        {/* KLA. Bronze */}
        <a
          href={sponsors[8].link}
          className="p-6 col-span-1 row-span-1 ring-2 ring-primary bg-offWhite flex items-center justify-center rounded-md hover:from-[#CD7F32]/80 hover:via-[#CD7F32]/40 hover:to-[#CD7F32]/80 hover:bg-gradient-to-bl"
        >
          <img
            src={`${sponsors[8].logo}`}
            alt={`${sponsors[8].name} Logo`}
            className="absolute w-[10rem]"
          />
        </a>

        {/* Whisker. Silver */}
        <a
          href={sponsors[9].link}
          className="p-6 col-span-2 row-span-1 bg-offWhite ring-2 ring-primary flex items-center justify-center rounded-md hover:from-[#C0C0C0]/70 hover:via-[#C0C0C0]/30 hover:to-[#C0C0C0]/70 hover:bg-gradient-to-bl"
        >
          <img
            src={`${sponsors[9].logo}`}
            alt={`${sponsors[9].name} Logo`}
            className="absolute w-[18rem]"
          />
        </a>

        {/* Martinrea BRONZE */}
        <a
          href={sponsors[11].link}
          className="p-6 col-span-1 row-span-1 bg-offWhite ring-2 ring-primary flex items-center justify-center rounded-md hover:from-[#CD7F32]/80 hover:via-[#CD7F32]/40 hover:to-[#CD7F32]/80 hover:bg-gradient-to-bl"
        >
          <img
            src={`${sponsors[11].logo}`}
            alt={`${sponsors[11].name} Logo`}
            className="absolute w-32"
          />
        </a>

        {/* MLH. Bronze */}
        <a
          href={sponsors[0].link}
          className="p-6 col-span-1 row-span-1 bg-offWhite ring-2 ring-primary flex items-center justify-center rounded-md hover:from-[#CD7F32]/80 hover:via-[#CD7F32]/40 hover:to-[#CD7F32]/80 hover:bg-gradient-to-bl"
        >
          <img
            src={`${sponsors[0].logo}`}
            alt={`${sponsors[0].name} Logo`}
            className="absolute w-40"
          />
        </a>

        {/* CyberOU. Bronze */}
        <a
          href={sponsors[3].link}
          className="p-6 col-span-1 row-span-1 bg-offWhite ring-2 ring-primary flex items-center justify-center rounded-md hover:from-[#CD7F32]/80 hover:via-[#CD7F32]/40 hover:to-[#CD7F32]/80 hover:bg-gradient-to-bl"
        >
          <img
            src={`${sponsors[3].logo}`}
            alt={`${sponsors[3].name} Logo`}
            className="absolute w-[12rem]"
          />
        </a>

        {/* 87SportsCards. Bronze */}
        <a
          href={sponsors[10].link}
          className="p-6 col-span-1 row-span-1 bg-offWhite ring-2 ring-primary flex items-center justify-center rounded-md hover:from-[#CD7F32]/80 hover:via-[#CD7F32]/40 hover:to-[#CD7F32]/80 hover:bg-gradient-to-bl"
        >
          <img
            src={`${sponsors[10].logo}`}
            alt={`${sponsors[10].name} Logo`}
            className="absolute w-[6rem]"
          />
        </a>

        {/* GitHub. Bronze */}
        <a
          href={sponsors[5].link}
          className="p-6 col-span-1 row-span-1 bg-offWhite ring-2 ring-primary flex items-center justify-center rounded-md hover:from-[#CD7F32]/80 hover:via-[#CD7F32]/40 hover:to-[#CD7F32]/80 hover:bg-gradient-to-bl"
        >
          <img
            src={`${sponsors[5].logo}`}
            alt={`${sponsors[5].name} Logo`}
            className="absolute w-32"
          />
        </a>

        {/* OGrizzlys. Bronze */}
        <a
          href={sponsors[12].link}
          className="p-6 col-span-1 row-span-1 bg-offWhite ring-2 ring-primary flex items-center justify-center rounded-md hover:from-[#CD7F32]/80 hover:via-[#CD7F32]/40 hover:to-[#CD7F32]/80 hover:bg-gradient-to-bl"
        >
          <img
            src={`${sponsors[12].logo}`}
            alt={`${sponsors[12].name} Logo`}
            className="absolute w-[10rem]"
          />
        </a>

        {/* THANK YOU */}
        <a
          href="mailto:grizzhacksou@gmail.com"
          className=" text-blackColor bg-offWhite flex flex-col px-3 py-2 items-center justify-center col-span-2 row-span-1 ring-2 ring-primary rounded-md hover:bg-gradient-to-bl hover:from-primaryBlueEnd/90 hover:via-primaryBlueStart/50 hover:to-primaryBlueEnd/90"
        >
          <h2 className="text-base md:text-sm lg:text-base text-center font-semibold">
            Thank you for being a part of our journey. We couldn&apos;t do it
            without you!
          </h2>
          <p className="text-sm md:text-sm lg:text-sm font-base text-center">
            Looking to sponsor? Email us at{" "}
            <span className="underline underline-offset-4 decoration-blackColor hover:decoration-faqColor decoration-2">
              grizzhacksou@gmail.com
            </span>{" "}
            for more details!
          </p>
        </a>

        {/* StandOutStickers. Bronze */}
        <a
          href={sponsors[4].link}
          className="p-6 col-span-1 row-span-1 bg-offWhite ring-2 ring-primary flex items-center justify-center rounded-md hover:from-[#CD7F32]/80 hover:via-[#CD7F32]/40 hover:to-[#CD7F32]/80 hover:bg-gradient-to-bl"
        >
          <img
            src={`${sponsors[4].logo}`}
            alt={`${sponsors[4].name} Logo`}
            className="absolute w-32"
          />
        </a>
      </div>

      {/* SMALL SCREEN SIZE TABLETS md*/}
      <div className="lg:hidden hidden md:grid grid-cols-4 grid-rows-[100px,100px,100px,100px,100px,100px] gap-1.5 p-1">
        {/* OUCU. Gold */}
        <a
          href={sponsors[1].link}
          className="p-2 col-span-2 row-span-2 bg-offWhite ring-2 ring-primary flex items-center justify-center rounded-md hover:from-[#D4AF37]/80 hover:via-[#D4AF37]/40 hover:to-[#D4AF37]/80 hover:bg-gradient-to-bl"
        >
          <img
            src={`${sponsors[1].logo}`}
            alt={`${sponsors[1].name} Logo`}
            className="w-full h-full object-contain"
          />
        </a>

        {/* FreeWili. Gold */}
        <a
          href={sponsors[7].link}
          className="p-2 col-span-2 row-span-2 bg-offWhite ring-2 ring-primary flex items-center justify-center rounded-md hover:from-[#D4AF37]/80 hover:via-[#D4AF37]/40 hover:to-[#D4AF37]/80 hover:bg-gradient-to-bl"
        >
          <img
            src={`${sponsors[7].logo}`}
            alt={`${sponsors[7].name} Logo`}
            className="w-full h-full object-contain"
          />
        </a>

        {/* 365 Retail Markets. Silver */}
        <a
          href={sponsors[6].link}
          className="p-2 max-h-[150px] col-span-2 row-span-1 bg-offWhite ring-2 ring-primary flex items-center justify-center rounded-md hover:from-[#C0C0C0]/70 hover:via-[#C0C0C0]/30 hover:to-[#C0C0C0]/70 hover:bg-gradient-to-bl"
        >
          <img
            src={`${sponsors[6].logo}`}
            alt={`${sponsors[6].name} Logo`}
            className="w-full h-full object-contain"
          />
        </a>

        {/* People.Health. Silver */}
        <a
          href={sponsors[2].link}
          className="p-2 max-h-[150px] col-span-2 row-span-1 bg-offWhite ring-2 ring-primary flex items-center justify-center rounded-md hover:from-[#C0C0C0]/70 hover:via-[#C0C0C0]/30 hover:to-[#C0C0C0]/70 hover:bg-gradient-to-bl"
        >
          <img
            src={`${sponsors[2].logo}`}
            alt={`${sponsors[2].name} Logo`}
            className="w-[90%] h-full object-contain"
          />
        </a>

        {/* KLA. Bronze */}
        <a
          href={sponsors[8].link}
          className="p-2 col-span-1 row-span-1 bg-offWhite ring-2 ring-primary flex items-center justify-center rounded-md hover:from-[#CD7F32]/80 hover:via-[#CD7F32]/40 hover:to-[#CD7F32]/80 hover:bg-gradient-to-bl"
        >
          <img
            src={`${sponsors[8].logo}`}
            alt={`${sponsors[8].name} Logo`}
            className="w-full max-w-[125px] h-full object-contain"
          />
        </a>

        {/* Whisker. Silver */}
        <a
          href={sponsors[9].link}
          className="p-2 max-h-[150px] col-span-2 row-span-1 bg-offWhite ring-2 ring-primary flex items-center justify-center rounded-md hover:from-[#C0C0C0]/70 hover:via-[#C0C0C0]/30 hover:to-[#C0C0C0]/70 hover:bg-gradient-to-bl"
        >
          <img
            src={`${sponsors[9].logo}`}
            alt={`${sponsors[9].name} Logo`}
            className="w-[80%] h-full object-contain"
          />
        </a>

        {/* Martinrea BRONZE */}
        <a
          href={sponsors[11].link}
          className="p-2 col-span-1 row-span-1 bg-offWhite ring-2 ring-primary flex items-center justify-center rounded-md hover:from-[#CD7F32]/80 hover:via-[#CD7F32]/40 hover:to-[#CD7F32]/80 hover:bg-gradient-to-bl"
        >
          <img
            src={`${sponsors[11].logo}`}
            alt={`${sponsors[11].name} Logo`}
            className="w-[7rem] object-contain"
          />
        </a>

        {/* MLH. Bronze */}
        <a
          href={sponsors[0].link}
          className="p-2 col-span-1 row-span-1 bg-offWhite ring-2 ring-primary flex items-center justify-center rounded-md hover:from-[#CD7F32]/80 hover:via-[#CD7F32]/40 hover:to-[#CD7F32]/80 hover:bg-gradient-to-bl"
        >
          <img
            src={`${sponsors[0].logo}`}
            alt={`${sponsors[0].name} Logo`}
            className="w-full max-w-[125px] h-full object-contain"
          />
        </a>

        {/* CyberOU. Bronze */}
        <a
          href={sponsors[3].link}
          className="p-2 col-span-1 row-span-1 bg-offWhite ring-2 ring-primary flex items-center justify-center rounded-md hover:from-[#CD7F32]/80 hover:via-[#CD7F32]/40 hover:to-[#CD7F32]/80 hover:bg-gradient-to-bl"
        >
          <img
            src={`${sponsors[3].logo}`}
            alt={`${sponsors[3].name} Logo`}
            className="w-[20rem] object-contain"
          />
        </a>

        {/* 87SportsCards. BRONZE */}
        <a
          href={sponsors[10].link}
          className="p-2 col-span-1 row-span-1 bg-offWhite ring-2 ring-primary flex items-center justify-center rounded-md hover:from-[#CD7F32]/80 hover:via-[#CD7F32]/40 hover:to-[#CD7F32]/80 hover:bg-gradient-to-bl"
        >
          <img
            src={`${sponsors[10].logo}`}
            alt={`${sponsors[10].name} Logo`}
            className="w-full max-w-[125px] h-full object-contain"
          />
        </a>

        {/* GitHub. Bronze */}
        <a
          href={sponsors[5].link}
          className="p-2 col-span-1 row-span-1 bg-offWhite ring-2 ring-primary flex items-center justify-center rounded-md hover:from-[#CD7F32]/80 hover:via-[#CD7F32]/40 hover:to-[#CD7F32]/80 hover:bg-gradient-to-bl"
        >
          <img
            src={`${sponsors[5].logo}`}
            alt={`${sponsors[5].name} Logo`}
            className="w-full max-w-[125px] h-full object-contain"
          />
        </a>

        {/* OGrizzlys. Bronze */}
        <a
          href={sponsors[12].link}
          className="p-6 col-span-1 row-span-1 bg-offWhite ring-2 ring-primary flex items-center justify-center rounded-md hover:from-[#CD7F32]/80 hover:via-[#CD7F32]/40 hover:to-[#CD7F32]/80 hover:bg-gradient-to-bl"
        >
          <img
            src={`${sponsors[12].logo}`}
            alt={`${sponsors[12].name} Logo`}
            className="absolute w-[10rem]"
          />
        </a>

        {/* THANK YOU */}
        <a
          href="mailto:grizzhacksou@gmail.com"
          className=" text-blackColor bg-offWhite flex flex-col px-6 py-2 justify-center items-center col-span-2 row-span-1 ring-2 ring-primary rounded-md hover:bg-gradient-to-bl hover:from-primaryBlueEnd/90 hover:via-primaryBlueStart/50 hover:to-primaryBlueEnd/90"
        >
          <h2 className="text-sm font-semibold text-center">
            Thank you for being a part of our journey. We couldn&apos;t do it
            without you!
          </h2>
          <p className="text-xs font-base text-center">
            Looking to sponsor? Email us at{" "}
            <span className="underline underline-offset-4 decoration-blackColor hover:decoration-faqColor decoration-1">
              grizzhacksou@gmail.com
            </span>{" "}
            for more details!
          </p>
        </a>

        {/* StandOutStickers. Bronze */}
        <a
          href={sponsors[4].link}
          className="p-6 col-span-1 row-span-1 bg-offWhite ring-2 ring-primary flex items-center justify-center rounded-md hover:from-[#CD7F32]/80 hover:via-[#CD7F32]/40 hover:to-[#CD7F32]/80 hover:bg-gradient-to-bl"
        >
          <img
            src={`${sponsors[4].logo}`}
            alt={`${sponsors[4].name} Logo`}
            className="absolute w-32"
          />
        </a>
      </div>

      {/* MOBILE PHONES sm */}
      {/* SMALL SCREEN SIZE MOBILE PHONES md and sm */}
      <div className="md:hidden grid grid-cols-4 grid-rows-auto gap-1.5 p-1">
        {/* OUCU. Gold */}
        <a
          href={sponsors[1].link}
          className="p-2 col-span-4 row-span-1 bg-offWhite max-h-[100px] ring-2 ring-primary flex items-center justify-center rounded-md hover:from-[#D4AF37]/80 hover:via-[#D4AF37]/40 hover:to-[#D4AF37]/80 hover:bg-gradient-to-bl"
        >
          <img
            src={`${sponsors[1].logo}`}
            alt={`${sponsors[1].name} Logo`}
            className="w-full h-full object-contain"
          />
        </a>

        {/* FreeWili. Gold */}
        <a
          href={sponsors[7].link}
          className="p-2 col-span-4 row-span-1 bg-offWhite max-h-[100px] ring-2 ring-primary flex items-center justify-center rounded-md hover:from-[#D4AF37]/80 hover:via-[#D4AF37]/40 hover:to-[#D4AF37]/80 hover:bg-gradient-to-bl"
        >
          <img
            src={`${sponsors[7].logo}`}
            alt={`${sponsors[7].name} Logo`}
            className="w-[16rem] object-contain"
          />
        </a>

        {/* 365 Retail Markets. Silver */}
        <a
          href={sponsors[6].link}
          className="p-2 col-span-2 row-span-1 bg-offWhite max-h-[100px] ring-2 ring-primary flex items-center justify-center rounded-md hover:from-[#C0C0C0]/70 hover:via-[#C0C0C0]/30 hover:to-[#C0C0C0]/70 hover:bg-gradient-to-bl"
        >
          <img
            src={`${sponsors[6].logo}`}
            alt={`${sponsors[6].name} Logo`}
            className="w-full h-[60px]object-contain"
          />
        </a>

        {/* People.Health. Silver */}
        <a
          href={sponsors[2].link}
          className="p-2 col-span-2 row-span-1 bg-offWhite max-h-[100px] ring-2 ring-primary flex items-center justify-center rounded-md hover:from-[#C0C0C0]/70 hover:via-[#C0C0C0]/30 hover:to-[#C0C0C0]/70 hover:bg-gradient-to-bl"
        >
          <img
            src={`${sponsors[2].logo}`}
            alt={`${sponsors[2].name} Logo`}
            className="w-full h-[60px] object-contain"
          />
        </a>

        {/* KLA. Bronze */}
        <a
          href={sponsors[8].link}
          className="p-2 col-span-1 row-span-1 bg-offWhite max-h-[100px] ring-2 ring-primary flex items-center justify-center rounded-md hover:from-[#CD7F32]/80 hover:via-[#CD7F32]/40 hover:to-[#CD7F32]/80 hover:bg-gradient-to-bl"
        >
          <img
            src={`${sponsors[8].logo}`}
            alt={`${sponsors[8].name} Logo`}
            className="w-full max-w-[100px] h-[60px] object-contain"
          />
        </a>

        {/* Whisker. Silver */}
        <a
          href={sponsors[9].link}
          className="p-2 col-span-2 row-span-1 bg-offWhite max-h-[100px] ring-2 ring-primary flex items-center justify-center rounded-md hover:from-[#C0C0C0]/70 hover:via-[#C0C0C0]/30 hover:to-[#C0C0C0]/70 hover:bg-gradient-to-bl"
        >
          <img
            src={`${sponsors[9].logo}`}
            alt={`${sponsors[9].name} Logo`}
            className="w-[80%] h-[60px] object-contain"
          />
        </a>

        {/* Martinrea BRONZE */}
        <a
          href={sponsors[11].link}
          className="p-2 col-span-1 row-span-1 bg-offWhite max-h-[100px] ring-2 ring-primary flex items-center justify-center rounded-md hover:from-[#CD7F32]/80 hover:via-[#CD7F32]/40 hover:to-[#CD7F32]/80 hover:bg-gradient-to-bl"
        >
          <img
            src={`${sponsors[11].logo}`}
            alt={`${sponsors[11].name} Logo`}
            className="w-full max-w-[100px] h-[60px] object-contain"
          />
        </a>

        {/* MLH. Bronze */}
        <a
          href={sponsors[0].link}
          className="p-2 col-span-1 row-span-1 bg-offWhite max-h-[100px] ring-2 ring-primary flex items-center justify-center rounded-md hover:from-[#CD7F32]/80 hover:via-[#CD7F32]/40 hover:to-[#CD7F32]/80 hover:bg-gradient-to-bl"
        >
          <img
            src={`${sponsors[0].logo}`}
            alt={`${sponsors[0].name} Logo`}
            className="w-full max-w-[100px] h-full object-contain"
          />
        </a>

        {/* CyberOU. Bronze */}
        <a
          href={sponsors[3].link}
          className="p-2 col-span-1 row-span-1 bg-offWhite max-h-[100px] ring-2 ring-primary flex items-center justify-center rounded-md hover:from-[#CD7F32]/80 hover:via-[#CD7F32]/40 hover:to-[#CD7F32]/80 hover:bg-gradient-to-bl"
        >
          <img
            src={`${sponsors[3].logo}`}
            alt={`${sponsors[3].name} Logo`}
            className="w-full max-w-[100px] h-full object-contain"
          />
        </a>

        {/* 87SportsCards BRONZE */}
        <a
          href={sponsors[10].link}
          className="p-2 col-span-1 row-span-1 bg-offWhite max-h-[100px] ring-2 ring-primary flex items-center justify-center rounded-md hover:from-[#CD7F32]/80 hover:via-[#CD7F32]/40 hover:to-[#CD7F32]/80 hover:bg-gradient-to-bl"
        >
          <img
            src={`${sponsors[10].logo}`}
            alt={`${sponsors[10].name} Logo`}
            className="w-full max-w-[100px] h-[90%] object-contain"
          />
        </a>

        {/* GITHUB BRONZE */}
        <a
          href={sponsors[5].link}
          className="p-2 col-span-1 row-span-1 bg-offWhite max-h-[100px] ring-2 ring-primary flex items-center justify-center rounded-md hover:from-[#CD7F32]/80 hover:via-[#CD7F32]/40 hover:to-[#CD7F32]/80 hover:bg-gradient-to-bl"
        >
          <img
            src={`${sponsors[5].logo}`}
            alt={`${sponsors[5].name} Logo`}
            className="w-full max-w-[100px] h-[60px] object-contain"
          />
        </a>

        {/* OGrizzlys. Bronze */}
        <a
          href={sponsors[12].link}
          className="p-2 col-span-1 row-span-1 bg-offWhite max-h-[100px] ring-2 ring-primary flex items-center justify-center rounded-md hover:from-[#CD7F32]/80 hover:via-[#CD7F32]/40 hover:to-[#CD7F32]/80 hover:bg-gradient-to-bl"
        >
          <img
            src={`${sponsors[12].logo}`}
            alt={`${sponsors[12].name} Logo`}
            className="w-full max-w-[100px] h-full object-contain"
          />
        </a>

        {/* THANK YOU */}
        <a
          href="mailto:grizzhacksou@gmail.com"
          className=" text-blackColor bg-offWhite flex items-center p-2 col-span-2 row-span-1 ring-2 ring-primary rounded-md hover:bg-gradient-to-bl hover:from-primaryBlueEnd/90 hover:via-primaryBlueStart/50 hover:to-primaryBlueEnd/90"
        >
          <h2 className="text-xs font-semibold text-center">
            Thank you for being a part of our journey. We couldn&apos;t do it
            without you!
          </h2>
        </a>

        {/* Standout Stickers. Bronze */}
        <a
          href={sponsors[4].link}
          className="p-2 col-span-1 row-span-1 bg-offWhite max-h-[100px] ring-2 ring-primary flex items-center justify-center rounded-md hover:from-[#CD7F32]/80 hover:via-[#CD7F32]/40 hover:to-[#CD7F32]/80 hover:bg-gradient-to-bl"
        >
          <img
            src={`${sponsors[4].logo}`}
            alt={`${sponsors[4].name} Logo`}
            className="w-full max-w-[100px] h-full object-contain"
          />
        </a>
      </div>
    </>
  );
};

export default SponsorGrid;
