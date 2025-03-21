'use client'

import React from 'react'
import { useIconState } from './hooks'
import { IconProps } from './types'

export const ArrowRightIcon = (props: IconProps) => {
  const { iconProps } = useIconState(props)
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={12}
      height={16}
      viewBox="0 0 12 16"
      fill="none"
      {...iconProps}
    >
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={props.stroke || 3}
        d="m2 14 8-6-8-6"
      />
    </svg>
  )
}
