import React from 'react'
import { NavbarProps } from './types'
import { NavItem } from './components'

export const Navbar = ({ items }: NavbarProps) => {
  return (
    <div className="mx-auto flex w-full max-w-lg overflow-hidden border-t shadow-2xl md:rounded-t-sm md:border-none">
      {items.map((item, index) => (
        <NavItem key={index} {...item} />
      ))}
    </div>
  )
}
