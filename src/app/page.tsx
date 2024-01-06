import BlogSection from "@/components/UI/Blog/page";
import CertificatesSection from "@/components/UI/Certificates/page";
import HeroSection from "@/components/UI/Hero/page";
import NewsLetterSection from "@/components/UI/NewsLetter/newsLetter";
import ProjectComponent from "@/components/UI/Projects/ProjectComponent";
import Projects from "@/components/UI/Projects/page";
import Service from "@/components/UI/Service/page";
import SkillsSection from "@/components/UI/Skills/skills";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Portfolio | Home",
  description: "This is Majharul tanvir's portfolio home page.",
};

export default function Home() {
  return (
    <div>
      <HeroSection />
      <SkillsSection />
      <ProjectComponent />
      {/* <Projects /> */}
      <Service />
      <CertificatesSection />
      <BlogSection />
      <NewsLetterSection />
    </div>
  );
}
