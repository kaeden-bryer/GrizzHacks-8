"use client";

import React, { useState, useEffect } from "react";

const SlideAnimation = () => {
  const [scrolled, setScrolled] = useState(false);

  //scroll listener
  useEffect(() => {
    const handleScroll = () => {
      const element = document.getElementById("duck-image");
      const rect = element?.getBoundingClientRect();
      const elementTop = rect?.top ?? 0;

      //set scrolled to true if user scrolls down 200px
      console.log("ScrollY:", window.scrollY);
      if (elementTop < window.innerHeight && elementTop > 0) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="relative h-[5000px]">
      <h1 className="text-center mt-4">Scroll to see the duck slide down</h1>
      <img
        id="duck-image"
        src="/images/logo.svg"
        alt="Duck"
        className={`absolute top-[3000px] left-1/2 transform -translate-x-1/2 transition-transform duration-700 ease-in-out ${
          scrolled ? "translate-y-[300px]" : "translate-y-0"
        }`}
      />
    </div>
  );
};

export default SlideAnimation;
