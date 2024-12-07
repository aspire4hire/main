import React from 'react'
import { useIconState } from './hooks'
import { IconProps } from './types'

export const NewMessageIcon = (props: IconProps) => {
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
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M5.42 7.635h5.892M8.364 4.688v5.893m-3.02 2.946a6.629 6.629 0 1 0-2.872-2.873L1 15l4.346-1.473Z"
      />
    </svg>
  )
}
