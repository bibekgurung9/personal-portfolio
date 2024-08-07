import about from '@/assets/about.png'
import Image from 'next/image'

export default function Example() {
  return (
    <div className="relative isolate overflow-hidden bg-white px-6 py-24 sm:py-16 lg:overflow-visible lg:px-0" id="about-me">
      <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-start lg:gap-y-10 border-b-2 border-slate-200">
        <div className="lg:col-span-2 lg:col-start-1 lg:row-start-1 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
          <div className="lg:pr-4">
            <div className="lg:max-w-lg">
              <h1 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl text-center">About Me</h1>
              <p className="mt-6 text-xl leading-8 text-gray-700">
                Greetings! 👋 I&apos;m Bibek,  a dedicated and results-driven full stack developer with a strong foundation in the MERN stack. I specialize in crafting high-quality, scalable web applications and have a proven track record of delivering innovative solutions. My diverse skill set and experience make me a versatile professional ready to tackle any challenge in the dynamic field of software development.
              </p>
            </div>
          </div>
        </div>
        <div className="-ml-12 -mt-12 p-12 lg:sticky lg:top-4 lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:overflow-hidden">
          <Image
            className="w-[52rem] max-w-none rounded-xl bg-gray-900 shadow-xl ring-1 ring-gray-400/10 sm:w-[57rem]"
            src={about}
            alt=""
          />
        </div>
      </div>
    </div>
  )
}
