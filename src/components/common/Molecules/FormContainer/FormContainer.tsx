'use client'

import React from 'react'
import { Button } from '../../Atoms'
import { cn } from '@/utils'

type FormContainerProps = {
  children: React.ReactNode
  submitButton?: React.ReactNode
  onSubmit?: () => void
  isLoading?: boolean
  className?: HTMLElement['className']
}

export const FormContainer = ({
  children,
  submitButton,
  onSubmit,
  isLoading,
  className
}: FormContainerProps) => {
  return (
    <div className={cn('flex h-[100dvh] flex-col', className)}>
      <form className="mx-auto h-full w-full max-w-lg overflow-auto">
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
