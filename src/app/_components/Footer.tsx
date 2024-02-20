import React from 'react'
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa6'

export default function Example() {
  return (
      <footer className="bg-white">
          <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
              <div className="md:flex md:justify-between">
                <div className="mb-6 md:mb-0">
                  <span className="self-center text-2xl font-semibold whitespace-nowrap">Bibek Gurung</span>
                </div>
                <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
                    <div>
                        <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase">Projects</h2>
                        <ul className="text-gray-500 font-medium">
                        <li className="mb-4">
                                <a href="https://github.com/bibekgurung9/nextjs-freelance-website" className="hover:underline" target='blank'>Freelancer App</a>
                            </li>
                            <li className="mb-4">
                                <a href="https://glittering-parfait-71946c.netlify.app/" className="hover:underline" target='blank'>Realtime Chatroom</a>
                            </li>
                            <li className="mb-4">
                                <a href="https://fitness-exercise-app-eight.vercel.app/" className="hover:underline" target='blank'>Fitness Portal</a>
                            </li>
                            <li className="mb-4">
                                <a href="https://github.com/bibekgurung9/php-ecommerce-app" className="hover:underline" target='blank'>PHP Ecommerce</a>
                            </li>
                        </ul>
                    </div>

                    <div>
                        <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase">Contact me</h2>
                        <ul className="text-gray-500 font-medium">
                            <li className="mb-4">
                                <a href="https://github.com/bibekgurung9" className="hover:underline " target='blank'>Github</a>
                            </li>
                            <li className="mb-4">
                                <a href="https://www.linkedin.com/in/bibekgurung9/" className="hover:underline" target='blank'>Linkedin</a>
                            </li>
                            <li className="mb-4">
                                <a href="https://twitter.com/_BibekGurung" className="hover:underline" target='blank'>Twitter</a>
                            </li>
                        </ul>
                    </div>

                    <div>
                        <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase">CV</h2>
                        <ul className="text-gray-500 font-medium">
                            <li>
                                <a href="https://docs.google.com/document/d/1uXvjcpXFdvfI7gj74FqEjNEHSslshgeuLofac7Bmr2c/edit?usp=sharing" className="hover:underline" target='blank'>Download Here</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-300 lg:my-8" />
            <div className="sm:flex sm:items-center sm:justify-between">
                <span className="text-sm text-gray-500 sm:text-center">© 2024 <a href="https://flowbite.com/" className="hover:underline">Bibek Gurung</a> . All Rights Reserved.
                </span>
                <div className="flex mt-4 sm:justify-center sm:mt-0 gap-x-4">
                  <a href="https://github.com/bibekgurung9" target='blank' className='text-black hover:text-black/70 text-2xl'><FaGithub/></a>
                  <a href="https://www.linkedin.com/in/bibekgurung9/" target='blank' className='text-black hover:text-black/70 text-2xl'><FaLinkedin/></a>
                  <a href="https://twitter.com/_BibekGurung" target='blank' className='text-black hover:text-black/70 text-2xl'><FaTwitter /></a>
                </div>
            </div>
          </div>
      </footer> 
  )
}
