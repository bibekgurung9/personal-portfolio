import Image from "next/image";
import { ProjectCardProps } from "../../../interfaces/Interfaces";

export const ProjectCard = ({
  id,
  title,
  techStack,
  imgUrl,
  href,
}: ProjectCardProps) => {
  return (
    <article className="flex max-w-xl flex-col items-center justify-center" key={id}>
      <h1 className="text-xl font-bold leading-10 text-gray-900 group-hover:text-gray-600 cursor-default mb-2">{title}</h1>
      <a className="h-auto w-auto" href={href} target="blank">
        <Image src={imgUrl} alt={""} width={400} height={400} loading='lazy' className="border-2 border-slate-300 border-rounded rounded-xl hover:scale-105 transition-transform hover:shadow-2xl" />
      </a>
      <p className="mt-5 line-clamp-3 text-s leading-6 text-gray-600 text-center"><span className="font-bold">Tech Stack: </span>{techStack}</p>

    </article>

  )
}