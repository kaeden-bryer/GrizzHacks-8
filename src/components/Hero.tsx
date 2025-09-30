import React from "react";

const Hero = () => {
  return (
    <>
      <section className="min-w-screen h-auto relative flex items-center justify-center">
        {/* desktop LARGE pic */}
        <img
          src="/cloudbg.png"
          alt="clouds"
          className="w-full object-cover absolute inset-0 md:-top-12 lg:-top-8 xl:-top-12 -z-30 hidden md:block"
        />

        <img
          src="/cloudsmbg.png"
          alt="clouds"
          className="w-full object-cover absolute inset-0 -top-36 -z-30 block md:hidden"
        />

        {/* main content section */}
        {/*larger screens, left align */}
        <section className="hidden md:block">
          <div className="flex flex-col lg:mt-12 mt-16 2xl:mt-20 items-center">
            <h1 className="text-7xl lg:text-8xl 2xl:text-9xl font-bold bg-gradient-to-b from-blackStart to-blackEnd bg-clip-text text-transparent">
              GrizzHacks 8
            </h1>
          </div>
          <div className="flex gap-10 mt-4 2xl:mb-10 mb-12 justify-center">
            <div className="flex gap-2 items-center justify-center">
              <img className="w-8 2xl:w-10" src="/date.svg" alt="" />
              <h2 className="text-2xl 2xl:text-3xl text-blackColor">
                March 21st-22nd
              </h2>
            </div>
            <div className="flex items-center justify-center gap-1">
              <img className="w-8 2xl:w-10" src="/pin.png" alt="" />
              <h2 className="text-2xl 2xl:text-3xl text-blackColor">
                Oakland University
              </h2>
            </div>
          </div>
          <div className="flex flex-col gap-1 items-center">
            <a
              href="https://ethantocco.picflow.com/grizzhacks2025"
              target="_blank"
              className="flex items-center justify-center py-2 2xl:py-3 px-4 2xl:px-6 text-2xl lg:text-3xl rounded-2xl bg-primary hover:bg-primaryHover w-fit text-white font-semibold font-montserrat relative ring-2 ring-primaryHover"
            >
              GH 7 Gallery
            </a>
            <h3 className="flex text-base 2xl:text-lg text-blackColor">
              The Quackathon Has Ended
            </h3>
          </div>
          <div className="flex items-center justify-center -mt-24">
            <img
              src="/pondimg.png"
              alt="pond cartoon"
              className="scale-[75%]"
            />
          </div>
        </section>

        {/*smaller screens, center align */}
        {/* NEED TO FIX */}
        <section className="md:hidden w-full">
          <div className="flex flex-col items-center justify-center mt-16">
            <h1 className="text-5xl font-bold bg-gradient-to-b from-blackStart to-blackEnd bg-clip-text text-transparent">
              GrizzHacks 8
            </h1>
          </div>
          <div className="font-montserrat flex flex-col gap-1 mb-12 mt-4 items-center justify-center text-base font-semibold text-blackColor ">
            <div className="flex gap-1 items-center">
              <img className="w-5" src="/date.svg" alt="" />
              <h2>March 21st-22nd</h2>
            </div>
            <div className="flex gap-0 items-center">
              <img className="w-5" src="/pin.png" alt="" />
              <h2>Oakland University</h2>
            </div>
          </div>
          <div className="flex flex-col gap-1 items-center">
            <a
              href="https://ethantocco.picflow.com/grizzhacks2025"
              className="font-montserrat flex items-center justify-center p-2 px-3 text-xl lg:text-3xl 2xl:text-3xl rounded-xl bg-primary hover:bg-primaryHover w-fit text-white font-semibold relative ring-2 ring-primaryHover"
            >
              GH 7 Gallery
            </a>
            <h3 className="flex text-base font-montserrat">
              The Quackathon Has Ended
            </h3>
          </div>
          <div className="flex items-center justify-center mt-8">
            <img
              src="/pondimg.png"
              alt="pond cartoon"
              className="scale-[120%] overflow-hidden"
            />
          </div>
        </section>
      </section>
    </>
  );
};

export default Hero;
