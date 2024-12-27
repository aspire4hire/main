'use client'

import React from 'react'
import { ArrowLeftIcon, Button, IconSizeEnum } from '../../Atoms'
import { useRouter } from 'next/navigation'
import { cn } from '@/utils'

type NavigationBarProps = {
  toBack?: string
  backButton?: boolean
  secondNavButton?: React.ReactNode
  className?: HTMLElement['className']
}

export const NavigationBar = ({
  backButton,
  secondNavButton,
  toBack,
  className
}: NavigationBarProps) => {
  const router = useRouter()

  return (
    <div
      className={cn(
        'flex items-center justify-between bg-gradient-to-b from-white to-transparent py-2 pt-5 md:px-0',
        className
      )}
    >
      {backButton ? (
        <Button
          type="button"
          onClick={() => (toBack ? router.push(toBack) : router.back())}
          size={'icon'}
        >
          <ArrowLeftIcon size={IconSizeEnum.SM} />
        </Button>
      ) : (
        <div></div>
      )}
      {secondNavButton && secondNavButton}
    </div>
  )
}
