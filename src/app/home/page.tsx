'use client';
import AboutMe from '@/components/AboutMe';
import ContactMe from '@/components/ContactMe';
import HeroSection from '@/components/HeroSection';
import NavBar from '@/components/NavBar';
import Portfolio from '@/components/Portfolio';

export default function HomePage() {

  return (
    <div className="bg-white">
      <NavBar />
      <HeroSection />
      <AboutMe />
      <Portfolio />
      <ContactMe />
    </div>
  )
}
