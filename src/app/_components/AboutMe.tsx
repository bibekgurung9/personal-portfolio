import about from '@/assets/about.png'
import Image from 'next/image'

export default function AboutMe() {
  return (
    <div className="min-h-screen flex items-center overflow-hidden px-6 py-24 sm:py-16 lg:overflow-visible lg:px-0" id="about-me">
      <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-start">
        <div className="lg:col-span-2 lg:col-start-1 lg:row-start-1 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
          <div>
            <h1 className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl text-center">About Me</h1>
            <p className="mt-6 text-lg leading-8 text-center lg:text-left">
              Hi! I&apos;m Bibek, a Full Stack Web Developer with a passion for building scalable and efficient web applications. With experience in both **front-end** and **back-end** development, I thrive on solving complex problems and delivering user-centered solutions.
            </p>
            <ul className="hidden lg:block mt-6 text-lg leading-8 list-disc pl-4">
              <li>Skilled in building full-stack applications using the <strong>MERN</strong> stack</li>
              <li>Proficient in developing APIs and backend solutions with <strong>Node.js</strong> and <strong>Express</strong></li>
              <li>Experience providing tailored web solutions as a freelance developer</li>
              <li>Exploring the world of <strong>Machine Learning</strong> and <strong>AI</strong></li>
            </ul>

          </div>
        </div>
        <div className="-ml-12 -mt-12 p-12 lg:sticky lg:top-4 lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:overflow-hidden">
          <Image
            className="w-[52rem] max-w-none rounded-xl sm:w-[57rem]"
            src={about}
            alt=""
          />
        </div>
      </div>
    </div>
  )
}
