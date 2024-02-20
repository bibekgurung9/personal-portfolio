//navigation
export const navigation = [
  { name: 'Portfolio', href: '#portfolio', id: '1' },
  { name: 'About Me', href: '#about-me', id: '2' },
  { name: 'CV', href: 'https://docs.google.com/document/d/1uXvjcpXFdvfI7gj74FqEjNEHSslshgeuLofac7Bmr2c/edit?usp=sharing', id: '3' },
]

//images for tech stack
import html from '@/assets/stack/html.svg'
import css from '@/assets/stack/css.svg'
import javascript from '@/assets/stack/javascript.svg'
import react from '@/assets/stack/react.svg'
import tailwind from '@/assets/stack/tailwind.svg'
import nextjs from '@/assets/stack/nextjs.svg'

export const techStack = [
    {src: html, alt: 'HTML'},
    {src: css, alt: 'CSS'},
    {src: javascript, alt: 'JAVSCRIPT'},
    {src: react, alt: 'REACT'},
    {src: tailwind, alt: 'TAILWIND'},
    {src: nextjs, alt: 'NEXTJS'},
]

import project1 from '@/assets/projects/project 1.png'
import project2 from '@/assets/projects/project 2.png'
import project3 from '@/assets/projects/project 3.png'
import project4 from '@/assets/projects/project 4.png'
import noImage from '@/assets/projects/no image.jpg'

//portfolio section
export const posts = [
    {
      id: 1,
      title: 'Freelancing Website With NextJs 14',
      src: noImage,
      href: 'https://github.com/bibekgurung9/nextjs-freelance-website',
      github: 'https://github.com/bibekgurung9/nextjs-freelance-website',
      name: 'NextJS Freelance',
      status: 'Ongoing',
      description:
        'This project is a freelance application built with Nextjs14, designed to provide a platform for freelancers to showcase their skills and services. Clients can explore and hire freelancers for various projects.',   
    },
    {
      id: 2,
      title: 'Realtime ChatRoom with React & Appwrite',
      src: project2,
      href: 'https://glittering-parfait-71946c.netlify.app/',
      github: 'https://github.com/bibekgurung9/php-ecommerce-app',
      name: 'Realtime ChatRoom App',
      status: 'Ongoing',
      description:
        'This project is a real-time chatroom application built using React, Vite, and Appwrite. Users can seamlessly sign up, log in, and exchange messages in a chatroom in real-time. The integration with Appwrite provides a secure and scalable backend for user management and message storage, while Vite ensures a fast and efficient development environment.',   
    },
    {
      id: 3,
      title: 'Fitness Website with NextJs14 & Rapid Api',
      src: project3,
      href: 'https://fitness-exercise-app-eight.vercel.app/',
      github: 'https://github.com/bibekgurung9/fitness-exercise-app',
      name: 'Fitness Wesbite',
      status: 'Completed',
      description:
        'This project is a front-end fitness app built with Next.js 14, TypeScript, Tailwind CSS, and ShadcnUI. This application leverages the power of Rapid API to provide you with comprehensive fitness data, helping you achieve your health and wellness goals.',   
    },
    {
        id: 4,
        title: 'Ecommerce Website With PHP & MySQL',
        src: project4,
        href: 'https://github.com/bibekgurung9/php-ecommerce-app',
        github: 'https://github.com/bibekgurung9/php-ecommerce-app',
        name: 'PHP Ecommerce',
        status: 'Completed',
        description:
          'This project is a full-stack e-commerce website project built with HTML, CSS, JavaScript, PHP, and MySQL. It provides a platform for users to browse, purchase, and manage projects with admin dashboard to manage users, products, orders, payment & more!',   
      },
  ]
