import React from 'react'
import Image from 'next/image';
import profile from '@/assets/profile.jpg'
import { FaGithub, FaLinkedin } from 'react-icons/fa6';
import { MdEmail } from 'react-icons/md';
import { techStack } from '../../../constants';

const HeroSection = () => {
  const openEmail = () => {
    window.open('https://mail.google.com/mail/?view=cm&fs=1&to=iambibekgrg@gmail.com', '_blank')
  }

  return (
    <div className="relative isolate px-6 pt-14 border-b-2 border-slate-200">
      <div className="mx-auto max-w-2xl py-16 sm:py-24 lg:py-32">
        <div className="text-center">
          <div className='flex justify-center items-center gap-x-2'>
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
              Full Stack Web Developer
            </h1>
            <Image src={profile} alt={'Bibek Gurung'} width={250} className='border rounded' loading='lazy' height={250} />
          </div>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Welcome! I&apos;m Bibek Gurung.<br /> A Full Stack Developer Based In Kathmandu, Nepal.
            <br />Connect with me via social media or email below.
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <a href="https://github.com/bibekgurung9" target='blank' className='text-4xl hover:shadow-xl text-black hover:text-black/80 hover:scale-125'>
              <FaGithub />
            </a>
            <a href="https://www.linkedin.com/in/bibekgurung9/" target='blank' className='text-4xl hover:shadow-xl text-black hover:text-black/80 hover:scale-125'>
              <FaLinkedin />
            </a>
            <button className='text-4xl hover:shadow-xl text-black hover:text-black/80 hover:scale-125' onClick={openEmail}><MdEmail /></button>
          </div>

          <div className="mt-10 flex flex-col items-center justify-center gap-x-6">
            <h1 className='text-2xl font-bold mb-4'>Tech Stack </h1>
            <div className='w-full gap-x-5 gap-y-5 grid grid-cols-6 md:grid-cols-10'>
              {techStack.map((image, index) => (
                <div key={index} className='flex items-center hover:cursor-pointer hover:shadow-lg'>
                  <Image src={image.src} alt={image.alt} width={50} height={50} loading='lazy' />
                </div>
              ))}
            </div>
          </div>
          <div
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
              zIndex: -1,
              clipPath:
                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
            }}
            className="bg-gradient-to-tr from-[#8B5A2B] to-[#FFFFE0] opacity-30"
          />
        </div>
      </div>
    </div>
  )
}

export default HeroSection