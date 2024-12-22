/* eslint-disable @next/next/no-img-element */
'use client'

import React, { useMemo, useState } from 'react'
import { AvatarProps } from './Avatar.types'
import { AvatarSizeEnum } from './enums'
import { cn } from '@/utils'
import { AVATAR_SIZE } from './constants'
import { ProfileIcon } from '../icons'
import { IconSizeEnum } from '../icons/types'

export const Avatar: React.FC<AvatarProps> = ({
  className: classNameProp,
  size = AvatarSizeEnum.MD,
  src,
  name
}) => {
  const [hasError, setHasError] = useState(false)
  const sizeClass = size !== AvatarSizeEnum.CUSTOM ? AVATAR_SIZE[size] : ''

  const className = cn('rounded-full object-cover ', sizeClass, classNameProp)

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
    <div className="flex w-fit items-center gap-1">
      <div className="h-fit w-fit overflow-hidden">
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
      <p className="font-semibold text-primary">{name}</p>
    </div>
  )
}
