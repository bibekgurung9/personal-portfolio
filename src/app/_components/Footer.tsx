import React from 'react'
import { FaGithub, FaLinkedin } from 'react-icons/fa6'
import { MdEmail } from 'react-icons/md'
import { projects } from '../../../constants'

export default function Example() {
    const openEmail = () => {
        window.open('https://mail.google.com/mail/?view=cm&fs=1&to=iambibekgrg@gmail.com', '_blank')
    }
    return (
        <footer className="bg-white border-t-2 border-slate-200 cursor-default">
            <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
                <div className="md:flex md:justify-between">
                    <div className="mb-6 md:mb-0">
                        <span className="self-center text-2xl font-semibold whitespace-nowrap">Bibek Gurung</span>
                    </div>
                    <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-2">
                        <div>
                            <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase">Projects</h2>
                            <ul className="text-gray-500 font-medium">
                                {projects.slice(0, 4).map((project, index) => (
                                    <li className="mb-4">
                                        <a href={project.href} className="hover:underline " target='blank'>{project.title}</a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
                <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-300 lg:my-8" />
                <div className="sm:flex sm:items-center sm:justify-between">
                    <span className="text-sm text-gray-500 sm:text-center">© 2024 <a href="/" className="hover:underline">Bibek Gurung</a> . All Rights Reserved.
                    </span>
                    <div className="flex mt-4 sm:justify-center sm:mt-0 gap-x-4 items-center">
                        <a href="https://github.com/bibekgurung9" target='blank' className='text-black hover:text-black/70 text-2xl'><FaGithub /></a>
                        <a href="https://www.linkedin.com/in/bibekgurung9/" target='blank' className='text-black hover:text-black/70 text-2xl'><FaLinkedin /></a>
                        <button className='text-3xl hover:shadow-xl text-black hover:text-black/70' onClick={openEmail}><MdEmail /></button>
                    </div>
                </div>
            </div>
        </footer>
    )
}
