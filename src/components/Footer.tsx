import Image from 'next/image'
import { footerLinks, socialLinks, posts, navigation } from '@/constants'

export default function Example() {
  //send email function
  const sendEmail = ()  => {
    console.log('sent email');
    
  }

  return (
    <div className="justify-center bg-white py-4 pt-16 sm:pt-16 sm:py-4 px-8">
      <div className='flex flex-row justify-between'>
        <div id='col-1'>  
          <a href="#" className='font-bold text-2xl'>Bibek Gurung</a>
          <div className='flex flex-row gap-3'>
          {footerLinks.map((footer, index) => (
          <div className="mt-2 items-center justify-center">
            <a href={footer.links} key={index}><Image src={footer.src} alt={''} width={35}/></a>
          </div>
        ))}
        </div>
        </div>

        <div id='col-2'>
          <ul className=''>
          <li className='font-bold'>Quick Links</li>
          {navigation.map((nav, index) => {
              return (
                <li key={index} className="flex p-1 justify-between mt-1 hover:bg-purple-200 hover:rounded">
                  <a className="flex gap-2" href={nav.href} target='blank'>
                      <p className="truncate">{nav.name}</p>
                  </a>
                </li>
              )
            })}
          </ul>
        </div>

        <div id='col-3'>
        <ul className=''>
            <li className='font-bold'>Other Projects</li>
            {posts.map((projects) => {
              return (
                <li key={projects.id} className="flex p-1 justify-between mt-1 hover:bg-purple-200 hover:rounded">
                  <a className="flex gap-2" href={projects.href} target='blank'>
                      <p className="truncate">{projects.name}</p>
                  </a>
                </li>
              )
            })}
          </ul>
        </div>

        <div id='col-4'>
        <ul className=''>
            <li className='font-bold'>Contact Me</li>
            {socialLinks.map((socials) => {
              return (
                <li key={socials.id} className="flex p-1 justify-between mt-1 hover:bg-purple-200 hover:rounded">
                  <a className="flex gap-2" href={socials.links} target='blank'>
                    <Image className="flex-nonebg-gray-50" alt="github" width={25} src={socials.src} />
                      <p className="truncate">{socials.name}</p>
                  </a>
                </li>
              )
            })}
            <button className='p-2 bg-purple-300 mt-2 rounded-full' onClick={sendEmail}>Send Email</button>
          </ul>
        </div>
      </div>
      <div className='mt-10 flex justify-center'>
      <span className='text-xl text-center font-semibold'>This Portfolio Website Was Made My<a href="www.github.com/bibekgurung9" className='cursor-pointer hover:text-red-500' target='blank'> Bibek Gurung</a></span>
      </div>
    </div>
    
  )
}
