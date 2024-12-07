'use client'

import React from 'react'
import { useIconState } from './hooks'
import { IconProps } from './types'

export const PinIcon = (props: IconProps) => {
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
        d="m10.616.194.086.076 5.028 5.028a.914.914 0 0 1-1.074 1.454l-2.9 2.899-1.302 3.471a.915.915 0 0 1-.145.254l-.063.073-1.372 1.371a.914.914 0 0 1-1.207.075l-.086-.076-2.554-2.552-3.467 3.466A.914.914 0 0 1 .19 14.527l.076-.086 3.467-3.468L1.18 8.42a.914.914 0 0 1-.076-1.207l.076-.086 1.371-1.371a.914.914 0 0 1 .236-.171l.09-.039 3.47-1.303 2.9-2.898a.914.914 0 0 1 1.368-1.15Z"
      />
    </svg>
  )
}
