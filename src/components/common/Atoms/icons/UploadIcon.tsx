'use client'

import React from 'react'
import { useIconState } from './hooks'
import { IconProps } from './types'

export const UploadIcon = (props: IconProps) => {
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
        d="M7 12V3.85l-2.6 2.6L3 5l5-5 5 5-1.4 1.45L9 3.85V12H7Zm-5 4c-.55 0-1.02-.196-1.412-.587A1.93 1.93 0 0 1 0 14v-3h2v3h12v-3h2v3c0 .55-.196 1.021-.587 1.413A1.92 1.92 0 0 1 14 16H2Z"
      />
    </svg>
  )
}
