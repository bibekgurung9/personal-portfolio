'use client';
import HeroSection from '@/components/HeroSection';
import NavBar from '@/components/NavBar';
import Portfolio from '@/components/Portfolio';


export default function HomePage() {

  return (
    <div className="bg-white">
      <NavBar />
      <HeroSection />
      <Portfolio />
    </div>
  )
}
