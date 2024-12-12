import { Button } from '@/components'
import React from 'react'

type StepperButtonProps = {
  onClick: () => void
  isLoading?: boolean
  isDisabled?: boolean
  children?: React.ReactNode
}

export const StepperButton = ({
  onClick,
  isDisabled,
  isLoading,
  children
}: StepperButtonProps) => {
  return (
    <Button
      fullWidth
      className="flex items-center gap-3 rounded-b-none rounded-t-3xl py-6 shadow-2xl"
      isLoading={isLoading}
      disabled={isDisabled}
      onClick={onClick}
    >
      {children}
    </Button>
  )
}
