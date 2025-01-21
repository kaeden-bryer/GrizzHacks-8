import About from "@/components/about";
import Landing from "@/components/landing";
import Image from "next/image";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import AboutNew from "@/components/AboutNew";
import Tracks from "@/components/Tracks";
import FaQ from "@/components/FaQ";
import Footer from "@/components/Footer";
import Team from "@/components/Team";

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
        <div className="flex flex-col gap-10">
          <AboutNew />
          <Tracks />
          <FaQ />
          <Team />
        </div>
      </div>
      <Footer />
    </div>
  );
}
