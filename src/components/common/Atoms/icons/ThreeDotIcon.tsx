'use client'

import React from 'react'
import { useIconState } from './hooks'
import { IconProps } from './types'

export const ThreeDotIcon = (props: IconProps) => {
  const { iconProps } = useIconState(props)
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={16}
      height={4}
      viewBox="0 0 16 4"
      fill="none"
      {...iconProps}
    >
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M14 4a2 2 0 1 1 0-4 2 2 0 0 1 0 4ZM2 4a2 2 0 1 1 0-4 2 2 0 0 1 0 4Zm6 0a2 2 0 1 1 0-4 2 2 0 0 1 0 4Z"
        clipRule="evenodd"
      />
    </svg>
  )
}
