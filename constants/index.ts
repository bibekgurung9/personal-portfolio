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
import nestjs from '@/assets/stack/nestjs.svg'
import express from '@/assets/stack/express.svg'
import mysql from '@/assets/stack/mysql.svg'
import redux from '@/assets/stack/redux.svg'

export const techStack = [
  { src: html, alt: 'HTML' },
  { src: css, alt: 'CSS' },
  { src: javascript, alt: 'JAVSCRIPT' },
  { src: react, alt: 'REACT' },
  { src: redux, alt: 'REDUX' },
  { src: nextjs, alt: 'NEXTJS' },
  { src: typescript, alt: 'typescript' },
  { src: tailwind, alt: 'TAILWIND' },
  { src: bootstrap, alt: 'BOOTSTRAP' },
  { src: nodejs, alt: 'NODEJS' },
  { src: express, alt: 'EXPRESS' },
  { src: nestjs, alt: 'NESTJS' },
  { src: mongodb, alt: 'MONGODB' },
  { src: mysql, alt: 'MYSQL' },
]

import comingsoon from '@/assets/coming-soon.png'
import project2 from '@/assets/project2.png'
import project3 from '@/assets/project3.png'
import project4 from '@/assets/project4.png'
import project5 from '@/assets/project5.png'

//portfolio section
export const projects = [
  {
    title: 'Full Stack Workout App',
    src: comingsoon,
    href: '',
    github: '#',
    techStack: "Next.js14, Nest.Js14, MongoDB, TypeScript & TailwindCSS",
  },
  {
    title: 'Learning Management App',
    src: comingsoon,
    href: '',
    github: '#',
    techStack: "Next.js14, Nest.Js14, MongoDB, TypeScript & TailwindCSS",
  },
  {
    title: `Bibek's Portfolio Website`,
    src: project5,
    href: 'https://iambibekgurung.netlify.app/',
    github: 'https://github.com/bibekgurung9/personal-portfolio',
    techStack: "Next.js, TaiilwindCSS & TailwindUI",
  },
  {
    title: 'Realtime ChatRoom App',
    src: project2,
    href: 'https://glittering-parfait-71946c.netlify.app/',
    github: 'https://github.com/bibekgurung9/php-ecommerce-app',
    techStack: "React, TailwindCSS & Appwrite",
  },
  {
    title: 'Frontend Fitness App',
    src: project3,
    href: 'https://fitness-exercise-app-eight.vercel.app/',
    github: 'https://github.com/bibekgurung9/fitness-exercise-app',
    techStack: "Next.js14, TailwindCSS, RapidAPI & ShadcnUI",
  },
  {
    title: 'Full Stack Ecommerce Website',
    src: project4,
    href: 'https://github.com/bibekgurung9/php-ecommerce-app',
    github: 'https://github.com/bibekgurung9/php-ecommerce-app',
    techStack: "HTML, CSS, JavaScript, PHP & MySQL",
  },
]