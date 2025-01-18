import React from "react";

const AboutNew = () => {
  return (
    <>
      {/* background */}
      <div
        id="about"
        className="containerr 2xl:mt-72 lg:mt-64 md:mt-72 sm:mt-48 mt-40 p-2 my-10"
      >
        <h1 className="flex justify-center mb-5 bg-gradient-to-b from-primaryBlueStart to-primaryBlueEnd z-20 bg-clip-text text-center text-5xl py-2 text-transparent font-bold lg:text-7xl">
          About
        </h1>
        <div className="flex lg:flex-row flex-col justify-between gap-5">
          <div className="flex flex-col lg:w-3/5 lg:m-0 justify-around">
            <div className="flex gap-2 flex-col">
              <div className="flex flex-col my-2">
                <h4 className="text-xl lg:text-2xl 2xl:text-3xl font-semibold">
                  A <i className="text-yellow">quackathon </i>
                  is coming to Oakland!
                </h4>
                <p className="2xl:text-lg mt-2">
                  We're back at OU with a Quackathon GrizzHacks is a 24 hour
                  engineering marathon, welcome to anyone. Whether you're a
                  seasoned developer building a new idea, a beginner looking to
                  sharpen your skills, or a unrelated major just interested in
                  learning more, we have something for you!
                </p>
              </div>
              <div className="flex flex-col my-2">
                <p className="2xl:text-lg">
                  Over the course of 24 hours, each team will build a project
                  from the ground up and then present their work to a panel of
                  judges to compete for prizes! You're allowed to create
                  anything you can think up but if you need some inspiration,
                  check out our{" "}
                  <a
                    href="#tracks"
                    className="text-yellow underline underline-offset-2 hover:underline-offset-4 transition-all"
                  >
                    tracks
                  </a>{" "}
                  this year.
                </p>
              </div>
            </div>
            <p className="2xl:text-lg">
              Still have questions? Check out our{" "}
              <a
                href="/#faq"
                className="text-yellow underline underline-offset-2 hover:underline-offset-4 transition-all"
              >
                FAQ
              </a>
              .
            </p>
          </div>
          <div className="w-full lg:w-1/3 relative flex items-center">
            <img
              src="/images/IMG_7684-S.webp"
              className="rounded-lg w-full h-full object-cover"
              alt="Top down view of GrizzHacks"
            />
            <div className="inset-0 absolute bg-neutral-900/30 rounded-lg z-10" />
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutNew;
