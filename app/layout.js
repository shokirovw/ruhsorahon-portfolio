import './globals.css'
import { Playfair_Display, Open_Sans, Dancing_Script } from 'next/font/google';

const heading = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-heading',
})

const regular = Open_Sans({
  subsets: ['latin'],
  variable: '--font-regular',
})

const second = Dancing_Script({
  subsets: ['latin'],
  variable: '--font-second'
})

export const metadata = {
  title: 'Shokirjonova Ruxroraxon',
  description: 'Portfolio websayt',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${heading.variable} ${regular.variable} ${second.variable} scrollbar-thin scrollbar-thumb-amber-600/50 scrollbar-thumb-rounded-full transition-all hover:scrollbar-thumb-amber-600/80`}>{children}</body>
    </html>
  )
}
