'use client'

import React from 'react'
import { NavbarProps } from './types'
import { NavItem } from './components'

export const Navbar = ({ items }: NavbarProps) => {
  return (
    <div className="flex w-full border-t shadow-2xl">
      {items.map((item, index) => (
        <NavItem key={index} {...item} />
      ))}
    </div>
  )
}
