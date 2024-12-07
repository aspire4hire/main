'use client'

import React from 'react'
import { useIconState } from './hooks'
import { IconProps } from './types'

export const CloseIcon = (props: IconProps) => {
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
        d="M16 1.611 14.389 0 8 6.389 1.611 0 0 1.611 6.389 8 0 14.389 1.611 16 8 9.611 14.389 16 16 14.389 9.611 8 16 1.611Z"
      />
    </svg>
  )
}
