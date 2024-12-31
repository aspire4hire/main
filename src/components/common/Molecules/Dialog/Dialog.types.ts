import React from 'react'
import * as DialogPrimitive from '@radix-ui/react-dialog'

export enum DialogSizeEnum {
  SM = 'sm', // Max width: 328px
  MD = 'md',
  LG = 'lg',
  XL = 'xl',
  XXL = '2xl',
  FULLSCREEN = 'full',
  CUSTOM = 'custom'
}

export type DialogProps = React.ComponentPropsWithoutRef<
  typeof DialogPrimitive.Content
> & {
  isOpen: boolean
  onClose: () => void
  children: React.ReactNode
  size?: DialogSizeEnum
}
