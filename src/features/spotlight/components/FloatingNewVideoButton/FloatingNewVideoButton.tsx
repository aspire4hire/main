import { IconSizeEnum, NewVideoIcon } from '@/components'
import { ROUTES } from '@/constants'
import Link from 'next/link'
import React from 'react'

export const FloatingNewVideoButton = () => {
  return (
    <Link
      href={ROUTES.UPLOAD_VIDEO}
      className="fixed bottom-24 right-5 z-20 aspect-square rounded-full bg-secondary !p-3 shadow-2xl"
    >
      <NewVideoIcon size={IconSizeEnum['2XL']} className="!h-8 !w-8" />
    </Link>
  )
}
