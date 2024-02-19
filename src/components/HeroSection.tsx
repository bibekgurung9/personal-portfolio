import React from 'react'
import Image from 'next/image';
import github from '@/assets/github.svg';
import linkedin from '@/assets/linkedin.svg'
import { techStack } from '@/constants'
import profile from '@/assets/profile.jpg'

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
          Hi! I'm Bibek Gurung. A Passionate Front-End React Developer Based In Kathmandu, Nepal. 
        </p>
        <div className="mt-10 flex items-center justify-center gap-x-6">
          <a href="#"><Image src={github} alt={''} width={30} /></a>
          <a href="#"><Image src={linkedin} alt={''} width={30}  /></a>
        </div>

        <div className="mt-10 flex items-center justify-center gap-x-6">
          <h1 className='text-2xl font-bold'>Tech Stack </h1> 
          <div className='flex gap-x-5'>
            {techStack.map((image, index) => (
              <div key={index}>
                <Image src={image.src} alt={image.alt} width={40} />
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