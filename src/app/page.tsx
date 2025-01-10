import About from "@/components/about";
import Landing from "@/components/landing";
import Image from "next/image";
import Navbar2 from "@/components/navbar2";
import '../styles/globals.css';
export default function Home() {
  return (
    <div>
      <Navbar2 />
      <Landing />
      <About />
    </div>
  );
}
