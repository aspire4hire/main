'use client'

import { Typography } from '@/components'
import { cn } from '@/utils'
import Link from 'next/link'
import React from 'react'
import { NavItemProps } from '../types'

export const NavItem = ({
  href,
  icon: { element: Icon, size },
  title,
  isActive
}: NavItemProps) => {
  return (
    <Link
      href={href}
      className="w-full flex-1 py-2 transition-all duration-300 hover:bg-primary/10"
    >
      <div className="flex flex-col items-center justify-center gap-1">
        <div className="flex flex-col items-center gap-[3px]">
          <Icon
            size={size}
            className={cn(isActive ? 'text-primary' : 'text-muted-foreground')}
          />
          {isActive && <div className={cn('h-[2px] w-4', 'bg-primary')} />}
        </div>
        <Typography
          variant="span"
          className={cn(
            'w-fit',
            isActive ? 'text-primary' : 'text-muted-foreground'
          )}
        >
          {title}
        </Typography>
      </div>
    </Link>
  )
}
