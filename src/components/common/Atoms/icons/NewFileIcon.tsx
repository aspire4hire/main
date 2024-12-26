'use client'

import React from 'react'
import { useIconState } from './hooks'
import { IconProps } from './types'

export const NewFileIcon = (props: IconProps) => {
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
        d="M16 9.778v4.444A1.778 1.778 0 0 1 14.222 16H1.778A1.778 1.778 0 0 1 0 14.222V1.778A1.778 1.778 0 0 1 1.778 0h4.444v1.778H1.778v12.444h12.444V9.778H16Z"
      />
      <path
        fill="currentColor"
        d="M16 3.556h-3.556V0h-1.777v3.556H7.11v1.777h3.556V8.89h1.777V5.333H16V3.556Z"
      />
    </svg>
  )
}
