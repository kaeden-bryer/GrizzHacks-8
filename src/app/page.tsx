import About from "@/components/about";
import Landing from "@/components/landing";
import Image from "next/image";
import Events from "@/components/events";

export default function Home() {
  return (
    <div>
      <Landing />
      <About />
      <Events/>
    </div>
  );
}
