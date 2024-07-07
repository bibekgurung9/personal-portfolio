'use client';
import AboutMe from '@/app/_components/AboutMe';
import Footer from '@/app/_components/Footer';
import HeroSection from '@/app/_components/HeroSection';
import NavBar from '@/app/_components/Navbar';
import Portfolio from '@/app/_components/Portfolio';

export default function HomePage() {
  return (
    <div className="bg-white">
      <NavBar />
      <HeroSection />
      <AboutMe />
      <Portfolio />
      <Footer />
    </div>
  )
}
