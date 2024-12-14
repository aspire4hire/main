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
      height={16}
      fill="none"
      viewBox="0 0 16 16"
      {...iconProps}
    >
      <g clipPath="url(#a)">
        <path
          fill="currentColor"
          d="M0 16v-3.778L11.733.512c.178-.164.375-.29.59-.379C12.538.044 12.763 0 13 0c.236 0 .466.044.689.133.223.09.415.223.578.4l1.222 1.245c.178.163.307.355.39.578a1.903 1.903 0 0 1 0 1.344c-.082.216-.212.412-.39.589L3.778 16H0ZM12.978 4.267l1.244-1.245-1.244-1.244-1.245 1.244 1.245 1.245Z"
        />
      </g>
      <defs>
        <clipPath id="a">
          <path fill="#fff" d="M0 0h16v16H0z" />
        </clipPath>
      </defs>
    </svg>
  )
}
