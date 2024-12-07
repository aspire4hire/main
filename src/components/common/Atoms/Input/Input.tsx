'use client'

import * as React from 'react'

import { cn } from '@/lib/utils'
import { InputProps } from './Input.types'

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, label, hasError, ...props }, ref) => {
    return (
      <div className="group relative">
        {label && (
          <label
            htmlFor="input-32"
            className={cn(
              'origin-start group absolute top-1/2 block -translate-y-1/2 cursor-text px-1 text-sm text-muted-foreground/70 transition-all group-focus-within:pointer-events-none group-focus-within:top-0 group-focus-within:cursor-default group-focus-within:text-xs group-focus-within:font-medium group-focus-within:text-foreground has-[+input:not(:placeholder-shown)]:pointer-events-none has-[+input:not(:placeholder-shown)]:top-0 has-[+input:not(:placeholder-shown)]:cursor-default has-[+input:not(:placeholder-shown)]:text-xs has-[+input:not(:placeholder-shown)]:font-medium has-[+input:not(:placeholder-shown)]:text-foreground',
              hasError && 'text-destructive'
            )}
          >
            <span className="inline-flex bg-background px-2 text-muted-foreground group-focus-within:text-foreground">
              {`${label} ${props.required ? '*' : ''}`}
            </span>
          </label>
        )}
        <input
          type={type}
          className={cn(
            'flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-base shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus:border-primary focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm',
            className,
            hasError && 'border-destructive'
          )}
          ref={ref}
          {...props}
        />
      </div>
    )
  }
)
Input.displayName = 'Input'

export { Input }
