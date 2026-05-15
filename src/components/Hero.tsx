import { useEffect, useRef, useState } from "react";
import { ThemeProvider } from "../context/ThemeContext";
import { Navbar } from "./organisms/Navbar";
import { HeroIntro } from "./organisms/HeroIntro";
import { ExperienceSection } from "./organisms/ExperienceSection";

function HeroContent() {
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
        className={`max-w-[900px] mx-auto pt-12 px-10 pb-16 transition-all duration-[600ms] ease-in-out ${
          visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
        }`}
      >
        <HeroIntro />
        <ExperienceSection />
      </main>
    </div>
  );
}

export function Hero() {
  return (
    <ThemeProvider>
      <HeroContent />
    </ThemeProvider>
  );
}
