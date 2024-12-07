'use client'

import React from 'react'

import { Poppins } from 'next/font/google'

const poppins = Poppins({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-poppins',
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900']
})

type Props = {
  children: React.ReactNode
}

export const ThemProvierStorybook = ({ children }: Props) => {
  return <div className={poppins.className}>{children}</div>
}
