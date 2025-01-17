import React from "react";

const AboutNew = () => {
  return (
    <>
      <div id="about" className="containerr 2xl:mt-72 lg:mt-44 mt-36 p-2 my-10">
        <h1 className=" flex justify-center mb-5">About</h1>
        <div className="flex lg:flex-row flex-col gap-5">
          <div className="flex flex-col lg:w-3/5 lg:m-0 justify-around">
            <div className="flex gap-2 flex-col">
              <div className="flex flex-col my-2">
                <h4 className="text-xl lg:text-2xl 2xl:text-3xl font-semibold">
                  GrizzHacks is back{" "}
                  <i className="text-indigo-400">in person</i>
                </h4>
                <p className="2xl:text-lg">
                  GrizzHacks is a 24 hour engineering marathon, welcome to
                  anyone. Whether you're a seasoned developer building a new
                  idea, a beginner looking to sharpen your skills, or a
                  unrelated major just interested in learning more, we have
                  something for you!
                </p>
              </div>
              <div className="flex flex-col my-2">
                <p className="2xl:text-lg">
                  Over the course of 24 hours, each team will build a project
                  from the ground up and then present their work to a panel of
                  judges to compete for prizes! You're allowed to create
                  anything you can think up but if you need some inspiration,
                  check out our
                  <a
                    href="#tracks"
                    className="text-indigo-400 underline underline-offset-2 hover:underline-offset-4 transition-all"
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
                className="text-indigo-400 underline underline-offset-2 hover:underline-offset-4 transition-all"
              >
                FAQ
              </a>
              .
            </p>
          </div>
          <div className="w-full lg:w-2/5 relative">
            <img
              src="cool-min.webp"
              className="rounded-lg"
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
