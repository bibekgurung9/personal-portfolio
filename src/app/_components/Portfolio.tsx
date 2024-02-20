import React from 'react'
import { posts } from '@/constants'
import Image from 'next/image'
import { FaGithub, FaLink, FaClock } from 'react-icons/fa6'

const Portfolio = () => {
  return (
    <div className="bg-white py-24 sm:py-16" id='portfolio'>
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <h2 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl text-center">Portfolio</h2>
          <p className="mt-2 text-lg leading-8 text-gray-600 text-center">
            Check My Projects & Works
          </p>
          
        <div className="mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 border-t border-gray-200 pt-10 sm:mt-16 sm:pt-16 lg:mx-0 lg:max-w-none md:grid-cols-2 lg:grid-cols-3">
          {posts.map((post) => (
            <article key={post.id} className="flex max-w-xl flex-col items-center justify-center ">
              <div className='h-auto w-auto'>
                <Image alt={'Project Picture'} src={post.src} width={300} height={300} loading='lazy' />
              </div>
              <div className="group relative cursor-default">
                <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600 cursor-default">
                  {post.title}
                </h3>
                <p className="mt-5 line-clamp-3 text-sm leading-6 text-gray-600">{post.description}</p>

                <div className='flex gap-x-4 justify-center items-center mt-2'>
                  <p className='flex justify-center items-center gap-x-2 font-bold bg-slate-300/60 p-2 rounded-full border border-slate-400 hover:shadow-2xl'><FaClock />{post.status}</p>
                  <a href={post.github} className='flex justify-center items-center gap-x-2 font-bold bg-slate-300/60 p-2 rounded-full border border-slate-400 hover:shadow-2xl' target='blank'><FaGithub />Github</a>
                  <a href={post.href} className='flex justify-center items-center gap-x-2 font-bold bg-slate-300/60 p-2 rounded-full border border-slate-400 hover:shadow-2xl' target='blank'><FaLink />Link</a>
                </div>

              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Portfolio