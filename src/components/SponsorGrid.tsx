import React from "react";
import SponsorCard from "./SponsorCard";
import sponsors from "../data/sponsors.json";

const SponsorGrid = () => {
  return (
    <>
      {/* LARGE SCREEN SIZE */}
      <div className="hidden xl:grid grid-cols-8 grid-rows-4 gap-1.5 p-4">
        {/* MLH. Bronze */}
        <a
          href={sponsors[0].link}
          className="p-6 col-span-1 row-span-1 bg-neutral-950/80 ring-1 ring-neutral-800/30 flex items-center justify-center rounded-md hover:from-[#CD7F32]/40 hover:via-[#CD7F32]/80 hover:to-[#CD7F32]/40 hover:bg-gradient-to-bl"
        >
          <img
            src={`${sponsors[0].logo}`}
            alt={`${sponsors[0].name} Logo`}
            className="w-24"
          />
        </a>

        {/* Center */}
        <div className="md:p-4 p-2 col-span-2 row-span-1 bg-neutral-950/80 ring-1 ring-neutral-800/30 flex items-center justify-center rounded-md from-primary/80 via-primaryBlueStart/80 to-primaryBlueEnd/80 bg-gradient-to-bl">
          <h5 className="font-bold text-2xl text-center">
            Thank you for making GrizzHacks possible!
          </h5>
        </div>

        {/* OUCU. Gold */}
        <a
          href={sponsors[1].link}
          className="p-6 col-span-2 row-span-2 bg-neutral-950/80 ring-1 ring-neutral-800/30 flex items-center justify-center rounded-md hover:from-[#D4AF37]/40 hover:via-[#D4AF37]/80 hover:to-[#D4AF37]/40 hover:bg-gradient-to-bl"
        >
          <img
            src={`${sponsors[1].logo}`}
            alt={`${sponsors[1].name} Logo`}
            className="w-60"
          />
        </a>

        {/* StandOutStickers. Bronze */}
        <a
          href={sponsors[4].link}
          className="p-6 col-span-1 row-span-1 bg-neutral-950/80 ring-1 ring-neutral-800/30 flex items-center justify-center rounded-md hover:from-[#CD7F32]/40 hover:via-[#CD7F32]/80 hover:to-[#CD7F32]/40 hover:bg-gradient-to-bl"
        >
          <img
            src={`${sponsors[4].logo}`}
            alt={`${sponsors[4].name} Logo`}
            className="w-24"
          />
        </a>

        {/* People.Health. Silver */}
        <a
          href={sponsors[2].link}
          className="p-6 col-span-2 row-span-1 bg-neutral-950/80 ring-1 ring-neutral-800/30 flex items-center justify-center rounded-md hover:from-[#C0C0C0]/30 hover:via-[#C0C0C0]/70 hover:to-[#C0C0C0]/30 hover:bg-gradient-to-bl"
        >
          <img
            src={`${sponsors[2].logo}`}
            alt={`${sponsors[2].name} Logo`}
            className="w-60"
          />
        </a>

        {/* CyberOU. Bronze */}
        <a
          href={sponsors[3].link}
          className="p-6 col-span-1 row-span-1 bg-neutral-950/80 ring-1 ring-neutral-800/30 flex items-center justify-center rounded-md hover:from-[#CD7F32]/40 hover:via-[#CD7F32]/80 hover:to-[#CD7F32]/40 hover:bg-gradient-to-bl"
        >
          <img
            src={`${sponsors[3].logo}`}
            alt={`${sponsors[3].name} Logo`}
            className="w-24"
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

      {/* SMALL SCREEN SIZE 
        <div className="flex xl:hidden flex-col gap-2">
            <!-- GOLD -->
            <a
                href={sponsors[3].link}
                className="p-6 bg-neutral-950/80 ring-1 ring-neutral-800/30 flex items-center justify-center rounded-md hover:from-[#D4AF37]/40 hover:via-[#D4AF37]/80 hover:to-[#D4AF37]/40 hover:bg-gradient-to-bl"
            >
                <img src="sponsors/{sponsors[3].logo}" alt="{sponsors[3].name} Logo" className="w-48" />
            </a>
            <a
                href={sponsors[11].link}
                className="p-6 bg-neutral-950/80 ring-1 ring-neutral-800/30 flex items-center justify-center rounded-md hover:from-[#D4AF37]/40 hover:via-[#D4AF37]/80 hover:to-[#D4AF37]/40 hover:bg-gradient-to-bl"
            >
                <img src="sponsors/{sponsors[11].logo}" alt="{sponsors[11].name} Logo" className="w-36" />
            </a>
            <a
                href={sponsors[17].link}
                className="p-6 bg-neutral-950/80 ring-1 ring-neutral-800/30 flex items-center justify-center rounded-md hover:from-[#D4AF37]/40 hover:via-[#D4AF37]/80 hover:to-[#D4AF37]/40 hover:bg-gradient-to-bl"
            >
                <img src="sponsors/{sponsors[17].logo}" alt="{sponsors[17].name} Logo" className="w-40" />
            </a>
            <!-- SILVER -->
            <div className="grid grid-cols-2 gap-2 w-full">
                <a
                    href={sponsors[10].link}
                    className="col-span-1 p-6 bg-neutral-950/80 ring-1 ring-neutral-800/30 flex items-center justify-center rounded-md hover:from-[#C0C0C0]/30 hover:via-[#C0C0C0]/70 hover:to-[#C0C0C0]/30 hover:bg-gradient-to-bl"
                >
                    <img src="sponsors/{sponsors[10].logo}" alt="{sponsors[10].name} Logo" className="w-20" />
                </a>
                <a
                    href={sponsors[9].link}
                    className="p-6 col-span-1 bg-neutral-950/80 ring-1 ring-neutral-800/30 flex items-center justify-center rounded-md hover:from-[#C0C0C0]/30 hover:via-[#C0C0C0]/70 hover:to-[#C0C0C0]/30 hover:bg-gradient-to-bl"
                >
                    <img src="sponsors/{sponsors[9].logo}" alt="{sponsors[9].name} Logo" className="w-20" />
                </a>
            </div>
            <!-- SILVER -->
            <div className="grid grid-cols-4 gap-2 w-full">
                <a
                    href={sponsors[0].link}
                    className="col-span-2 p-6 bg-neutral-950/80 ring-1 ring-neutral-800/30 flex items-center justify-center rounded-md hover:from-[#C0C0C0]/30 hover:via-[#C0C0C0]/70 hover:to-[#C0C0C0]/30 hover:bg-gradient-to-bl"
                >
                    <img src="sponsors/{sponsors[0].logo}" alt="{sponsors[0].name} Logo" className="w-44" />
                </a>
                <a
                    href={sponsors[8].link}
                    className="col-span-2 p-6 bg-neutral-950/80 ring-1 ring-neutral-800/30 flex items-center justify-center rounded-md hover:from-[#C0C0C0]/30 hover:via-[#C0C0C0]/70 hover:to-[#C0C0C0]/30 hover:bg-gradient-to-bl"
                >
                    <img src="sponsors/{sponsors[8].logo}" alt="{sponsors[8].name} Logo" className="w-44" />
                </a>
                <a
                    href={sponsors[1].link}
                    className="md:p-4 p-2 col-span-1 row-span-1 bg-neutral-950/80 ring-1 ring-neutral-800/30 flex items-center justify-center rounded-md hover:from-[#CD7F32]/40 hover:via-[#CD7F32]/80 hover:to-[#CD7F32]/40 hover:bg-gradient-to-bl"
                >
                    <img src="sponsors/{sponsors[1].logo}" alt="{sponsors[1].name} Logo" className="w-24" />
                </a>
                <a
                    href={sponsors[6].link}
                    className="md:p-4 p-2 col-span-1 row-span-1 bg-neutral-950/80 ring-1 ring-neutral-800/30 flex items-center justify-center rounded-md hover:from-[#CD7F32]/40 hover:via-[#CD7F32]/80 hover:to-[#CD7F32]/40 hover:bg-gradient-to-bl"
                >
                    <img src="sponsors/{sponsors[6].logo}" alt="{sponsors[6].name} Logo" className="w-24" />
                </a>
                <a
                    href={sponsors[12].link}
                    className="md:p-4 p-2 col-span-1 row-span-1 bg-neutral-950/80 ring-1 ring-neutral-800/30 flex items-center justify-center rounded-md hover:from-[#CD7F32]/40 hover:via-[#CD7F32]/80 hover:to-[#CD7F32]/40 hover:bg-gradient-to-bl"
                >
                    <img src="sponsors/{sponsors[12].logo}" alt="{sponsors[12].name} Logo" className="md:w-32 w-28" />
                </a>
                <a
                    href={sponsors[13].link}
                    className="md:p-4 p-2 col-span-1 row-span-1 bg-neutral-950/80 ring-1 ring-neutral-800/30 flex items-center justify-around rounded-md hover:from-[#CD7F32]/40 hover:via-[#CD7F32]/80 hover:to-[#CD7F32]/40 hover:bg-gradient-to-bl"
                >
                    <img src="sponsors/{sponsors[13].logo}" alt="{sponsors[13].name} Logo" className="md:w-12 w-24" />
                    <img
                        src="sponsors/{sponsors[15].logo}"
                        alt="{sponsors[15].name} Logo"
                        className="w-12 hidden md:block"
                    />
                    <img
                        src="sponsors/{sponsors[14].logo}"
                        alt="{sponsors[14].name} Logo"
                        className="w-12 hidden md:block"
                    />
                </a>
            </div>
            <!-- BRONZE -->
            <div className="grid grid-cols-4 gap-2 w-full">
                <a
                    href={sponsors[2].link}
                    className="md:p-4 p-2 col-span-1 row-span-1 bg-neutral-950/80 ring-1 ring-neutral-800/30 flex items-center justify-center rounded-md hover:from-[#CD7F32]/40 hover:via-[#CD7F32]/80 hover:to-[#CD7F32]/40 hover:bg-gradient-to-bl"
                >
                    <img src="sponsors/{sponsors[2].logo}" alt="{sponsors[2].name} Logo" className="w-24" />
                </a>
                <a
                    href={sponsors[4].link}
                    className="md:p-4 p-2 col-span-1 row-span-1 bg-neutral-950/80 ring-1 ring-neutral-800/30 flex items-center justify-center rounded-md hover:from-[#CD7F32]/40 hover:via-[#CD7F32]/80 hover:to-[#CD7F32]/40 hover:bg-gradient-to-bl"
                >
                    <img src="sponsors/{sponsors[4].logo}" alt="{sponsors[4].name} Logo" className="w-24" />
                </a>
                <a
                    href={sponsors[5].link}
                    className="md:p-4 p-2 col-span-1 row-span-1 bg-neutral-950/80 ring-1 ring-neutral-800/30 flex items-center justify-center rounded-md hover:from-[#CD7F32]/40 hover:via-[#CD7F32]/80 hover:to-[#CD7F32]/40 hover:bg-gradient-to-bl"
                >
                    <img src="sponsors/{sponsors[5].logo}" alt="{sponsors[5].name} Logo" className="" />
                </a>
                <a
                    href={sponsors[7].link}
                    className="md:p-4 p-2 col-span-1 row-span-1 bg-neutral-950/80 ring-1 ring-neutral-800/30 flex items-center justify-center rounded-md hover:from-[#CD7F32]/40 hover:via-[#CD7F32]/80 hover:to-[#CD7F32]/40 hover:bg-gradient-to-bl"
                >
                    <img src="sponsors/{sponsors[7].logo}" alt="{sponsors[7].name} Logo" className="" />
                </a>
                <a
                    href={sponsors[16].link}
                    className="md:p-4 p-2 col-span-1 row-span-1 bg-neutral-950/80 ring-1 ring-neutral-800/30 flex items-center justify-center rounded-md hover:from-[#CD7F32]/40 hover:via-[#CD7F32]/80 hover:to-[#CD7F32]/40 hover:bg-gradient-to-bl"
                >
                    <img src="sponsors/{sponsors[16].logo}" alt="{sponsors[16].name} Logo" className="w-12" />
                </a>
                <a
                    href="https://grizzhacks.org"
                    className="md:p-4 p-2 col-span-1 row-span-1 bg-neutral-950/80 ring-1 ring-neutral-800/30 flex items-center justify-center rounded-md hover:from-[#CD7F32]/40 hover:via-[#CD7F32]/80 hover:to-[#CD7F32]/40 hover:bg-gradient-to-bl"
                >
                    <p className="font-bold">Coming Soon...</p>
                </a>
            </div>
        </div>
        */}
    </>
  );
};

export default SponsorGrid;
