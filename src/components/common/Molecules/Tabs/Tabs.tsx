'use client'

import React, { ReactNode } from 'react'
import { Typography } from '../../Atoms'
import { cn } from '@/utils'

export type TabsProps = {
  items: {
    title: string | ReactNode
    id: string
    onClick?: (id: string) => void
  }[]
  activeTabId: string
}

export const Tabs = ({ items, activeTabId }: TabsProps) => {
  const isTabActive = (tabId: string) => {
    return tabId === activeTabId
  }

  return (
    <div className="flex w-fit gap-5">
      {items.map((item, index) => (
        <button
          onClick={() => item.onClick?.(item.id)}
          key={index}
          type="button"
          className="outline-none"
        >
          <Typography
            variant="p"
            className={cn(
              'px-1 py-1 font-semibold transition-all duration-300',
              isTabActive(item.id) ? 'text-primary' : 'text-tertiary'
            )}
          >
            {item.title}
          </Typography>
          <div
            className={cn(
              'h-[2px] bg-secondary transition-all duration-300',
              isTabActive(item.id) ? 'w-full' : 'w-0'
            )}
          ></div>
        </button>
      ))}
    </div>
  )
}
