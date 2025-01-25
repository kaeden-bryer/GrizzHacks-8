import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import AboutNew from "@/components/AboutNew";
import Tracks from "@/components/Tracks";
import Sponsor from "@/components/Sponsor";
import FaQ from "@/components/FaQ";
import Footer from "@/components/Footer";
import FlexPic from "@/components/FlexPic";

export default function Home() {
  return (
    <div className="absolute bg-bgblue min-h-screen z-[-50]">
      <div className="text-blackColor flex flex-col overflow-hidden" id="home">
        {/*bg-gradient-to-b from-bgblue to-bgbrown
      <Landing />
      <About />
      */}
        <div className="mx-4 md:mx-md lg:mx-lg 2xl:mx-2xl">
          <Navbar />
        </div>
        <div className="flex flex-col gap-24 ">
          <Hero />
          <div className="mx-4 md:mx-md lg:mx-lg 2xl:mx-2xl">
            <AboutNew />
          </div>
          <div className="mx-4 md:mx-md lg:mx-lg 2xl:mx-2xl">
            <Tracks />
          </div>
          <div className="mx-4 md:mx-md lg:mx-lg 2xl:mx-2xl">
            <Sponsor />
          </div>
          <div className="mx-4 md:mx-md lg:mx-lg 2xl:mx-2xl">
            <FaQ />
          </div>
          <div className="mx-4 md:mx-md lg:mx-lg 2xl:mx-2xl">
            <FlexPic />
          </div>
        </div>
      </div>
      <Footer />
      {/*<About />*/}
    </div>
  );
}
