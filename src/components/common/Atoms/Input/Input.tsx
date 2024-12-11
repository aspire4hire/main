'use client'

import * as React from 'react'

import { cn } from '@/lib/utils'
import { InputProps } from './Input.types'
import { Label } from '../Label'
import { ErrorField } from '../ErrorField'

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, label, error, ...props }, ref) => {
    return (
      <div className="group">
        {label && <Label>{`${label} ${props.required ? '*' : ''}`}</Label>}
        <input
          type={type}
          className={cn(
            'flex w-full rounded-md border border-input bg-background p-[10px] text-base ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:border-primary focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm',
            className,
            error && 'border-destructive focus-visible:!border-destructive'
          )}
          ref={ref}
          {...props}
        />
        {error && <ErrorField error={error} />}
      </div>
    )
  }
)
Input.displayName = 'Input'

export { Input }
