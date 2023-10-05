import './globals.css'
import type { Metadata } from 'next'
import {inter} from './fonts'

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
      <body className={`${inter.className} bg-gray-100 text-black relative pt-28 sm:pt-36`}>{children}</body>
    </html>
  );
}
