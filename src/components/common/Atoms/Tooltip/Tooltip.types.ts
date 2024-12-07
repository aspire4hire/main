import * as TooltipPrimitive from '@radix-ui/react-tooltip'
import React from 'react'

type TooltipProps = React.ComponentPropsWithoutRef<
  typeof TooltipPrimitive.Content
> & {
  children: React.ReactNode
  content: React.ReactNode
}

export type { TooltipProps }
