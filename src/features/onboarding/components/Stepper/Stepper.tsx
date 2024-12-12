'use client'

import { ArrowLeftIcon, Button, IconSizeEnum, Typography } from '@/components'
import React from 'react'

type StepperProps = {
  title: string
  position: number
  totalSteps: number
  onBack?: () => void
}

export const Stepper = ({
  position,
  title,
  totalSteps,
  onBack
}: StepperProps) => {
  return (
    <div className="flex">
      {onBack && (
        <Button
          onClick={onBack}
          size={'icon'}
          variant={'ghost'}
          className="h-fit w-fit p-2"
        >
          <ArrowLeftIcon size={IconSizeEnum.SM} />
        </Button>
      )}
      <div className="w-full flex-1">
        <Typography
          variant="h5"
          className="mb-1 w-full text-center font-semibold"
        >
          {title}
        </Typography>
        <Typography
          variant="p"
          className="w-full text-center text-base font-semibold"
        >
          STEP
        </Typography>
        <Typography
          variant="p"
          className="w-full text-center text-2xl font-bold text-secondary"
        >
          {position}/{totalSteps}
        </Typography>
      </div>
    </div>
  )
}
