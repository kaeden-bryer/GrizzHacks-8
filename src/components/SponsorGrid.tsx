import React from "react";
import sponsors from "../data/sponsors.json";

const SponsorGrid = () => {
  return (
    <>
      {/* LARGE SCREEN SIZE xl */}
      <div className="hidden xl:grid grid-cols-5 grid-rows-3 gap-1.5 p-1">
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

        {/* OUCU. Gold */}
        <a
          href={sponsors[1].link}
          className="p-6 col-span-2 row-span-2 ring-2 ring-primary bg-offWhite flex items-center justify-center rounded-md hover:from-[#D4AF37]/80 hover:via-[#D4AF37]/40 hover:to-[#D4AF37]/80 hover:bg-gradient-to-bl"
        >
          <img
            src={`${sponsors[1].logo}`}
            alt={`${sponsors[1].name} Logo`}
            className=" w-[20rem]"
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
          <h3 className="text-center text-lg lg:text-xl 2xl:text-xl font-base mt-4">
            Looking to sponsor? Email us at{" "}
            <span className="underline underline-offset-4 decoration-blackColor hover:decoration-faqColor decoration-2">
              grizzhacksou@gmail.com
            </span>{" "}
            for more details!
          </h3>
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
      <div className="hidden lg:grid xl:hidden grid-cols-4 grid-rows-3 gap-1.5 p-1">
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

        {/* OUCU. Gold */}
        <a
          href={sponsors[1].link}
          className="p-6 col-span-2 row-span-2 bg-offWhite ring-2 ring-primary flex items-center justify-center rounded-md hover:from-[#D4AF37]/80 hover:via-[#D4AF37]/40 hover:to-[#D4AF37]/80 hover:bg-gradient-to-bl"
        >
          <img
            src={`${sponsors[1].logo}`}
            alt={`${sponsors[1].name} Logo`}
            className=" w-80"
          />
        </a>

        {/* GITHUB BRONZE */}
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

        {/* 365 Retail Markets. Silver */}
        <a
          href={sponsors[6].link}
          className="p-6 col-span-2 row-span-1 bg-offWhite ring-2 ring-primary flex items-center justify-center rounded-md hover:from-[#C0C0C0]/70 hover:via-[#C0C0C0]/30 hover:to-[#C0C0C0]/70 hover:bg-gradient-to-bl"
        >
          <img
            src={`${sponsors[6].logo}`}
            alt={`${sponsors[6].name} Logo`}
            className="absolute w-[24rem]"
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
            className="absolute w-80"
          />
        </a>

        {/* THANK YOU */}
        <a
          href="mailto:grizzhacksou@gmail.com"
          className=" text-blackColor bg-offWhite flex flex-col p-6 col-span-4 row-span-1 ring-2 ring-primary rounded-md hover:bg-gradient-to-bl hover:from-primaryBlueEnd/90 hover:via-primaryBlueStart/50 hover:to-primaryBlueEnd/90"
        >
          <h2 className="text-xl md:text-xl lg:text-2xl  font-semibold">
            Thank you for being a part of our journey. We couldn&apos;t do it
            without you!
          </h2>
          <h3 className="text-lg md:text-lg lg:text-xl font-base mt-2 text-left">
            Looking to sponsor? Email us at{" "}
            <span className="underline underline-offset-4 decoration-blackColor hover:decoration-faqColor decoration-2">
              grizzhacksou@gmail.com
            </span>{" "}
            for more details!
          </h3>
        </a>
      </div>

      {/* SMALL SCREEN SIZE TABLETS md*/}
      <div className="lg:hidden hidden md:grid grid-cols-4 grid-rows-auto gap-1.5 p-1">
        {/* OUCU. Gold */}
        <a
          href={sponsors[1].link}
          className="p-2 col-span-4 row-span-1 max-h-[150px] bg-offWhite ring-2 ring-primary flex items-center justify-center rounded-md hover:from-[#D4AF37]/80 hover:via-[#D4AF37]/40 hover:to-[#D4AF37]/80 hover:bg-gradient-to-bl"
        >
          <img
            src={`${sponsors[1].logo}`}
            alt={`${sponsors[1].name} Logo`}
            className="w-full h-full object-contain"
          />
        </a>

        {/* 365 Retail Markets. Silver */}
        <a
          href={sponsors[6].link}
          className="p-2 col-span-2 row-span-1 bg-offWhite ring-2 ring-primary flex items-center justify-center rounded-md hover:from-[#C0C0C0]/70 hover:via-[#C0C0C0]/30 hover:to-[#C0C0C0]/70 hover:bg-gradient-to-bl"
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
          className="p-2 col-span-2 row-span-1 bg-offWhite ring-2 ring-primary flex items-center justify-center rounded-md hover:from-[#C0C0C0]/70 hover:via-[#C0C0C0]/30 hover:to-[#C0C0C0]/70 hover:bg-gradient-to-bl"
        >
          <img
            src={`${sponsors[2].logo}`}
            alt={`${sponsors[2].name} Logo`}
            className="w-full h-full object-contain"
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

        {/* GITHUB BRONZE */}
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

        {/* CyberOU. Bronze */}
        <a
          href={sponsors[3].link}
          className="p-2 col-span-1 row-span-1 bg-offWhite ring-2 ring-primary flex items-center justify-center rounded-md hover:from-[#CD7F32]/80 hover:via-[#CD7F32]/40 hover:to-[#CD7F32]/80 hover:bg-gradient-to-bl"
        >
          <img
            src={`${sponsors[3].logo}`}
            alt={`${sponsors[3].name} Logo`}
            className="w-full max-w-[125px] h-full object-contain"
          />
        </a>

        {/* StandOutStickers. Bronze */}
        <a
          href={sponsors[4].link}
          className="p-2 col-span-1 row-span-1 bg-offWhite ring-2 ring-primary flex items-center justify-center rounded-md hover:from-[#CD7F32]/80 hover:via-[#CD7F32]/40 hover:to-[#CD7F32]/80 hover:bg-gradient-to-bl"
        >
          <img
            src={`${sponsors[4].logo}`}
            alt={`${sponsors[4].name} Logo`}
            className="w-full max-w-[125px] h-full object-contain"
          />
        </a>

        {/* THANK YOU */}
        <a
          href="mailto:grizzhacksou@gmail.com"
          className=" text-blackColor bg-offWhite flex flex-col p-6 col-span-4 row-span-1 ring-2 ring-primary rounded-md hover:bg-gradient-to-bl hover:from-primaryBlueEnd/90 hover:via-primaryBlueStart/50 hover:to-primaryBlueEnd/90"
        >
          <h2 className="text-lg font-semibold">
            Thank you for being a part of our journey. We couldn&apos;t do it
            without you!
          </h2>
          <h3 className="text-base font-base mt-2 text-left">
            Looking to sponsor? Email us at{" "}
            <span className="underline underline-offset-4 decoration-blackColor hover:decoration-faqColor decoration-1">
              grizzhacksou@gmail.com
            </span>{" "}
            for more details!
          </h3>
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

        {/* 365 Retail Markets. Silver */}
        <a
          href={sponsors[6].link}
          className="p-2 col-span-2 row-span-1 bg-offWhite max-h-[100px] ring-2 ring-primary flex items-center justify-center rounded-md hover:from-[#C0C0C0]/70 hover:via-[#C0C0C0]/30 hover:to-[#C0C0C0]/70 hover:bg-gradient-to-bl"
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
          className="p-2 col-span-2 row-span-1 bg-offWhite max-h-[100px] ring-2 ring-primary flex items-center justify-center rounded-md hover:from-[#C0C0C0]/70 hover:via-[#C0C0C0]/30 hover:to-[#C0C0C0]/70 hover:bg-gradient-to-bl"
        >
          <img
            src={`${sponsors[2].logo}`}
            alt={`${sponsors[2].name} Logo`}
            className="w-full h-full object-contain"
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

        {/* GITHUB BRONZE */}
        <a
          href={sponsors[5].link}
          className="p-2 col-span-1 row-span-1 bg-offWhite max-h-[100px] ring-2 ring-primary flex items-center justify-center rounded-md hover:from-[#CD7F32]/80 hover:via-[#CD7F32]/40 hover:to-[#CD7F32]/80 hover:bg-gradient-to-bl"
        >
          <img
            src={`${sponsors[5].logo}`}
            alt={`${sponsors[5].name} Logo`}
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

        {/* StandOutStickers. Bronze */}
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

        {/* THANK YOU */}
        <a
          href="mailto:grizzhacksou@gmail.com"
          className=" text-blackColor bg-offWhite flex flex-col p-2 col-span-4 row-span-1 ring-2 ring-primary rounded-md hover:bg-gradient-to-bl hover:from-primaryBlueEnd/90 hover:via-primaryBlueStart/50 hover:to-primaryBlueEnd/90"
        >
          <h2 className="text-sm font-semibold">
            Thank you for being a part of our journey. We couldn&apos;t do it
            without you!
          </h2>
          <h3 className="text-xs font-base mt-2 text-left">
            Looking to sponsor? Email us at{" "}
            <span className="underline underline-offset-4 decoration-blackColor hover:decoration-faqColor decoration-1">
              grizzhacksou@gmail.com
            </span>{" "}
            for more details!
          </h3>
        </a>
      </div>
    </>
  );
};

export default SponsorGrid;
