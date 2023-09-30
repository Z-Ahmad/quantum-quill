import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Quantum Quill',
  description: 'Combine artistry and AI',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-blue-400 text-gray-50 h-[5000px] relative pt-28 sm:pt-36`}>
        {children}
      </body>
    </html>
  )
}
