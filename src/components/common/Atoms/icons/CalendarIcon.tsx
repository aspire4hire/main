'use client'

import React from 'react'
import { useIconState } from './hooks'
import { IconProps } from './types'

export const CalendarIcon = (props: IconProps) => {
  const { iconProps } = useIconState(props)
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={15}
      height={16}
      viewBox="0 0 15 16"
      fill="none"
      {...iconProps}
    >
      <path
        fill="currentColor"
        d="M7.2 8.8h4v4h-4v-4Zm5.6-7.2H12V0h-1.6v1.6H4V0H2.4v1.6h-.8C.72 1.6 0 2.32 0 3.2v11.2c0 .88.72 1.6 1.6 1.6h11.2c.88 0 1.6-.72 1.6-1.6V3.2c0-.88-.72-1.6-1.6-1.6Zm0 1.6v1.6H1.6V3.2h11.2ZM1.6 14.4v-8h11.2v8H1.6Z"
      />
    </svg>
  )
}
