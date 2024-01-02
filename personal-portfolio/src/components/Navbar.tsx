import React from 'react'

const Navbar = () => {
  return (
    <header className='py-3 fixed bg-slate-200 w-full'>
        <nav className='flex flex-row'>
            <a href="/" className='m-2 text-xl font-bold'>Bibek Gurung</a>

            <div className='flex py-3'>
                <ul className='flex gap-4'>
                    <li>Home</li>
                    <li>Portfolio</li>
                    <li>About Me</li>
                    <li>Contact Me</li>
                </ul>
            </div>
        </nav>
    </header>
  )
}

export default Navbar