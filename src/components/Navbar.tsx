"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";

const Navbar: React.FC = () => {
  const [burgerClicked, setBurgerClicked] = useState(false);

  return (
    <>
      {/* MLH banner */}
      <div className="w-[2.5rem] md:w-[3.5rem] lg:w-[4.5rem] absolute top-[5rem] sm:top-[5.5rem] md:top-[6.5rem] lg:top-0 2xl:right-10 xl:right-5 lg:right-2 md:right-[3rem] right-[1rem] z-20">
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
      <nav className="top-10 z-10 w-full h-[4rem] md:h-[5rem] text-blackColor bg-navWhite rounded-lg flex justify-between items-center md:px-10 sm:px-5 py-3 mb-4 sm:mt-6 mt-4 px-4">
        <a href="#team">
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
          <a
            href="#schedule"
            className="font-semibold hover:text-primary transition-all duration-100"
          >
            Schedule
          </a>
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
            Sponsors
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
            href="https://form.typeform.com/to/ozOq06mS"
            target="_blank"
            className="font-semibold hover:bg-primaryHover hover:text-white transition duration-300 ease-in-out w-fit relative ring-2 ring-primaryHover rounded-2xl py-2 px-4"
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
            className={`md:w-10 w-8 bg-primary h-1 origin-center transition-all duration-300 ${
              burgerClicked
                ? "rotate-45 translate-y-0.5"
                : "rotate-0 -translate-y-1"
            }`}
          />
          <div
            className={`md:w-10 w-8 bg-primary h-1 origin-center transition-all duration-300 ${
              burgerClicked
                ? "-rotate-45 -translate-y-0.5"
                : "rotate-0 translate-y-1"
            }`}
          />
        </button>
      </nav>

      {burgerClicked && (
        <div className="absolute mx-4 inset-x-0 top-20 md:top-24 rounded-lg flex flex-col lg:hidden text-xl navActive z-50 md:mx-12">
          {["About", "Schedule", "Tracks", "Sponsors", "FAQs"].map(
            (item, index) => (
              <a
                key={item}
                href={`/#${item.toLowerCase()}`}
                className="text-primary h-14 w-full flex items-center last:rounded-b-lg bg-navWhite hover:bg-yellow justify-center border-b-2 border-primary hover:border-primaryHover text-lg md:text-xl font-semibold"
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
            )
          )}
        </div>
      )}
    </>
  );
};

export default Navbar;
