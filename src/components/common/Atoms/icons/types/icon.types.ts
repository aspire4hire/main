'use client'
import { HTMLAttributes } from 'react'

/* eslint-disable no-unused-vars */
export enum IconSizeEnum {
  '2XS' = '2xs',
  XS = 'xs',
  SM = 'sm',
  MD = 'md',
  LG = 'lg',
  XL = 'xl',
  '2XL' = '2xl',
  CUSTOM = 'custom'
}

interface IconProps extends HTMLAttributes<SVGElement> {
  size?: IconSizeEnum
  iconSize?: IconSizeEnum
  className?: HTMLElement['className']
  disabled?: boolean
  iconColor?: string
  bgColor?: string
  stroke?: string
}

export type { IconProps }
