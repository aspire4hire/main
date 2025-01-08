/* eslint-disable @next/next/no-img-element */
'use client'

import React, { useMemo, useState } from 'react'
import { AvatarProps } from './Avatar.types'
import { AvatarSizeEnum } from './enums'
import { cn } from '@/utils'
import { AVATAR_SIZE } from './constants'
import { ProfileIcon } from '../icons'
import { IconSizeEnum } from '../icons/types'
import Link from 'next/link'

const AvatarWrapper = ({
  href,
  children,
  justClickable
}: {
  href?: string
  justClickable?: boolean
  children: React.ReactNode
}) => {
  if (!href)
    return <div className={'flex w-fit items-center gap-1'}>{children}</div>

  return (
    <Link
      href={href}
      className={cn(
        'flex w-fit cursor-pointer items-center gap-1',
        !justClickable && 'rounded-full bg-tertiary/15 px-3 py-1'
      )}
      onClick={e => e.stopPropagation()}
    >
      {children}
    </Link>
  )
}

export const Avatar: React.FC<AvatarProps> = ({
  className: classNameProp,
  size = AvatarSizeEnum.MD,
  src,
  name,
  href,
  justClickable
}) => {
  const [hasError, setHasError] = useState(false)
  const sizeClass = size !== AvatarSizeEnum.CUSTOM ? AVATAR_SIZE[size] : ''

  const className = cn('rounded-full object-cover', sizeClass, classNameProp)

  const iconSize = useMemo(() => {
    switch (size) {
      case AvatarSizeEnum.XS:
        return IconSizeEnum.XS
      case AvatarSizeEnum.MD:
        return IconSizeEnum.SM
      case AvatarSizeEnum.LG:
        return IconSizeEnum.LG
    }
  }, [size])

  return (
    <AvatarWrapper
      href={name && !hasError && href ? href : undefined}
      justClickable={justClickable}
    >
      <div className="h-fit w-fit overflow-hidden rounded-full drop-shadow-lg">
        {hasError || !src ? (
          <div
            className={cn(
              className,
              'flex items-center justify-center bg-[#747297]'
            )}
          >
            <ProfileIcon className="text-white" size={iconSize} />
          </div>
        ) : (
          <img
            src={src}
            className={className}
            alt="avatar"
            onError={() => setHasError(true)}
          />
        )}
      </div>
      {name && <p className="ml-1 font-bold text-primary">{name}</p>}
    </AvatarWrapper>
  )
}
