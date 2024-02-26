import React from 'react'
import { projects } from '@/constants'

import { ProjectCard } from './ProjectCard'

const Portfolio = () => {
  return (
    <div className="bg-white py-24 sm:py-16" id='portfolio'>
      <div className="mx-auto max-w-7xl px-6">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl text-center">Portfolio</h2>
          <p className="mt-2 text-lg leading-8 text-gray-600 text-center">
            Check My Projects & Works
          </p>
          
        <div className="mx-auto mt-10 grid max-w-2xl xs:grid-cols-1 gap-x-8 gap-y-16 border-t border-gray-200 pt-10 sm:mt-16 sm:pt-16 lg:mx-0 lg:max-w-none  sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <ProjectCard key={index} id={project.id} title={project.title} techStack={project.techStack} imgUrl={project.src} href={project.href} github={project.github} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default Portfolio