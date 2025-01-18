import About from "@/components/about";
import Landing from "@/components/landing";
import Image from "next/image";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import AboutNew from "@/components/AboutNew";
import Tracks from "@/components/Tracks";
import FaQ from "@/components/FaQ";

import { useEffect } from "react";

export default function Home() {
  return (
    <div className="absolute bg-neutral-500 min-h-screen z-[-50]">
      <div
        className="mx-4 md:mx-md lg:mx-lg 2xl:mx-2xl text-primaryText flex flex-col"
        id="home"
      >
        {/*
      <Landing />
      <About />
      */}
        <Navbar />
        <Hero />
        <AboutNew />
        <Tracks />
        <FaQ />
      </div>
    </div>
  );
}
