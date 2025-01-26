"use client";

import React from "react";
import { useState, useEffect } from "react";
import Link from "next/link";

const AboutNew = () => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) {
    return null;
  }

  return (
    <>
      <div id="about" className="containerr p-2 font-montserrat">
        <h1 className="flex justify-center mb-5 bg-gradient-to-b from-primaryBlueStart to-primaryBlueEnd z-20 bg-clip-text text-center text-5xl py-2 text-transparent font-bold lg:text-7xl">
          About
        </h1>
        <div className="flex lg:flex-row flex-col justify-between gap-5">
          <div className="flex flex-col lg:w-3/5 lg:m-0 justify-around">
            <div className="flex gap-2 flex-col">
              <div className="flex flex-col my-2">
                <h4 className="text-lg md:text-xl lg:text-2xl 2xl:text-3xl font-semibold">
                  We&apos;re back at OU with a{" "}
                  <i className="underline decoration-yellow decoration-2 underline-offset-4">
                    quackathon{" "}
                  </i>
                  !
                </h4>
                <p className="lg:text-lg text-sm mt-2">
                  GrizzHacks is a 24 hour engineering marathon, welcome to all
                  students. Whether you&apos;re a seasoned developer building a
                  new idea, a beginner looking to sharpen your skills, or simply
                  a tech lover, we have something for you!
                </p>
              </div>
              <div className="flex flex-col my-2">
                <p className="lg:text-lg text-sm">
                  Over the course of 24 hours, each team will develop a project
                  from the ground up and then present their work to a panel of
                  judges to compete for prizes! You&apos;re allowed to create
                  anything you can think of, but if you need some inspiration,
                  check out our{" "}
                  <Link
                    href="#tracks"
                    className="text-primary underline underline-offset-2 decoration-yellow hover:underline-offset-4 transition-all z-50"
                  >
                    tracks
                  </Link>{" "}
                  this year.
                </p>
              </div>
            </div>
            <p className="lg:text-lg text-smmt-2">
              Still have questions? Check out our{" "}
              <Link
                href="#faq"
                className="text-primary underline underline-offset-2 decoration-yellow hover:underline-offset-4 transition-all"
              >
                FAQ
              </Link>
              .
            </p>
          </div>
          <div className="w-full lg:w-1/3 relative flex items-center justify-center">
            <img
              src="/images/IMG_7684-S.webp"
              className="rounded-xl lg:mt-0 mt-6 md:mt-8 w-[80%] md:w-[45%] lg:w-[80%] h-auto object-cover z-10"
              alt="GrizzHacks bear"
            />
            <div className="inset-0 absolute rounded-lg">
              <img
                src={
                  window.innerWidth >= 1024
                    ? "/yellowblob.svg"
                    : "/yellowblob2.svg"
                }
                alt="yellow background"
                className="absolute z-0 scale-[80%] md:scale-[82%] lg:scale-150 w-auto h-auto top-[60%] lg:top-1/2 left-1/2 -translate-x-[50%] lg:-translate-x-[52%] -translate-y-[52%] lg:-translate-y-1/2"
              />
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center justify-center gap-4 lg:gap-10 mt-16">
          <div>
            <h2 className="text-xl lg:text-2xl 2xl:text-3xl font-semibold">
              Last Year We Had...
            </h2>
          </div>
          <div className="flex flex-wrap gap-4 lg:gap-6 xl:gap-10 text-white justify-center">
            <div className="flex flex-col gap-3 xl:gap-4 px-4 bg-blackColor lg:p-7 p-3 rounded-lg items-center justify-center w-[42%] md:w-[22%] lg:w-[20%]">
              <h1 className="font-bold text-5xl xl:text-6xl">130+</h1>
              <p className="xl:text-2xl lg:text-xl text-lg">Hackers</p>
            </div>
            <div className="flex flex-col gap-2 lg:gap-3 xl:gap-4 px-4 bg-blackColor lg:p-7 p-3 rounded-lg items-center justify-center w-[42%] md:w-[22%] lg:w-[20%]">
              <h1 className="font-bold text-5xl xl:text-6xl">15+</h1>
              <p className="xl:text-2xl lg:text-xl text-lg">Universities</p>
            </div>
            <div className="flex flex-col gap-3 xl:gap-4 px-4 bg-blackColor lg:p-7 p-3 rounded-lg items-center justify-center w-[42%] md:w-[22%] lg:w-[20%]">
              <h1 className="font-bold text-5xl xl:text-6xl">35+</h1>
              <p className="xl:text-2xl lg:text-xl text-lg">Projects</p>
            </div>
            <div className="flex flex-col gap-3 xl:gap-4 px-4 bg-blackColor lg:p-7 p-3 rounded-lg items-center justify-center w-[42%] md:w-[22%] lg:w-[20%]">
              <h1 className="font-bold text-5xl xl:text-6xl">$7k+</h1>
              <p className="xl:text-2xl lg:text-xl text-lg">Prizes</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutNew;
