'use client'

import React from 'react'
import { useIconState } from './hooks'
import { IconProps } from './types'

export const ResourcesIcon = (props: IconProps) => {
  const { iconProps } = useIconState(props)
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={18}
      height={20}
      viewBox="0 0 18 20"
      fill="none"
      {...iconProps}
    >
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M15.714 7.5v6.875H5.657v-12.5h4.4v3.438c0 1.207.986 2.187 2.2 2.187h3.457Zm-3.771-5.474 3.62 3.599h-3.306a.315.315 0 0 1-.314-.313V2.026ZM5.029 0a1.26 1.26 0 0 0-.89.366 1.246 1.246 0 0 0-.368.884v2.5h-2.2C.704 3.75 0 4.45 0 5.313v13.125C0 19.3.704 20 1.571 20h10.372c.867 0 1.571-.7 1.571-1.563V16.35l-.005-.1h2.834c.333 0 .653-.132.889-.366.236-.235.368-.553.368-.884V5.518c0-.332-.133-.65-.368-.884L12.94.366A1.26 1.26 0 0 0 12.05 0H5.029ZM3.77 15V5.625H1.886v12.5h9.743V16.35c0-.033.001-.067.005-.1H5.029a1.26 1.26 0 0 1-.89-.366A1.246 1.246 0 0 1 3.772 15Z"
        clipRule="evenodd"
      />
    </svg>
  )
}
