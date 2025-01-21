"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";

const Navbar: React.FC = () => {
  const [burgerClicked, setBurgerClicked] = useState(false);

  return (
    <>
      {/* MLH banner */}
      <div className="md:w-20 w-[4.5rem] absolute top-0 xl:right-10 lg:right-2 right-[40%] z-20">
        <a
          id="mlh-trust-badge"
          href="https://mlh.io/na?utm_source=na-hackathon&utm_medium=TrustBadge&utm_campaign=2025-season&utm_content=black"
          target="_blank"
        >
          <img
            src="https://s3.amazonaws.com/logged-assets/trust-badge/2025/mlh-trust-badge-2025-black.svg"
            alt="Major League Hacking 2025 Hackathon Season"
            style={{ width: "100%" }}
          />
        </a>
      </div>

      {/* Nav Bar */}
      <nav className="top-10 z-10 w-full h-15 md:h-20 text-blackColor bg-white rounded-lg flex justify-between items-center md:px-10 sm:px-5 py-3 mb-4 md:mt-6 sm:mt-4 px-4">
        <a href="#home">
          <img
            src="/images/logo.svg"
            alt="Grizzhacks"
            className="object-cover md:w-16 w-12"
          />
        </a>
        <div className="lg:flex justify-center items-center gap-7 text-2xl hidden">
          <a
            href="#about"
            className="font-semibold hover:text-primary transition-all duration-100"
          >
            About
          </a>
          {/*
          <a
            href="#schedule"
            className="font-semibold hover:text-primary transition-all duration-100"
          >
            Schedule
          </a>
          */}
          <a
            href="#tracks"
            className="font-semibold hover:text-primary transition-all duration-100"
          >
            Tracks
          </a>
          <a
            href="#sponsors"
            className="font-semibold hover:text-primary transition-all duration-100"
          >
            Sponsor
          </a>
          <a
            href="#faq"
            className="font-semibold hover:text-primary transition-all duration-100"
          >
            FAQ
          </a>
          {/*
          <a
            href="#team"
            className="font-semibold hover:text-primary transition-all duration-100"
          >
            Team
          </a>
          */}
          <a
            href="TYPEFORM LINK"
            className="font-semibold hover:bg-primaryHover hover:text-white w-fit relative ring-2 ring-primaryHover rounded-3xl py-2 px-4"
          >
            Register
          </a>
        </div>

        {/* hamburger button */}
        <button
          className="flex flex-col py-2 pb-2 px-1 lg:hidden"
          onClick={() => setBurgerClicked(!burgerClicked)}
        >
          <div
            className={`w-10 bg-white h-1 origin-center transition-all duration-300 ${
              burgerClicked
                ? "rotate-45 translate-y-0.5"
                : "rotate-0 -translate-y-1"
            }`}
          />
          <div
            className={`w-10 bg-white h-1 origin-center transition-all duration-300 ${
              burgerClicked
                ? "-rotate-45 -translate-y-0.5"
                : "rotate-0 translate-y-1"
            }`}
          />
        </button>
      </nav>

      {burgerClicked && (
        <div className="rounded-lg flex flex-col lg:hidden text-xl navActive fixed top-0 inset-x-0 z-50 mx-4 md:mx-12">
          {/* MLH banner */}
          <div className="md:w-20 w-[4.5rem] absolute right-[39%] md:right-[38.5%] z-20">
            <a
              id="mlh-trust-badge"
              href="https://mlh.io/na?utm_source=na-hackathon&utm_medium=TrustBadge&utm_campaign=2025-season&utm_content=black"
              target="_blank"
            >
              <img
                src="https://s3.amazonaws.com/logged-assets/trust-badge/2025/mlh-trust-badge-2025-black.svg"
                alt="Major League Hacking 2025 Hackathon Season"
                style={{ width: "100%" }}
              />
            </a>
          </div>
          <nav className="sticky top-10 z-10 w-full h-30 md:h-20 bg-neutral-900/80 rounded-t-lg flex justify-between items-center md:px-10 sm:px-5 py-3 mb-4 mt-4 px-4">
            <a
              href="/"
              className="md:w-16 w-12"
              onClick={() => setBurgerClicked(false)}
            >
              <img
                src="/images/logo.svg"
                alt="GrizzHacks"
                className="object-cover md:w-16 w-12"
              />
            </a>
            <button
              className="flex flex-col py-2 pb-2 px-1 lg:hidden"
              onClick={() => setBurgerClicked(!burgerClicked)}
            >
              <div
                className={`w-10 bg-white h-1 origin-center transition-all duration-300 ${
                  burgerClicked
                    ? "rotate-45 translate-y-0.5"
                    : "rotate-0 -translate-y-1"
                }`}
              />
              <div
                className={`w-10 bg-white h-1 origin-center transition-all duration-300 ${
                  burgerClicked
                    ? "-rotate-45 -translate-y-0.5"
                    : "rotate-0 translate-y-1"
                }`}
              />
            </button>
          </nav>
          <div className="w-full mt-2">
            {["About", "Tracks", "Sponsors", "FAQ's"].map((item, index) => (
              <a
                key={item}
                href={`/#${item.toLowerCase()}`}
                className="h-14 w-full flex items-center last:rounded-b-lg bg-neutral-900 hover:bg-primary justify-center border-b-2 border-primary hover:border-primaryHover text-2xl"
                onClick={() => setBurgerClicked(false)}
              >
                <motion.div
                  className="mx-4"
                  initial={{ x: 200 }}
                  animate={{ x: 0 }}
                  transition={{ delay: (index + 1) * 0.1, duration: 0.3 }}
                >
                  {item}
                </motion.div>
              </a>
            ))}
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
