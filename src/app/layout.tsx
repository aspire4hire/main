import type { Metadata } from 'next'
import './globals.css'
import { Poppins } from 'next/font/google'
import { Toaster } from 'sonner'

import React from 'react'
import { PageTransition } from '@/components'

const poppins = Poppins({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-poppins',
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900']
})

export const metadata: Metadata = {
  title: 'Aspire for Higher',
  description:
    'Find and hire skilled professionals in trades like electrical work, carpentry, and plumbing. Showcase your skills with videos or post job listings.',
  openGraph: {
    title: 'Aspire for Higher',
    description:
      'Connect with skilled professionals in electrical work, carpentry, plumbing, and more. Showcase your skills or find job opportunities.',
    url: 'https://app.a4hskillslab.ca',
    type: 'website',
    images: [
      {
        url: 'https://app.a4hskillslab.ca/assets/a4h-logo-meta-image.png',
        width: 1200,
        height: 630,
        alt: 'Aspire for Higher'
      }
    ]
  }
}

export default async function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${poppins.className} antialiased`}>
        <PageTransition>
          {children} <Toaster richColors />
        </PageTransition>
      </body>
    </html>
  )
}
