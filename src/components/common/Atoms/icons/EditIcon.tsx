'use client'

import React from 'react'
import { useIconState } from './hooks'
import { IconProps } from './types'

export const EditIcon = (props: IconProps) => {
  const { iconProps } = useIconState(props)
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={16}
      height={15}
      viewBox="0 0 16 15"
      fill="none"
      {...iconProps}
    >
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="m10.059 2.746 2.47 2.411M8.412 14H15M1.824 10.784 1 14l3.294-.804 9.542-9.314c.308-.301.482-.71.482-1.136 0-.427-.174-.835-.482-1.137l-.142-.138A1.668 1.668 0 0 0 12.529 1c-.436 0-.855.17-1.164.47l-9.541 9.315Z"
      />
    </svg>
  )
}
