import HeroSection from "@/components/UI/Hero/page";
import Projects from "@/components/UI/Projects/page";
import Service from "@/components/UI/Service/page";
import Image from "next/image";

export default function Home() {
  return <div>
    <HeroSection />
    <Projects />
    <Service />
  </div>;
}
