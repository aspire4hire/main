'use client'

import React from 'react'
import { ArrowLeftIcon, Button, IconSizeEnum } from '../../Atoms'
import { useRouter } from 'next/navigation'

type NavigationBarProps = {
  toBack?: string
  backButton?: boolean
  secondNavButton?: React.ReactNode
}

export const NavigationBar = ({
  backButton,
  secondNavButton,
  toBack
}: NavigationBarProps) => {
  const router = useRouter()

  return (
    <div className="flex items-center justify-between bg-gradient-to-b from-white to-transparent py-2 pt-5 md:px-0">
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
