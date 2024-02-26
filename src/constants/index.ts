//navigation
export const navigation = [
  { name: 'Portfolio', href: '#portfolio', id: '1' },
  { name: 'About Me', href: '#about-me', id: '2' },
]

//images for tech stack
import html from '@/assets/stack/html.svg'
import css from '@/assets/stack/css.svg'
import javascript from '@/assets/stack/javascript.svg'
import react from '@/assets/stack/react.svg'
import tailwind from '@/assets/stack/tailwind.svg'
import nextjs from '@/assets/stack/nextjs.svg'
import bootstrap from '@/assets/stack/bootstrap.svg'
import mongodb from '@/assets/stack/mongodb.svg'
import nodejs from '@/assets/stack/nodejs.svg'
import typescript from '@/assets/stack/typescript.svg'

export const techStack = [
    {src: html, alt: 'HTML'},
    {src: css, alt: 'CSS'},
    {src: javascript, alt: 'JAVSCRIPT'},
    {src: react, alt: 'REACT'},
    {src: tailwind, alt: 'TAILWIND'},
    {src: bootstrap, alt: 'bootstrap'},
    {src: mongodb, alt: 'mongodb'},
    {src: nodejs, alt: 'nodejs'},
    {src: typescript, alt: 'typescript'},
    {src: nextjs, alt: 'NEXTJS'},
]

import project2 from '@/assets/project2.png'
import project3 from '@/assets/project3.png'
import project4 from '@/assets/project4.png'
import project5 from '@/assets/project5.png'
import project1 from '@/assets/project1.png'

//portfolio section
export const projects = [
    {
      id: 1,
      title: 'Freelancing Website With NextJs 14',
      src: project1,
      href: 'https://github.com/bibekgurung9/nextjs-freelance-website',
      github: 'https://github.com/bibekgurung9/nextjs-freelance-website',
      techStack: "Next.js14, TailwindCSS, Prisma, MongoDB, TypeScript & ShadcnUI",
      // description:
      //   'This project is a freelance application built with Nextjs14, designed to provide a platform for freelancers to showcase their skills and services. Clients can explore and hire freelancers for various projects.',   
    },
    {
      id: 2,
      title: 'Realtime ChatRoom with React & Appwrite',
      src: project2,
      href: 'https://glittering-parfait-71946c.netlify.app/',
      github: 'https://github.com/bibekgurung9/php-ecommerce-app',
      techStack: "React, TailwindCSS & Appwrite",
      // description:
      //   'This project is a real-time chatroom application built using React, Vite, and Appwrite. Users can seamlessly sign up, log in, and exchange messages in a chatroom in real-time. The integration with Appwrite provides a secure and scalable backend for user management and message storage, while Vite ensures a fast and efficient development environment.',   
    },
    {
      id: 3,
      title: 'Fitness Website with NextJs14 & Rapid Api',
      src: project3,
      href: 'https://fitness-exercise-app-eight.vercel.app/',
      github: 'https://github.com/bibekgurung9/fitness-exercise-app',
      techStack: "Next.js14, TailwindCSS, RapidAPI & ShadcnUI",
      // description:
      //   'This project is a front-end fitness app built with Next.js 14, TypeScript, Tailwind CSS, and ShadcnUI. This application leverages the power of Rapid API to provide you with comprehensive fitness data, helping you achieve your health and wellness goals.',   
    },
    {
        id: 4,
        title: 'Ecommerce Website With PHP & MySQL',
        src: project4,
        href: 'https://github.com/bibekgurung9/php-ecommerce-app',
        github: 'https://github.com/bibekgurung9/php-ecommerce-app',
        techStack: "HTML, CSS, JavaScript, PHP & MySQL",
        // description:
        //   'This project is a full-stack e-commerce website project built with HTML, CSS, JavaScript, PHP, and MySQL. It provides a platform for users to browse, purchase, and manage projects with admin dashboard to manage users, products, orders, payment & more!',   
      },
      {
        id: 5,
        title: `Bibek's Portfolio Website`,
        src: project5,
        href: 'https://iambibekgurung.netlify.app/',
        github: 'https://github.com/bibekgurung9/personal-portfolio',
        techStack: "Next.js, TaiilwindCSS & TailwindUI",
        // description:
        //   'This portfolio website was built with NextJs, TailwindCSS and Typescript.',   
      },
  ]