'use client'

import React from 'react'
import { Button, EditIcon, IconSizeEnum } from '../../Atoms'
import { useRouter } from 'next/navigation'

type EditButtonProps = {
  href: string
}

export const EditButton = ({ href }: EditButtonProps) => {
  const router = useRouter()

  return (
    <Button size={'icon'} onClick={() => router.push(href)}>
      <EditIcon size={IconSizeEnum.SM} />
    </Button>
  )
}
