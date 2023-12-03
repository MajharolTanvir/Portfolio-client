import CertificatesSection from "@/components/UI/Certificates/page";
import HeroSection from "@/components/UI/Hero/page";
import Projects from "@/components/UI/Projects/page";
import Service from "@/components/UI/Service/page";

export default function Home() {
  return (
    <div>
      <HeroSection />
      <Projects />
      <Service />
      <CertificatesSection />
    </div>
  );
}
