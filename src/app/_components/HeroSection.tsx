import React from 'react';
import Typewriter from 'typewriter-effect';
import { ArrowDownCircleIcon } from '@heroicons/react/16/solid';
import Image from 'next/image';
import profileImage from '@/assets/profile.jpg'; 

export default function HeroSection() {
  const handleScrollToAboutMe = () => {
    const aboutMeSection = document.getElementById('about-me');
    if (aboutMeSection) {
      aboutMeSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="w-full min-h-screen py-24 sm:py-36 lg:py-32 px-6 flex flex-col items-center font-semibold gap-y-8 sm:gap-y-12 mb-8 text-xl sm:text-2xl md:text-3xl text-center justify-center">
      <div className="flex flex-col lg:flex-row items-center gap-2 max-w-6xl mx-auto">
        <div className="flex-1 text-center lg:text-left">
          <h2 className="text-4xl sm:text-5xl md:text-6xl text-white font-bold mb-4">
            Hello, I&apos;m Bibek Gurung
          </h2>
          <span className="text-lg sm:text-xl md:text-2xl text-gray-300 mb-4">
            Full Stack Web Developer | Next.js, Nest.js
          </span>
          <div className="min-h-[50px] mt-4 text-lg sm:text-xl md:text-2xl text-gray-200">
            <Typewriter
              onInit={(typewriter) => {
                typewriter
                  .deleteAll()
                  .typeString("Based in Kathmandu, Nepal.")
                  .pauseFor(1000)
                  .deleteAll()
                  .typeString("Turning ideas into real products.")
                  .pauseFor(1000)
                  .deleteAll()
                  .typeString("Let's build something amazing together!")
                  .start();
              }}
            />
          </div>
          <a
            href="https://your-resume-link.com"
            target="_blank"
            className="hidden md:block w-4/5 sm:w-3/5 px-6 py-3 bg-blue-600 text-white rounded-lg text-base sm:text-lg hover:bg-blue-700 transition-colors duration-300"
          >
            Let&apos;s Work Together
          </a>
        </div>

        <div className="flex-1 flex justify-center lg:justify-end">
          <Image
            src={profileImage}
            alt="Profile Image"
            className="rounded-lg object-cover shadow-lg"
            width={300}
            height={300}
          />
        </div>
      </div>
      <a
        href="https://your-resume-link.com"
        target="_blank"
        className="md:hidden w-4/5 sm:w-3/5 px-6 py-3 bg-blue-600 text-white rounded-lg text-base sm:text-lg hover:bg-blue-700 transition-colors duration-300"
      >
        Let&apos;s Work Together
      </a>
      <ArrowDownCircleIcon
        aria-hidden="true"
        onClick={handleScrollToAboutMe}
        className="h-12 w-12 md:h-14 md:w-14 text-white cursor-pointer transition-all duration-300 animate-bounce"
      />
    </div>
  );
}
