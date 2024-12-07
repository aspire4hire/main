'use client'

import React from 'react'
import { useIconState } from './hooks'
import { IconProps } from './types'

export const ExportIcon = (props: IconProps) => {
  const { iconProps } = useIconState(props)
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={15}
      height={14}
      viewBox="0 0 15 14"
      fill="none"
      {...iconProps}
    >
      <path
        fill="currentColor"
        d="M1 4.805h3.805V1H10v4.19h1V1a1 1 0 0 0-1-1H3.435L0 3.435V13a1 1 0 0 0 1 1h9a1 1 0 0 0 1-1H1V4.805Zm0-.96L3.845 1H4v3H1v-.155Z"
      />
      <path
        fill="currentColor"
        d="M12.16 6.175a.5.5 0 0 0-.705.705L13.08 8.5H7a.5.5 0 1 0 0 1h6.095l-1.64 1.64a.5.5 0 1 0 .705.705L15 9l-2.84-2.825Z"
      />
    </svg>
  )
}
