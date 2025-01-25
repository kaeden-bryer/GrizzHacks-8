//import About from "@/components/about";
import Landing from "@/components/landing";
import Image from "next/image";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import AboutNew from "@/components/AboutNew";
import Tracks from "@/components/Tracks";
import Sponsor from "@/components/Sponsor";
import FaQ from "@/components/FaQ";
import Footer from "@/components/Footer";
import Team from "@/components/Team";
import FlexPic from "@/components/FlexPic";

import { useEffect } from "react";

export default function Home() {
  return (
    <div className="absolute bg-bgblue min-h-screen z-[-50]">
      <div
        className="mx-4 md:mx-md lg:mx-lg 2xl:mx-2xl text-blackColor flex flex-col"
        id="home"
      >
        {/*bg-gradient-to-b from-bgblue to-bgbrown
      <Landing />
      <About />
      */}
        <Navbar />
        <Hero />
        <div className="flex flex-col gap-16 -mt-20 md:-mt-8 lg:mt-0">
          <AboutNew />
          <Tracks />
          <Sponsor />
          <FaQ />
          <FlexPic />
        </div>
      </div>
      <Footer />
      {/*<About />*/}
    </div>
  );
}
