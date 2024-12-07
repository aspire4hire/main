'use client'

import React from 'react'
import { useIconState } from './hooks'
import { IconProps } from './types'

export const LogoutIcon = (props: IconProps) => {
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
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M11 1H1v12.25c0 .464.21.91.586 1.237C1.96 14.816 2.47 15 3 15h8m1-4.375L15 8m0 0-3-2.625M15 8H5"
      />
    </svg>
  )
}
