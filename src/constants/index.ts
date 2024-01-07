//navigation
import download from '@/assets/download.svg'
export const navigation = [
  { name: 'Home', href: '#' },
  { name: 'Portfolio', href: '#portfolio' },
  { name: 'About Me', href: '#about-me' },
  { name: 'Contact Me', href: '#contact-me' },
  { name: 'CV', src: download, href: download , download: 'BibekGurung_Resume.pdf'},
]

//images for tech stack
import html from '@/assets/html.svg'
import css from '@/assets/css.svg'
import javascript from '@/assets/javascript.svg'
import react from '@/assets/react.svg'
import tailwind from '@/assets/tailwind.svg'
import nextjs from '@/assets/nextjs.svg'

export const techStack = [
    {src: html, alt: 'HTML'},
    {src: css, alt: 'CSS'},
    {src: javascript, alt: 'JAVSCRIPT'},
    {src: react, alt: 'REACT'},
    {src: tailwind, alt: 'TAILWIND'},
    {src: nextjs, alt: 'NEXTJS'},
]

//portfolio section
export const posts = [
    {
      id: 1,
      title: 'Freelancing Website With NextJs 14',
      href: '#',
      name: 'NextJS Ecommerce',
      description:
        'Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.',   
    },
    {
        id: 2,
        title: 'Ecommerce Website With PHP & MySQL',
        href: '#',
        name: 'PHP Ecommerce',
        description:
          'Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.',   
      },
      {
        id: 3,
        title: 'Daraz Clone Application',
        href: '#',
        name: 'Daraz CLone',
        description:
          'Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.',   
      },
      {
        id: 4,
        title: 'Weather Application With Javascript',
        href: '#',
        name: 'Weather Application',
        description:
          'Api Handling, Api Handling, Api Handling, Api Handling, Api Handling, Api Handling, Api Handling, Api Handling, Api Handling, Api Handling, Api Handling, Api Handling, Api Handling, ',   
      },
  ]

  //contact page
  import email from '@/assets/email.svg'
  import github from '@/assets/github.svg'
  import linkedin from '@/assets/linkedin1.svg'

  export const socialLinks = [
    {
      id: '2',
      name: 'Linkedin',
      links: 'https://www.linkedin.com/in/bibekgurung9/',
      p: 'https://www.linkedin.com/in/bibekgurung9/',
      src: linkedin,
    },
    {
      id: '3',
      name: 'Github',
      links: 'https://www.linkedin.com/in/bibekgurung9/',
      p: 'https://www.linkedin.com/in/bibekgurung9/',     
      src: github,
    },
  ]

  //footer 
  export const footerLinks = [
    {src: github, alt: 'github-logo', links: 'https://www.linkedin.com/in/bibekgurung9/', },
    {src: linkedin, alt: 'linkedin-logo', links: 'https://www.linkedin.com/in/bibekgurung9/',},
    {src: github, alt: 'twitter-logo', links: 'https://www.linkedin.com/in/bibekgurung9/',},
  ]