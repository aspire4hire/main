import * as React from 'react'

import { cn } from '@/lib/utils'
import { TextareaProps } from './Textarea.types'
import { DescriptionAsLabel } from '../DescriptionAsLabel'
import { ErrorField } from '../ErrorField'
import { Label } from '../Label'

const TextareaBase = React.forwardRef<
  HTMLTextAreaElement,
  React.ComponentProps<'textarea'>
>(({ className, ...props }, ref) => {
  return (
    <textarea
      className={cn(
        'flex min-h-[80px] w-full rounded-md border border-input bg-background px-3 py-2 text-base ring-offset-background placeholder:text-muted-foreground focus-visible:border-primary focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm',
        className
      )}
      ref={ref}
      {...props}
    />
  )
})
TextareaBase.displayName = 'Textarea'

const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className, label, error, description, required, ...props }, ref) => {
    return (
      <div className="group relative">
        {label && (
          <Label className="font-semibold text-tertiary">
            {`${label}`}
            {required ? <span className="ml-1 text-destructive">*</span> : ''}
          </Label>
        )}
        <DescriptionAsLabel description={description} />
        <TextareaBase
          ref={ref}
          className={cn(
            className,
            error && 'border-destructive focus-within:!border-destructive'
          )}
          {...props}
        />
        {error && <ErrorField error={error} />}
      </div>
    )
  }
)

Textarea.displayName = 'Textarea'

export { Textarea }
