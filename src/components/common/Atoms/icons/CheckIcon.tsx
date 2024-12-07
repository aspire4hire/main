'use client'

import React from 'react'
import { useIconState } from './hooks'
import { IconProps } from './types'

export const CheckIcon = (props: IconProps) => {
  const { iconProps } = useIconState(props)
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={16}
      height={12}
      viewBox="0 0 16 12"
      fill="none"
      {...iconProps}
    >
      <path
        fill="currentColor"
        d="m15.728 1.73-9.844 9.844a.923.923 0 0 1-1.307 0L.271 7.268A.924.924 0 0 1 1.578 5.96l3.654 3.654 9.19-9.189a.925.925 0 0 1 1.307 1.307l-.001-.001Z"
      />
    </svg>
  )
}
