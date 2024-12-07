'use client'

import React from 'react'
import { Navbar } from '../../Molecules'
import { ComunityIcon, ResourcesIcon } from '../../Atoms'

const items = [
  {
    href: '/dashboard',
    icon: { element: ComunityIcon },
    title: 'Dashboard',
    isActive: true
  },
  {
    href: '/settings',
    icon: { element: ResourcesIcon },
    title: 'Settings',
    isActive: false
  }
]

type AppLayoutProps = {
  children: React.ReactNode
}

export const AppLayout = ({ children }: AppLayoutProps) => {
  return (
    <div className="flex h-[100dvh] flex-col justify-between">
      <section className="h-full max-h-full w-full overflow-auto">
        {children}
      </section>
      <Navbar items={items} />
    </div>
  )
}
