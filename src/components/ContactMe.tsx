import { socialLinks }  from '@/constants'
import Image from 'next/image'

export default function Example() {
  return (
    <div className="bg-white py-16 sm:py-16 px-32">
    <ul role="list" className="divide-y divide-gray-100">
      {socialLinks.map((socials) => {
        return (
          <li key={socials.id} className="flex justify-between gap-x-6 py-5">
            <a className="flex min-w-0 gap-x-4" href={socials.links} target='blank'>
              <Image className="flex-nonebg-gray-50" alt="github" width={50} src={socials.src} />
              <div className="min-w-0 flex-auto">
                <p className="text-2xl font-bold leading-6 text-gray-900">{socials.name}</p>
                <p className="mt-1 truncate text-xl leading-5 text-gray-500">{socials.p}</p>
              </div>
            </a>
          </li>
        )
      })}
    </ul>
    </div>
  )
}
