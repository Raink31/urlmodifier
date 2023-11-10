import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Google Drive URL Modifier',
  description: 'Update your google drive url',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} flex items-center justify-center h-screen bg-orange-200`}>
        <main className='flex items-center justify-center'>
          {children}
        </main>
      </body>
    </html>
  )
}
