import React from "react";

const Hero = () => {
  return (
    <div>
      <section className="w-full containerr">
        {/* desktop pic */}
        <img
          src="/images/duckybg.svg"
          alt="GrizzHacks hero background"
          className="w-full absolute inset-0 opacity-20 -z-50 hidden lg:block overflow-hidden"
        />
        {/* mobile pic */}
        <img
          src="/images/duckybg-min.svg"
          alt="GrizzHacks hero background"
          className="w-screen absolute inset-0 opacity-20 -z-50 lg:hidden overflow-hidden"
        />
        {/* black overlay */}
        <div className="w-full absolute inset-0 bg-black opacity-70 -z-40"></div>

        {/* main content section */}
        {/*larger screens, left align */}
        <section className="hidden md:block">
          <div className="flex flex-col mt-12 2xl:mt-20">
            <h2 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-7xl font-light">
              Dream it,
            </h2>
            <h1 className="text-7xl md:text-7xl lg:text-8xl xl:text-9xl 2xl:text-10xl font-bold bg-gradient-to-b from-primaryBlueStart to-primaryBlueEnd bg-clip-text text-transparent">
              Build it.
            </h1>
          </div>
          <div className="flex flex-col gap-5 mb-10 mt-6">
            <div className="flex gap-4 items-center">
              <img
                className="w-12 lg:w-14 2xl:w-16"
                src="/images/pin.svg"
                alt=""
              />
              <p className="text-2xl lg:text-3xl 2xl:text-4xl font-semibold text-white">
                Oakland University
              </p>
            </div>
            <div className="flex gap-4 items-center">
              <img
                className="w-12 lg:w-14 2xl:w-16"
                src="/images/time.svg"
                alt=""
              />
              <p className="text-2xl lg:text-3xl 2xl:text-4xl font-semibold text-white">
                March 22nd-23rd
              </p>
            </div>
          </div>
          <div className="flex flex-col gap-1">
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
        {/*smaller screens, center align */}
        <section className="md:hidden">
          <div className="flex flex-col mt-20 items-center">
            <h2 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-7xl font-light">
              Dream it,
            </h2>
            <h1 className="text-7xl md:text-7xl lg:text-8xl xl:text-9xl 2xl:text-10xl font-bold bg-gradient-to-b from-primaryBlueStart to-primaryBlueEnd bg-clip-text text-transparent">
              Build it.
            </h1>
          </div>
          <div className="flex flex-col gap-5 mb-10 mt-6 items-center">
            <div className="flex gap-4 items-center">
              <img
                className="w-12 lg:w-14 2xl:w-16"
                src="/images/pin.svg"
                alt=""
              />
              <p className="text-2xl lg:text-3xl 2xl:text-4xl font-semibold text-white">
                Oakland University
              </p>
            </div>
            <div className="flex gap-4 items-center">
              <img
                className="w-12 lg:w-14 2xl:w-16"
                src="/images/time.svg"
                alt=""
              />
              <p className="text-2xl lg:text-3xl 2xl:text-4xl font-semibold text-white">
                March 22nd-23rd
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
