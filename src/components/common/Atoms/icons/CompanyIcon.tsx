'use client'

import React from 'react'
import { useIconState } from './hooks'
import { IconProps } from './types'

export const CompanyIcon = (props: IconProps) => {
  const { iconProps } = useIconState(props)
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={17}
      height={16}
      viewBox="0 0 17 16"
      fill="none"
      {...iconProps}
    >
      <path
        fill="currentColor"
        d="M13.3 10.4h-1.6V12h1.6m0-4.8h-1.6v1.6h1.6m1.6 4.8H8.5V12h1.6v-1.6H8.5V8.8h1.6V7.2H8.5V5.6h6.4M6.9 4H5.3V2.4h1.6m0 4.8H5.3V5.6h1.6m0 4.8H5.3V8.8h1.6m0 4.8H5.3V12h1.6M3.7 4H2.1V2.4h1.6m0 4.8H2.1V5.6h1.6m0 4.8H2.1V8.8h1.6m0 4.8H2.1V12h1.6m4.8-8V.8h-8v14.4h16V4h-8Z"
      />
    </svg>
  )
}
