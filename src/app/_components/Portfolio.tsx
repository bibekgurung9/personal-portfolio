import React from 'react';
import { projects } from '@/constants';
import { ProjectCard } from '@/app/_components/ProjectCard';

export default function Portfolio(){
  return (
    <div className="relative isolate overflow-hidden py-16 md:py-24" id="portfolio">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Portfolio</h2>
        </div>

        <div className="mx-auto flex flex-col gap-y-12 pt-10 lg:max-w-none">
          {projects.map((project, index) => (
            <div
              key={index}
              className={`flex flex-col lg:flex-row ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''
                } items-center lg:gap-x-8`}
            >
              <ProjectCard
                id={index}
                title={project.title}
                techStack={project.techStack}
                imgUrl={project.src}
                liveUrl={project.live}
                githubUrl={project.github}
                features={project.features}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
