'use client';
import AboutMe from '@/components/AboutMe';
import ContactMe from '@/components/ContactMe';
import Footer from '@/components/Footer';
import HeroSection from '@/components/HeroSection';
import NavBar from '@/components/Navbar';
import Portfolio from '@/components/Portfolio';

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
