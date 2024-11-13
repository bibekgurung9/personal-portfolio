import Image from "next/image";
import { ProjectCardProps } from "../../../interfaces/Interfaces";
import { ArrowUpRightIcon } from '@heroicons/react/16/solid';

export const ProjectCard = ({
  id,
  title,
  features,
  techStack,
  imgUrl,
  liveUrl,
  githubUrl,
}: ProjectCardProps) => {
  const techTags = techStack.split(",").map((tag) => tag.trim());

  return (
    <article 
      key={id} 
      className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center py-6 max-w-4xl mx-auto"
    >
      <div className="flex justify-center h-full">
        <Image 
          src={imgUrl} 
          alt={`${title} project image`} 
          width={400} 
          height={400} 
          loading="lazy" 
          className="rounded-lg object-cover h-full"
        />
      </div>

      <div className="flex flex-col justify-between h-full">
        <div>
          <h1 className="text-2xl font-semibold mb-6">{title}</h1>
          <ul className="list-disc pl-5 text-sm">
            {features.map((feature, index) => (
              <li key={index} className="mb-2">{feature}</li>
            ))}
          </ul>
        </div>
        <div className="flex flex-wrap gap-2 mt-2">
            {techTags.map((tag, index) => (
              <span 
                key={index} 
                className="px-3 py-1 text-sm text-white bg-gray-700 rounded-full cursor-default"
              >
                {tag}
              </span>
            ))}
          </div>
        <div className="flex gap-3 mt-4">
          {liveUrl && (
            <a 
              href={liveUrl} 
              target="_blank" 
              className="flex items-center gap-2 px-3 py-1.5 bg-blue-600 text-white rounded-md shadow-sm hover:bg-blue-700 transition duration-150 text-xs"
            >
              Live Project <ArrowUpRightIcon className="h-4 w-4" />
            </a>
          )}
          {githubUrl && (
            <a 
              href={githubUrl} 
              target="_blank" 
              className="flex items-center gap-2 px-3 py-1.5 bg-gray-800 text-white rounded-md shadow-sm hover:bg-gray-900 transition duration-150 text-xs"
            >
              GitHub <ArrowUpRightIcon className="h-4 w-4" />
            </a>
          )}
        </div>
      </div>
    </article>
  );
};
