import { useEffect, useRef, useState } from "react";
import { Navbar } from "./organisms/Navbar";
import { HeroIntro } from "./organisms/HeroIntro";
import { ExperienceSection } from "./organisms/ExperienceSection";
import { SkillsSection } from "./organisms/SkillsSection";
import { ProjectsSection } from "./organisms/ProjectsSection";
import { GitHubSection } from "./organisms/GitHubSection";
import { Footer } from "./organisms/Footer";

export function Hero() {
  const [visible, setVisible] = useState(false);
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div
      ref={heroRef}
      className="min-h-screen bg-[#f5f5f0] dark:bg-[#0d0d0d] text-[#1a1a1a] dark:text-[#e8e8e0] font-sans transition-colors duration-300"
    >
      <Navbar />
      <main
        id="home"
        className={`max-w-[900px] mx-auto pt-8 sm:pt-12 px-4 sm:px-8 md:px-10 pb-16 transition-all duration-[600ms] ease-in-out ${
          visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
        }`}
      >
        <HeroIntro />
        <ExperienceSection />
        <SkillsSection />
        <ProjectsSection />
        <GitHubSection />
      </main>
      <Footer />
    </div>
  );
}
