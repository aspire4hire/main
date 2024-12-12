'use client'

import React from 'react'
import { useIconState } from './hooks'
import { IconProps } from './types'

export const ComunityIcon = (props: IconProps) => {
  const { iconProps } = useIconState(props)
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={21}
      height={20}
      viewBox="0 0 21 20"
      fill="none"
      {...iconProps}
    >
      <path
        stroke="currentColor"
        strokeWidth={2}
        d="M7.11 4a3 3 0 1 0 5.999 0 3 3 0 0 0-6 0Zm-4.563 7.902a3 3 0 1 0 3 5.194 3 3 0 0 0-3-5.195Zm15.124 0a2.999 2.999 0 1 1-2.91 5.244 2.999 2.999 0 0 1 2.91-5.244Z"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M7.179 4.643a3 3 0 0 1 .42-2.286 9 9 0 0 0-6.23 10.79 3 3 0 0 1 1.77-1.507 6.998 6.998 0 0 1 4.04-6.997Zm5.86 0a7 7 0 0 1 4.04 6.997 3 3 0 0 1 1.77 1.507 9.002 9.002 0 0 0-6.23-10.79 3.002 3.002 0 0 1 .42 2.286Zm3.3 12.851a3.004 3.004 0 0 1-2.19-.779 7 7 0 0 1-8.08 0 3.003 3.003 0 0 1-2.19.78 9 9 0 0 0 12.46 0Z"
        clipRule="evenodd"
      />
    </svg>
  )
}
