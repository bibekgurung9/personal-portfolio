import React from 'react'
import { posts } from '@/constants'
import Image from 'next/image'

const Portfolio = () => {
  return (
    <div className="bg-white py-24 sm:py-16" id='portfolio'>
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <h2 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl text-center">Portfolio</h2>
          <p className="mt-2 text-lg leading-8 text-gray-600 text-center">
            Check My Projects & Works
          </p>
          
        <div className="mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 border-t border-gray-200 pt-10 sm:mt-16 sm:pt-16 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {posts.map((post) => (
            <article key={post.id} className="flex max-w-xl flex-col items-start justify-between">
              <Image src={''} alt={''} />  
              <div className="group relative">
                <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
                  <a href={post.href}>
                    <span className="absolute inset-0" />
                    {post.title}
                  </a>
                </h3>
                <p className="mt-5 line-clamp-3 text-sm leading-6 text-gray-600">{post.description}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Portfolio