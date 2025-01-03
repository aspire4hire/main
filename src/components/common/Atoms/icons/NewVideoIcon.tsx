import React from 'react'
import { useIconState } from './hooks'
import { IconProps } from './types'

export const NewVideoIcon = (props: IconProps) => {
  const { iconProps } = useIconState(props)
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={41}
      height={41}
      viewBox="0 0 41 41"
      fill="none"
      {...iconProps}
    >
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={3.5}
        d="M25.313 21.847c-.278 1.154-1.595 1.969-4.232 3.597-2.545 1.575-3.818 2.364-4.845 2.048a2.576 2.576 0 0 1-1.122-.723c-.755-.828-.755-2.436-.755-5.649s0-4.82.755-5.649c.313-.342.699-.59 1.122-.721 1.027-.318 2.3.471 4.847 2.046 2.635 1.63 3.952 2.445 4.232 3.597.114.478.114.976 0 1.454"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={3.5}
        d="M37.356 18.36c.003.865.004 1.785.004 2.76 0 8.24 0 12.361-2.56 14.92-2.559 2.56-6.679 2.56-14.92 2.56-8.24 0-12.361 0-14.92-2.56C2.4 33.482 2.4 29.363 2.4 21.12c0-8.24 0-12.361 2.56-14.92 2.559-2.56 6.679-2.56 14.92-2.56.975 0 1.895.001 2.76.004"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={3.5}
        d="m32.76 1.8.474 1.283c.622 1.681.933 2.522 1.546 3.135.614.614 1.455.925 3.137 1.547l1.282.475-1.282.475c-1.682.622-2.523.933-3.136 1.545-.614.615-.925 1.456-1.547 3.138l-.475 1.282-.474-1.282c-.622-1.682-.933-2.523-1.546-3.136-.614-.614-1.455-.925-3.137-1.547l-1.283-.475 1.283-.475c1.682-.622 2.523-.933 3.135-1.545.615-.615.926-1.456 1.548-3.137l.474-1.283Z"
      />
    </svg>
  )
}
