'use client'

import React, { ReactNode, useEffect, useMemo, useState } from 'react'
import { Navbar, NavigationBar, PageLoader } from '../../Molecules'
import { CompanyIcon, ComunityIcon, HummerIcon, ProfileIcon } from '../../Atoms'
import { cn } from '@/utils'
import { useCurrentSessionStore } from '@/features/auth'
import { getUserProfile } from '@/features/onboarding/actions'
import { USER_TYPES } from '@/types'
import { ROUTES } from '@/constants'

const items = [
  {
    href: '/',
    icon: { element: ComunityIcon },
    title: 'Talent',
    exactlyRoute: true,
    access: [USER_TYPES.EMPLOYER, USER_TYPES.JOBSEEKER]
  },
  {
    href: '/jobs',
    icon: { element: HummerIcon },
    title: 'Jobs',
    access: [USER_TYPES.JOBSEEKER],
    otherMatchRoutes: ['company']
  },
  {
    href: '/my-companies',
    icon: { element: CompanyIcon },
    title: 'Company',
    access: [USER_TYPES.EMPLOYER]
  },
  {
    href: '/my-profile',
    icon: { element: ProfileIcon },
    title: 'Profile',
    access: [USER_TYPES.EMPLOYER, USER_TYPES.JOBSEEKER]
  }
]

type AppLayoutProps = {
  children: React.ReactNode
  backButton?: boolean
  toBack?: string
  secondNavButton?: ReactNode
  hideTopNav?: boolean
  hideBottomBar?: boolean
  className?: HTMLElement['className']
  loaderComponent?: React.ReactNode
}

export const AppLayout = ({
  children,
  secondNavButton,
  toBack,
  backButton = true,
  hideTopNav = false,
  hideBottomBar = false,
  className,
  loaderComponent
}: AppLayoutProps) => {
  const { profile, setCurrentSessionState } = useCurrentSessionStore()

  const [isLoading, setIsLoading] = useState(!profile ? true : false)

  useEffect(() => {
    if (!profile) {
      const getProfileInfo = async () => {
        setIsLoading(true)
        const profile = await getUserProfile()
        setCurrentSessionState({ profile: profile.data })
        setIsLoading(false)
      }

      getProfileInfo()
    }
  }, [setIsLoading])

  const navItems = useMemo(
    () =>
      items
        .filter(item => {
          const userType = profile?.is_employer
            ? USER_TYPES.EMPLOYER
            : USER_TYPES.JOBSEEKER
          return item.access.includes(userType)
        })
        .map(item => {
          if (profile?.is_employer && item.title === 'Company') {
            const firstCompanyId = profile.companies?.[0]?.id

            const newCompaniesHref = firstCompanyId
              ? ROUTES.COMPANY_DETAILS({ id: firstCompanyId })
              : item.href

            return { ...item, href: newCompaniesHref }
          }

          return item
        }),
    [profile]
  )

  if (isLoading) {
    return loaderComponent ?? <PageLoader />
  }

  return (
    <div className="flex h-[100dvh] flex-col justify-between">
      <section className="mx-auto h-full max-h-full w-full max-w-lg overflow-hidden px-3 md:px-0">
        {!hideTopNav && (
          <NavigationBar
            backButton={backButton}
            toBack={toBack}
            secondNavButton={secondNavButton}
          />
        )}
        <div
          className={cn(
            'h-full max-h-[calc(100%-65px)] w-full overflow-auto px-1 pb-5 md:px-1',
            !hideTopNav ? 'max-h-[calc(100%-65px)]' : 'max-h-full',
            className
          )}
        >
          {children}
        </div>
      </section>
      {!hideBottomBar && <Navbar items={navItems} />}
    </div>
  )
}
