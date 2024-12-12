import React from 'react'
import * as SelectPrimitive from '@radix-ui/react-select'

export type SelectorProps = React.ComponentPropsWithoutRef<
  typeof SelectPrimitive.Root
> & {
  options: {
    value: any
    label: string | React.ReactNode
  }[]
  placeholder?: string
  error?: string
  label?: string
}
