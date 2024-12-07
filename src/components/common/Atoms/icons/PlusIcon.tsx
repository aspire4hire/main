'use client'

import React from 'react'
import { useIconState } from './hooks'
import { IconProps } from './types'

export const PlusIcon = (props: IconProps) => {
  const { iconProps } = useIconState(props)
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={14}
      height={14}
      viewBox="0 0 14 14"
      fill="none"
      {...iconProps}
    >
      <path fill="currentColor" d="M6 8H0V6h6V0h2v6h6v2H8v6H6V8Z" />
    </svg>
  )
}
