'use client'

import * as React from 'react'

import { cn } from '@/lib/utils'
import { InputProps } from './Input.types'
import { Label } from '../Label'
import { ErrorField } from '../ErrorField'
import { DescriptionAsLabel } from '../DescriptionAsLabel'
import { Eye, EyeOff } from 'lucide-react'

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
    const [isVisibleText, setIsVisibleText] = React.useState(false)
    const isPassword = type === 'password'
    return (
      <div className="group relative">
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
          type={isVisibleText ? 'text' : type}
          className={cn(
            'flex w-full rounded-md border border-input bg-background p-[10px] text-base ring-offset-background transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:border-primary focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm',
            className,
            error && 'border-destructive focus-visible:!border-destructive',
            isPassword && '!pe-12 md:pe-10'
          )}
          ref={ref}
          {...props}
          value={value ?? (type === 'text' ? '' : undefined) ?? undefined}
        />
        {isPassword && (
          <div
            className={cn(
              'absolute inset-y-0 end-0 mt-6 flex cursor-pointer items-center justify-center text-muted-foreground/80 peer-disabled:opacity-50',
              isPassword && 'pe-3'
            )}
            onClick={() => setIsVisibleText(!isVisibleText)}
          >
            {!isVisibleText ? <Eye /> : <EyeOff />}
          </div>
        )}
        {error && <ErrorField error={error} />}
      </div>
    )
  }
)
Input.displayName = 'Input'

export { Input }
