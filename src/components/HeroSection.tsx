import React from 'react'
import Image from 'next/image';
import github from '@/assets/github.svg';
import linkedin from '@/assets/linkedin.svg'
import { techStack } from '@/constants'

const HeroSection = () => {
  return (
    <div className="relative isolate px-6 pt-14 lg:px-8">
    <div
      className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
      aria-hidden="true"
    >
      <div
        className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
        style={{
          clipPath:
            'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
        }}
      />
    </div>
    <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
      <div className="text-center">
        <div className='flex'>
        <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
          Front End React Developer
        </h1>
        <Image src={linkedin} alt={''} width={150} className=''/>
        </div>
        <p className="mt-6 text-lg leading-8 text-gray-600">
          Hi! I'm Bibek Gurung. A Passionate Front-End React Developer From Kathmandu, Nepal. 
        </p>
        <div className="mt-10 flex items-center justify-center gap-x-6">
          <a href="#"><Image src={github} alt={''} width={30} /></a>
          <a href="#"><Image src={linkedin} alt={''} width={30}  /></a>
        </div>

        <div className="mt-10 flex items-center justify-center gap-x-6">
          <h1 className='text-2xl font-bold'>Tech Stack |</h1> 
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
    <div
      className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
      aria-hidden="true"
    >
      <div
        className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
        style={{
          clipPath:
            'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
        }}
      />
    </div>
  </div>
  )
}

export default HeroSection