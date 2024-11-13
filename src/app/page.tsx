"use client";
import AboutMe from "@/app/_components/AboutMe";
import HeroSection from "@/app/_components/HeroSection";
import Portfolio from "@/app/_components/Portfolio";
import Tech from "@/app/_components/Tech";

export default function HomePage() {
  return (
    <main>
      <HeroSection />
      <AboutMe />
      <Tech />
      <Portfolio />
    </main>
  )
}
