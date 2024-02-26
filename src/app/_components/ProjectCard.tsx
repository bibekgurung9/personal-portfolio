import Link from "next/link"
import Image from "next/image";
import { FaGithub, FaLink, FaClock } from 'react-icons/fa6'

interface ProjectCardProps{
  id: number;
  title: string;
  techStack: string;
  imgUrl: any;
  href: string;
  github: string;
}

export const ProjectCard = ({
  id,
  title,
  techStack,
  imgUrl,
  href,
  github,
}: ProjectCardProps) => {
  return(
      <article className="flex max-w-xl flex-col items-center justify-center" key={id}>
          <h1 className="text-xl font-bold leading-10 text-gray-900 group-hover:text-gray-600 cursor-default mb-2">{title}</h1>
          <Link className="h-auto w-auto" href={href}>
            <Image src={imgUrl} alt={""} width={400} height={400} loading='lazy' className="border-2 border-slate-300 border-rounded rounded-xl hover:scale-105 transition-transform hover:shadow-2xl" />
          </Link>
          <div className='flex gap-x-4 justify-center items-center mt-4'>
              <a href={github} className='flex justify-center items-center gap-x-2 font-bold bg-black/70 hover:bg-black/50 text-white p-2 rounded-full border border-slate-400 hover:scale-105 transition-transform hover:shadow-2xl' target='blank'><FaGithub />Github Link</a>
              <a href={href} className='flex justify-center items-center gap-x-2 font-bold bg-black/70 hover:bg-black/50 text-white p-2 rounded-full border border-slate-400 hover:scale-105 transition-transform hover:shadow-2xl' target='blank'><FaLink />Live Project</a>
         </div>
        <p className="mt-5 line-clamp-3 text-s leading-6 text-gray-600 text-center"><span className="font-bold">Tech Stack: </span>{techStack}</p>          

      </article>

  )
}