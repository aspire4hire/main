'use client'

import React, { ReactNode } from 'react'
import { Navbar, PageLoader } from '../../Molecules'
import {
  ArrowLeftIcon,
  Button,
  ComunityIcon,
  HummerIcon,
  IconSizeEnum,
  ProfileIcon
} from '../../Atoms'
import { useRouter } from 'next/navigation'
import { cn } from '@/utils'

const items = [
  {
    href: '/',
    icon: { element: ComunityIcon },
    title: 'Spotlight',
    isActive: true
  },
  {
    href: '/jobs',
    icon: { element: HummerIcon },
    title: 'Jobs',
    isActive: false
  },
  {
    href: '/my-profile',
    icon: { element: ProfileIcon },
    title: 'Profile',
    isActive: false
  }
]

type AppLayoutProps = {
  children: React.ReactNode
  backButton?: boolean
  toBack?: string
  secondNavButton?: ReactNode
  hideTopNav?: boolean
}

export const AppLayout = ({
  children,
  secondNavButton,
  toBack,
  backButton = true,
  hideTopNav = false
}: AppLayoutProps) => {
  const router = useRouter()

  return (
    <div className="flex h-[100dvh] flex-col justify-between">
      <section className="mx-auto h-full max-h-full w-full max-w-lg overflow-hidden px-3 md:px-0">
        {!hideTopNav && (
          <div className="flex items-center justify-between bg-gradient-to-b from-white to-transparent py-2 pt-5 md:px-6">
            {backButton && (
              <Button
                onClick={() => (toBack ? router.push(toBack) : router.back())}
                size={'icon'}
              >
                <ArrowLeftIcon size={IconSizeEnum.SM} />
              </Button>
            )}
            {secondNavButton && secondNavButton}
          </div>
        )}
        <div
          className={cn(
            'h-full max-h-[calc(100%-65px)] w-full overflow-auto',
            !hideTopNav ? 'max-h-[calc(100%-65px)]' : 'max-h-full'
          )}
        >
          {children}
        </div>
      </section>
      <Navbar items={items} />
    </div>
  )
}
