import React from 'react'
import * as CheckboxPrimitive from '@radix-ui/react-checkbox'

export type CheckboxProps = React.ComponentPropsWithoutRef<
  typeof CheckboxPrimitive.Root
> & {
  label?: string
}
