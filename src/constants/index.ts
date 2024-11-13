export const navigation = [
  { name: 'Linkedin', href: 'https://www.linkedin.com/in/bibekgurung9/', id: '1' },
  { name: 'Resume', href: 'https://drive.google.com/file/d/1Oh4El3v4DUQq6YkCCIQxcFd69KHzZt6z/view?usp=sharing', id: '2' },
]

import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, FaBootstrap } from 'react-icons/fa';
import { SiNextdotjs, SiTypescript, SiTailwindcss, SiExpress, SiNestjs, SiMongodb, SiMysql, SiPostgresql, SiPrisma  } from 'react-icons/si';

export const techAndTools = [
  { icon: FaHtml5, label: 'HTML' },
  { icon: FaCss3Alt, label: 'CSS' },
  { icon: FaJs, label: 'JavaScript' },
  { icon: FaReact, label: 'React' },
  { icon: FaBootstrap, label: 'Bootstrap' },
  { icon: SiTailwindcss, label: 'Tailwind CSS' },
  { icon: SiTypescript, label: 'TypeScript' },
  { icon: SiNextdotjs, label: 'Next.js' },
  { icon: FaNodeJs, label: 'Node.js' },
  { icon: SiExpress, label: 'Express' },
  { icon: SiNestjs, label: 'NestJS' },
  { icon: SiMongodb, label: 'MongoDB' },
  { icon: SiMysql, label: 'MySQL' },
  { icon: SiPrisma , label: 'SiPrisma ' },
  { icon: SiPostgresql , label: 'Postgresql' },
];

import comingsoon from '@/assets/coming-soon.png'
import project2 from '@/assets/project2.png'
import project1 from '@/assets/project1.png'

export const projects = [
  {
    title: 'WorkoutSathi - Workout Portal',
    features: [
      "Receive personalized workout recommendations",
      "Log exercises and track progress",
      "Seamless and responsive user experience",
    ],
    src: comingsoon,
    live: null,
    github: null,
    techStack: "Next.js 14, Nest.js 14, TypeScript, MongoDB",
  },
  {
    title: 'Realtime ChatRoom App',
    features: [
      "Real-time messaging with instant updates",
      "User authentication and login functionality",
      "User presence indicators (Online/Offline status)",
    ],
    src: project2,
    live: 'https://glittering-parfait-71946c.netlify.app/',
    github: 'https://github.com/bibekgurung9/react-realtime-chatapp',
    techStack: "HTML, CSS, React, Appwrite",
  },
  {
    title: 'BikeShop - Ecommerce Platform',
    features: [
      "Browse products and manage shopping cart",
      "Order management system",
      "Backend developed with PHP and MySQL",
      "Fully responsive frontend with HTML, CSS, and JavaScript"
    ],
    src: project1,
    live: null,
    github: 'https://github.com/bibekgurung9/php-ecommerce-app',
    techStack: "HTML, CSS, JavaScript, PHP, MySQL",
  },
];
