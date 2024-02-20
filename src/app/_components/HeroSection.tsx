import React from 'react'
import Image from 'next/image';
import { techStack } from '@/constants'
import profile from '@/assets/profile.jpg'
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa6';

const HeroSection = () => {
  return (
    <div className="relative isolate px-6 pt-14 border-b-2 border-slate-200">
    <div className="mx-auto max-w-2xl py-16 sm:py-24 lg:py-32">
      <div className="text-center">
        <div className='flex justify-center items-center gap-x-2'>
        <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
          Front End React Developer
        </h1>
        <Image src={profile} alt={''} width={250} className='border rounded'/>
        </div>
        <p className="mt-6 text-lg leading-8 text-gray-600">
          Hi! I&apos;m Bibek Gurung. A Passionate Front-End React Developer Based In Kathmandu, Nepal. 
        </p>
        <div className="mt-10 flex items-center justify-center gap-x-6">
          <a href="https://github.com/bibekgurung9" target='blank' className='text-4xl hover:shadow-xl text-black hover:text-black/70'><FaGithub /></a>
          <a href="https://www.linkedin.com/in/bibekgurung9/" target='blank' className='text-4xl hover:shadow-xl text-black hover:text-black/70'><FaLinkedin /></a>
          <a href="https://twitter.com/_BibekGurung" target='blank' className='text-4xl hover:shadow-xl text-black hover:text-black/70'><FaTwitter /></a>
        </div>

        <div className="mt-10 flex items-center justify-center gap-x-6">
          <h1 className='text-2xl font-bold'>Tech Stack </h1> 
          <div className='flex gap-x-5'>
            {techStack.map((image, index) => (
              <div key={index}>
                <Image src={image.src} alt={image.alt} width={40} height={40} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}

export default HeroSection