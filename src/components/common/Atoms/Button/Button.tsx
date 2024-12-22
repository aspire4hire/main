'use client'

import * as React from 'react'
import { Slot } from '@radix-ui/react-slot'

import { cn } from '@/lib/utils'
import { ButtonProps } from './Button.types'
import { buttonVariants } from './variants'
import { Loader2 } from 'lucide-react'

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      variant,
      size,
      rounded,
      children,
      isLoading,
      disabled,
      asChild = false,
      fullWidth = false,
      isFileUpload = false,
      onFileChange,
      onClick,
      accept,
      ...props
    },
    ref
  ) => {
    const fileInputRef = React.useRef<HTMLInputElement>(null)

    const handleButtonClick = (e: React.MouseEvent<HTMLButtonElement>) => {
      if (isFileUpload && fileInputRef.current) {
        fileInputRef.current.click()
      } else if (onClick) {
        onClick(e)
      }
    }
    const Comp = asChild ? Slot : 'button'
    return (
      <>
        <Comp
          className={cn(
            buttonVariants({ variant, size, className }),
            rounded && 'rounded-full',
            fullWidth && 'w-full'
          )}
          ref={ref}
          disabled={isLoading || disabled}
          onClick={handleButtonClick}
          {...props}
        >
          {isLoading && <Loader2 className="animate-spin" />}
          {children}
        </Comp>
        {isFileUpload && (
          <input
            type="file"
            ref={fileInputRef}
            className="hidden"
            onChange={onFileChange}
            accept={accept}
          />
        )}
      </>
    )
  }
)
Button.displayName = 'Button'

export { Button }
