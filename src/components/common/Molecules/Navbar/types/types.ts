import { IconProps, IconSizeEnum } from '@/components'
import React from 'react'

type NavItemProps = {
  href: string
  icon: {
    element: React.JSXElementConstructor<IconProps>
    size?: IconSizeEnum
  }
  exactlyRoute?: boolean
  title: string
  otherMatchRoutes?: string[]
}

type NavbarProps = {
  items: NavItemProps[]
}

export type { NavItemProps, NavbarProps }
