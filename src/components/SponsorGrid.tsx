import React from "react";
import SponsorCard from "./SponsorCard";
import sponsors from "../data/sponsors.json";

const SponsorGrid = () => {
  return (
    <>
      {/* LARGE SCREEN SIZE */}
      <div className="hidden xl:grid grid-cols-5 grid-rows-5 gap-1.5 p-4">

        {/* People.Health. Silver */}
        <a
          href={sponsors[2].link}
          className="p-6 col-span-2 row-span-1 bg-neutral-950/80 ring-1 ring-neutral-800/30 flex items-center justify-center rounded-md hover:from-[#C0C0C0]/30 hover:via-[#C0C0C0]/70 hover:to-[#C0C0C0]/30 hover:bg-gradient-to-bl"
        >
          <img
            src={`${sponsors[2].logo}`}
            alt={`${sponsors[2].name} Logo`}
            className="absolute w-80"
          />
        </a>

        

        {/* OUCU. Gold */}
        <a
          href={sponsors[1].link}
          className="p-6 col-span-2 row-span-2 bg-neutral-950/80 ring-1 ring-neutral-800/30 flex items-center justify-center rounded-md hover:from-[#D4AF37]/40 hover:via-[#D4AF37]/80 hover:to-[#D4AF37]/40 hover:bg-gradient-to-bl"
        >
          <img
            src={`${sponsors[1].logo}`}
            alt={`${sponsors[1].name} Logo`}
            className=" w-80"
          />
        </a>

        {/* MLH. Bronze */}
        <a
          href={sponsors[0].link}
          className="p-6 col-span-1 row-span-1 bg-neutral-950/80 ring-1 ring-neutral-800/30 flex items-center justify-center rounded-md hover:from-[#CD7F32]/40 hover:via-[#CD7F32]/80 hover:to-[#CD7F32]/40 hover:bg-gradient-to-bl"
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
          className="p-6 col-span-1 row-span-1 bg-neutral-950/80 ring-1 ring-neutral-800/30 flex items-center justify-center rounded-md hover:from-[#CD7F32]/40 hover:via-[#CD7F32]/80 hover:to-[#CD7F32]/40 hover:bg-gradient-to-bl"
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
          className="p-6 col-span-1 row-span-1 bg-neutral-950/80 ring-1 ring-neutral-800/30 flex items-center justify-center rounded-md hover:from-[#CD7F32]/40 hover:via-[#CD7F32]/80 hover:to-[#CD7F32]/40 hover:bg-gradient-to-bl"
        >
          <img
            src={`${sponsors[4].logo}`}
            alt={`${sponsors[4].name} Logo`}
            className="absolute w-32"
          />
        </a>


        {/* Center */}
        <div className="md:p-4 p-2 col-span-1 row-span-1 bg-neutral-950/80 ring-1 ring-neutral-800/30 flex items-center justify-center rounded-md bg-gradient-to-bl">
          <h5 className="font-bold text-2xl text-center">
            More coming soon...
          </h5>
        </div>


      </div>

      {/*
            Bronze
            hover:from-[#CD7F32]/40 hover:via-[#CD7F32]/80 hover:to-[#CD7F32]/40 hover:bg-gradient-to-bl

            Silver
            hover:from-[#C0C0C0]/30 hover:via-[#C0C0C0]/70 hover:to-[#C0C0C0]/30 hover:bg-gradient-to-bl

            Gold
            hover:from-[#D4AF37]/40 hover:via-[#D4AF37]/80 hover:to-[#D4AF37]/40 hover:bg-gradient-to-bl
        */}

      {/* SMALL SCREEN SIZE */}
        <div className="flex xl:hidden flex-col gap-2">
            {/* Gold */}
            <a
                href={sponsors[1].link}
                className="h-[20vh] p-6 bg-neutral-950/80 ring-1 ring-neutral-800/30 flex items-center justify-center rounded-md hover:from-[#D4AF37]/40 hover:via-[#D4AF37]/80 hover:to-[#D4AF37]/40 hover:bg-gradient-to-bl"
            >
                <img src=
                {`${sponsors[1].logo}`}
                alt={`${sponsors[1].name} Logo`} className="w-48" />
            </a>
            
            {/* Grid containing both a silver item and a bronze grid*/}
            <div className=" grid grid-cols-2 gap-2 w-full">

              {/* Silver item*/}
                <a
                    href={sponsors[2].link}
                    className="h-[20vh] col-span-1 p-6 bg-neutral-950/80 ring-1 ring-neutral-800/30 flex items-center justify-center rounded-md hover:from-[#C0C0C0]/30 hover:via-[#C0C0C0]/70 hover:to-[#C0C0C0]/30 hover:bg-gradient-to-bl"
                >
                    <img src=
                {`${sponsors[2].logo}`}
                alt={`${sponsors[2].name} Logo`} className="absolute w-60" />
                </a>
                {/* bronze grid*/}
                <div className="grid grid-cols-2 gap-2 w-full">
                <a
                    href={sponsors[0].link}
                    className="h-[20vh] md:p-4 p-2 col-span-1 row-span-1 bg-neutral-950/80 ring-1 ring-neutral-800/30 flex items-center justify-center rounded-md hover:from-[#CD7F32]/40 hover:via-[#CD7F32]/80 hover:to-[#CD7F32]/40 hover:bg-gradient-to-bl"
                >
                    <img src=
                {`${sponsors[0].logo}`}
                alt={`${sponsors[0].name} Logo`} className="w-48" />
                </a>

                <a
                    href={sponsors[3].link}
                    className="h-[20vh] md:p-4 p-2 col-span-1 row-span-1 bg-neutral-950/80 ring-1 ring-neutral-800/30 flex items-center justify-center rounded-md hover:from-[#CD7F32]/40 hover:via-[#CD7F32]/80 hover:to-[#CD7F32]/40 hover:bg-gradient-to-bl"
                >
                    <img src=
                {`${sponsors[3].logo}`}
                alt={`${sponsors[3].name} Logo`} className="w-48" />
                </a>
   
                   
            </div>

                    
            </div>
            {/* Silver
            <div className="grid grid-cols-4 gap-2 w-full">
                <a
                    href={sponsors[2].link}
                    className="col-span-2 p-6 bg-neutral-950/80 ring-1 ring-neutral-800/30 flex items-center justify-center rounded-md hover:from-[#C0C0C0]/30 hover:via-[#C0C0C0]/70 hover:to-[#C0C0C0]/30 hover:bg-gradient-to-bl"
                >
                    <img src=
                {`${sponsors[2].logo}`}
                alt={`${sponsors[2].name} Logo`} className="w-48" />
                </a>
            </div>
            */}

            {/* Bronze */}
            <div className="grid grid-cols-4 gap-2 w-full"> 
            {/* Blank spacer */}
            <div className="h-[20vh] md:p-4 p-2 col-span-1 row-span-1 bg-neutral-950/0  flex items-center justify-center rounded-md"></div>

            <a
                    href={sponsors[4].link}
                    className="h-[20vh] md:p-4 p-2 col-span-1 row-span-1 bg-neutral-950/80 ring-1 ring-neutral-800/30 flex items-center justify-center rounded-md hover:from-[#CD7F32]/40 hover:via-[#CD7F32]/80 hover:to-[#CD7F32]/40 hover:bg-gradient-to-bl"
                >
                    <img src=
                {`${sponsors[4].logo}`}
                alt={`${sponsors[4].name} Logo`} className="w-48" />
                </a>


                <div className="h-[20vh] md:p-4 p-2 col-span-1 row-span-1 bg-neutral-950/80 ring-1 ring-neutral-800/30 flex items-center justify-center rounded-md hover:from-[#CD7F32]/40 hover:via-[#CD7F32]/80 hover:to-[#CD7F32]/40 hover:bg-gradient-to-bl"
                >
                    <h4 className="font-bold text-1xl text-center">Coming soon... </h4>
                      
                </div>

                
                

            </div>
            
        </div>
        
    </>
  );
};

export default SponsorGrid;
