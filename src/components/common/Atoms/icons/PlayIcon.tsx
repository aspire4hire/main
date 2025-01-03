'use client'

import React from 'react'
import { useIconState } from './hooks'
import { IconProps } from './types'

export const PlayIcon = (props: IconProps) => {
  const { iconProps } = useIconState(props)
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={56}
      height={56}
      viewBox="0 0 56 56"
      fill="none"
      {...iconProps}
    >
      <path
        fill="currentColor"
        d="M21.637 37.123V18.877a1.273 1.273 0 0 1 1.96-1.069l14.193 9.12a1.274 1.274 0 0 1 0 2.144l-14.193 9.122a1.272 1.272 0 0 1-1.96-1.069v-.002Z"
      />
      <path
        fill="currentColor"
        d="M0 28C0 12.536 12.536 0 28 0s28 12.536 28 28-12.536 28-28 28S0 43.464 0 28ZM28 3.818a24.182 24.182 0 1 0 0 48.363 24.182 24.182 0 0 0 0-48.363Z"
      />
    </svg>
  )
}
