import * as React from 'react'

import { cn } from '@/lib/utils'
import { TextareaProps } from './Textarea.types'

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
  ({ className, label, hasError, ...props }, ref) => {
    return (
      <div className="group relative">
        {label && (
          <label
            htmlFor="textarea-14"
            className="origin-start group absolute top-0 block translate-y-2 cursor-text px-1 text-sm text-muted-foreground/70 transition-all group-focus-within:pointer-events-none group-focus-within:-translate-y-1/2 group-focus-within:cursor-default group-focus-within:text-xs group-focus-within:font-medium group-focus-within:text-foreground has-[+textarea:not(:placeholder-shown)]:pointer-events-none has-[+textarea:not(:placeholder-shown)]:-translate-y-1/2 has-[+textarea:not(:placeholder-shown)]:cursor-default has-[+textarea:not(:placeholder-shown)]:text-xs has-[+textarea:not(:placeholder-shown)]:font-medium has-[+textarea:not(:placeholder-shown)]:text-foreground"
          >
            <span
              className={cn(
                'inline-flex bg-background px-2 text-muted-foreground group-focus-within:text-foreground',
                hasError && 'text-destructive'
              )}
            >
              {`${label} ${props.required ? '*' : ''}`}
            </span>
          </label>
        )}
        <TextareaBase
          ref={ref}
          className={cn(className, hasError && 'border-destructive')}
          {...props}
        />
      </div>
    )
  }
)

Textarea.displayName = 'Textarea'

export { Textarea }
