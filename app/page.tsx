import Navbar from "./components/navbar";
import HeroSection from "./components/HeroSection";
import PhilosophySection from "./components/PhilosophySection";
import AboutSection from "./components/AboutSection";
import SpecializationSection from "./components/SpecializationSection";
import SkillsSection from "./components/SkillsSection";
import ArtifactsSection from "./components/ArtifactsSection";
import LogsSection from "./components/LogsSection";
import CertificationsSection from "./components/CertificationsSection";
import FooterSection from "./components/FooterSection";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#FAFAFA] text-[#1C1C1E] selection:bg-neutral-200">
      <Navbar />
      <main className="max-w-full overflow-hidden">
        <HeroSection />
        <PhilosophySection />
        <AboutSection />
        <SpecializationSection />
        <SkillsSection />
        <ArtifactsSection />
        <LogsSection />
        <CertificationsSection />
      </main>
      <FooterSection />
    </div>
  );
}
