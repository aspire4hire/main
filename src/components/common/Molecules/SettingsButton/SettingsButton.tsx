'use client'

import React from 'react'
import { Button, IconSizeEnum, SettingsIcon } from '../../Atoms'
import { useRouter } from 'next/navigation'
import { ROUTES } from '@/constants'

export const SettingsButton = () => {
  const router = useRouter()

  return (
    <Button size={'icon'} onClick={() => router.push(ROUTES.SETTINGS)}>
      <SettingsIcon size={IconSizeEnum.SM} />
    </Button>
  )
}
