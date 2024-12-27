'use client'

import React from 'react'
import { Button, CheckIcon, IconSizeEnum } from '../../Atoms'
import { cn } from '@/utils'

type FormContainerProps = {
  children: React.ReactNode
  submitButton?: React.ReactNode
  onSubmit?: () => void
  isLoading?: boolean
  className?: HTMLElement['className']
  formClassName?: HTMLElement['className']
}

export const FormContainer = ({
  children,
  submitButton,
  onSubmit,
  isLoading,
  className,
  formClassName
}: FormContainerProps) => {
  return (
    <div className={cn('flex h-[100dvh] flex-col', className)}>
      <form
        className={cn(
          'mx-auto h-full w-full max-w-lg overflow-auto px-3 py-3 md:px-1 md:py-5',
          formClassName
        )}
      >
        {children}
      </form>
      {submitButton && (
        <Button
          onClick={onSubmit}
          isLoading={isLoading}
          type="button"
          variant={'form'}
        >
          {submitButton}
        </Button>
      )}
    </div>
  )
}
