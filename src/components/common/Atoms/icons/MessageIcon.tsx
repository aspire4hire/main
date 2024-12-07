'use client'

import React from 'react'
import { useIconState } from './hooks'
import { IconProps } from './types'

export const MessageIcon = (props: IconProps) => {
  const { iconProps } = useIconState(props)
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={22}
      height={20}
      fill="none"
      {...iconProps}
    >
      <path
        fill="currentColor"
        d="M11 0C4.95 0 0 3.978 0 8.889c.028 1.18.313 2.34.836 3.397A8.006 8.006 0 0 0 3.025 15c0 .667-.462 2.411-3.025 5a12.068 12.068 0 0 0 7.117-2.778c1.254.367 2.574.556 3.883.556 6.05 0 11-3.978 11-8.89C22 3.979 17.05 0 11 0Zm0 15.556c-4.862 0-8.8-2.99-8.8-6.667 0-3.678 3.938-6.667 8.8-6.667s8.8 2.99 8.8 6.667c0 3.678-3.938 6.667-8.8 6.667Z"
      />
    </svg>
  )
}
