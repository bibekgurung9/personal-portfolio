//navigation
export const navigation = [
  { name: 'Portfolio', href: '#portfolio' },
  { name: 'About Me', href: '#about-me' },
  { name: 'Contact Me', href: '#contact-me' },
  { name: 'CV', href: 'https://docs.google.com/document/d/1uXvjcpXFdvfI7gj74FqEjNEHSslshgeuLofac7Bmr2c/edit?usp=sharing' },
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
      github: 'https://github.com/bibekgurung9/php-ecommerce-app',
      name: 'NextJS Ecommerce',
      status: 'Ongoing',
      description:
        'Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.',   
    },
    {
      id: 2,
      title: 'Realtime ChatRoom with React & Appwrite',
      href: 'https://glittering-parfait-71946c.netlify.app/',
      github: 'https://github.com/bibekgurung9/php-ecommerce-app',
      name: 'Realtime ChatRoom App',
      status: 'Ongoing',
      description:
        'Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.',   
    },
    {
      id: 3,
      title: 'Fitness Website with NextJs14 & Rapid Api',
      href: 'https://fitness-exercise-app-eight.vercel.app/',
      github: 'https://github.com/bibekgurung9/php-ecommerce-app',
      name: 'Fitness Wesbite',
      status: 'Completed',
      description:
        'Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.',   
    },
    {
        id: 4,
        title: 'Ecommerce Website With PHP & MySQL',
        href: 'https://github.com/bibekgurung9/php-ecommerce-app',
        github: 'https://github.com/bibekgurung9/php-ecommerce-app',
        name: 'PHP Ecommerce',
        status: 'Completed',
        description:
          'Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.',   
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