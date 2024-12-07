import React from 'react'
import { useIconState } from './hooks'
import { IconProps } from './types'

export const ProfileIcon = (props: IconProps) => {
  const { iconProps } = useIconState(props)
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={20}
      height={20}
      viewBox="0 0 20 20"
      fill="none"
      {...iconProps}
    >
      <path
        fill="currentColor"
        d="M10 2.375a2.625 2.625 0 1 1 0 5.25 2.625 2.625 0 0 1 0-5.25Zm0 11.25c3.713 0 7.625 1.825 7.625 2.625v1.375H2.375V16.25c0-.8 3.912-2.625 7.625-2.625ZM10 0C7.237 0 5 2.237 5 5s2.237 5 5 5c2.762 0 5-2.237 5-5s-2.238-5-5-5Zm0 11.25c-3.338 0-10 1.675-10 5V20h20v-3.75c0-3.325-6.662-5-10-5Z"
      />
    </svg>
  )
}
