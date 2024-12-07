'use client'

import React from 'react'
import { useIconState } from './hooks'
import { IconProps } from './types'

export const AttachIcon = (props: IconProps) => {
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
        fillRule="evenodd"
        d="M13.396 12.418a3.41 3.41 0 0 0 0-4.822L8.15 2.348a.803.803 0 1 1 1.134-1.135l5.248 5.248a5.015 5.015 0 0 1-7.091 7.092L1.058 7.171a3.612 3.612 0 0 1 5.107-5.107l6.382 6.38a2.208 2.208 0 0 1-3.123 3.123L3.61 5.752a.803.803 0 0 1 1.134-1.135l5.815 5.814a.603.603 0 0 0 .853-.852L5.031 3.2a2.007 2.007 0 1 0-2.839 2.836l6.382 6.382a3.41 3.41 0 0 0 4.822.001Z"
        clipRule="evenodd"
      />
    </svg>
  )
}
