import type { Metadata } from 'next'
import '@/app/globals.css'
import NavBar from '@/app/_components/Navbar'
import Footer from '@/app/_components/Footer'

export const metadata: Metadata = {
  title: 'Bibek Gurung',
  description: `Bibek Gurung's Personal Portfolio showcasing skills, projects, and expertise in web development.`,
  openGraph: {
    title: 'Bibek Gurung - Full Stack Web Developer',
    description: `Bibek Gurung's Personal Portfolio showcasing skills, projects, and expertise in web development.`,
    url: 'https://bibekgurung.com',
    siteName: 'Bibek Gurung',
    images: [
      {
        url: 'https://res.cloudinary.com/doucnczjd/image/upload/v1731515888/bibekgurung.jpg',
        width: 1200,
        height: 630,
        alt: 'Bibek Gurung Portfolio Image',
      },
    ],
    type: 'website',
  },
}
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <NavBar />
          {children}
        <Footer /> 
      </body>
    </html>
  )
}
