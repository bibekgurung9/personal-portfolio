import React from 'react';
import { techAndTools } from '@/constants/index';

export default function TechToolsDisplay(){
    return(
      <div className='px-6'>
      <div className="flex flex-col gap-y-4 mt-8">
        <h2 className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl text-center">Experience With</h2>
        <div className="w-full flex flex-wrap items-center justify-center gap-4  pt-10">
          {techAndTools.map((icon, index) => (
            <div
              key={index}
              className="group relative flex flex-col items-center justify-center p-2 rounded-md hover:opacity-90 transition-all duration-300"
            >
              <div className="flex items-center justify-center">
                <icon.icon
                  aria-hidden="true"
                  className="h-10 w-10 md:h-12 md:w-12 text-white group-hover:text-gray-400 transition-colors duration-300"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
      </div>

    )
}
