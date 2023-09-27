import './globals.css'
import type { Metadata } from 'next'
import { Inter, Kings } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })
const kings = Kings({ subsets:['latin'], weight:"400"})

export const metadata: Metadata = {
  title: 'Portfolio Calculator | Daniel Urdaneta',
  description: 'Calculator developed from scratch using Nextjs, Typescript and Tailwind',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={kings.className}>
        <div className='flex min-h-screen justify-center items-center bg-gradient-to-br from-[#E20064] via-[#e46aa1] to-[#b30050] text-white'>
          {children}
        </div>
      </body>
    </html>
  )
}
