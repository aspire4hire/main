'use client'

import React from 'react'
import { useIconState } from './hooks'
import { IconProps } from './types'

export const CheckCircleIcon = (props: IconProps) => {
  const { iconProps } = useIconState(props)
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={16}
      height={16}
      viewBox="0 0 16 16"
      fill="none"
      {...iconProps}
    >
      <path
        fill="currentColor"
        d="M16 2.544 6.872 11.68 3.48 8.288 4.608 7.16l2.264 2.264 8-8L16 2.544Zm-1.768 4.032c.104.456.168.936.168 1.424 0 3.536-2.864 6.4-6.4 6.4A6.398 6.398 0 0 1 1.6 8c0-3.536 2.864-6.4 6.4-6.4 1.264 0 2.432.368 3.424 1l1.152-1.152A7.92 7.92 0 0 0 8 0C3.584 0 0 3.584 0 8s3.584 8 8 8 8-3.584 8-8c0-.952-.176-1.864-.48-2.712l-1.288 1.288Z"
      />
    </svg>
  )
}
