import BlogSection from "@/components/UI/Blog/page";
import CertificatesSection from "@/components/UI/Certificates/page";
import HeroSection from "@/components/UI/Hero/page";
import Projects from "@/components/UI/Projects/page";
import Service from "@/components/UI/Service/page";
import { Metadata } from "next";


export const metadata: Metadata = {
  title: "Portfolio | Home",
  description: "This is Majharul tanvir's portfolio home page.",
};

export default function Home() {
  return (
    <div>
      <HeroSection />
      <Projects />
      <Service />
      <CertificatesSection />
      <BlogSection />
    </div>
  );
}
