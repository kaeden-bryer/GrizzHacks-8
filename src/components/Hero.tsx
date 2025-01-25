import React from "react";

const Hero = () => {
  return (
    <div>
      <section className="w-full containerr min-h-screen">
        {/* desktop LARGE pic */}
        <img
          src="/web-pondbg.svg"
          alt="Pond hero background"
          className="w-full object-cover min-h-screen absolute inset-0 -z-30 hidden xl:block overflow-hidden"
        />
        {/* desktop regular pic */}
        <img
          src="/web-pondbg.svg"
          alt="Pond hero background"
          className="w-full object-cover md:block hidden xl:hidden min-h-screen absolute inset-0 -z-30 overflow-hidden"
        />
        {/* mobile pic */}
        <img
          src="mobile-pondbg.svg"
          alt="Pond hero background"
          className="w-full absolute object-cover inset-0 min-h-screen -z-30 md:hidden overflow-hidden"
        />

        {/* main content section */}
        {/*larger screens, left align */}
        <section className="hidden md:block">
          <div className="flex flex-col lg:mt-12 mt-16 2xl:mt-20 items-center">
            <h1 className="text-7xl lg:text-8xl 2xl:text-9xl font-bold bg-gradient-to-b from-blackStart to-blackEnd bg-clip-text text-transparent">
              GrizzHacks 7
            </h1>
          </div>
          <div className="flex gap-10 mt-4 2xl:mb-10 mb-12 justify-center">
            <div className="flex gap-2 items-center justify-center">
              <img className="w-8 2xl:w-10" src="/date.svg" alt="" />
              <p
                className="text-2xl 2xl:text-3xl font-bold text-blackColor"
                style={{ fontFamily: "'Montserrat', sans-serif" }}
              >
                March 22nd-23rd
              </p>
            </div>
            <div className="flex items-center justify-center gap-1">
              <img className="w-8 2xl:w-10" src="/pin.svg" alt="" />
              <p
                className="text-2xl 2xl:text-3xl font-bold text-blackColor"
                style={{ fontFamily: "'Montserrat', sans-serif" }}
              >
                Oakland University
              </p>
            </div>
          </div>
          <div className="flex flex-col gap-1 items-center">
            <a
              href="https://form.typeform.com/to/ozOq06mS"
              target="_blank"
              className="flex items-center justify-center py-2 2xl:py-3 px-4 2xl:px-6 text-2xl 2xl:text-3xl rounded-2xl bg-primary hover:bg-primaryHover w-fit text-white font-semibold relative ring-2 ring-primaryHover"
              style={{ fontFamily: "'Montserrat', sans-serif" }}
            >
              Register Now!
            </a>
            <p
              className="flex text-base 2xl:text-lg font-semibold text-blackColor"
              style={{ fontFamily: "'Montserrat', sans-serif" }}
            >
              Join the Quackathon
            </p>
          </div>
        </section>
        {/*smaller screens, center align */}
        {/* NEED TO FIX */}
        <section className="md:hidden">
          <div className="flex flex-col mt-32 items-center">
            <h1 className="text-7xl font-bold bg-gradient-to-b from-blackStart to-blackEnd bg-clip-text text-transparent">
              GrizzHacks7
            </h1>
          </div>
          <div className="flex flex-col gap-3 mb-10 mt-6 items-center">
            <div className="flex gap-2 items-center">
              <img className="w-8" src="/date.svg" alt="" />
              <p className="text-2xl lg:text-3xl 2xl:text-4xl font-semibold text-blackColor">
                March 22nd-23rd
              </p>
            </div>
            <div className="flex gap-1 items-center">
              <img className="w-8" src="/pin.svg" alt="" />
              <p className="text-2xl lg:text-3xl 2xl:text-4xl font-semibold text-blackColor">
                Oakland University
              </p>
            </div>
          </div>
          <div className="flex flex-col gap-1 items-center">
            <a
              href="TYPEFORM LINK"
              className="flex items-center justify-center p-3 px-5 text-2xl lg:text-3xl 2xl:text-3xl rounded-xl bg-primary hover:bg-primaryHover w-fit text-white font-semibold relative ring-2 ring-primaryHover"
              style={{ fontFamily: "'Montserrat', sans-serif" }}
            >
              Register Now!
            </a>
            <p
              className="flex text-lg font-semibold"
              style={{ fontFamily: "'Montserrat', sans-serif" }}
            >
              Join the Quackathon
            </p>
          </div>
        </section>
      </section>
    </div>
  );
};

export default Hero;
