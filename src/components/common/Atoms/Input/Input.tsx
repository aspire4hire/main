'use client'

import * as React from 'react'

import { cn } from '@/lib/utils'
import { InputProps } from './Input.types'
import { Label } from '../Label'
import { ErrorField } from '../ErrorField'
import { DescriptionAsLabel } from '../DescriptionAsLabel'

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  (
    {
      className,
      type = 'text',
      label,
      error,
      value,
      required,
      description,
      smallLabel,
      ...props
    },
    ref
  ) => {
    return (
      <div className="group">
        {label && (
          <Label className="font-semibold text-tertiary">
            {`${label}`}
            {smallLabel && (
              <>
                ,
                <span className="ml-1 text-xs font-light text-tertiary">
                  {smallLabel}
                </span>
              </>
            )}
            {required ? <span className="ml-1 text-destructive">*</span> : ''}
          </Label>
        )}
        <DescriptionAsLabel description={description} />
        <input
          type={type}
          className={cn(
            'flex w-full rounded-md border border-input bg-background p-[10px] text-base ring-offset-background transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:border-primary focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm',
            className,
            error && 'border-destructive focus-visible:!border-destructive'
          )}
          ref={ref}
          {...props}
          value={value ?? (type === 'text' ? '' : undefined) ?? undefined}
        />
        {error && <ErrorField error={error} />}
      </div>
    )
  }
)
Input.displayName = 'Input'

export { Input }
