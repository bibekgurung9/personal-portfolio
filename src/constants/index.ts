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
      title: 'Boost your conversion rate',
      href: '#',
      description:
        'Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.',
      date: 'Mar 16, 2020',
      datetime: '2020-03-16',
      category: { title: 'Marketing', href: '#' },
      author: {
        name: 'Michael Foster',
        role: 'Co-Founder / CTO',
        href: '#',
        imageUrl:
          'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
      },
    },
    // More posts...
  ]