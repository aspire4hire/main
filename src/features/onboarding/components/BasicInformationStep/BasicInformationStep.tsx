'use client'

import React from 'react'
import { Stepper, StepperButton } from '../Stepper'
import { useOnboardingFormContext } from '../../context'
import { StepPositionEnum } from '../../types'
import { CheckIcon, IconSizeEnum, PageTransition } from '@/components'
import { BasicInformationForm } from './BasicInformationForm'

export const BasicInformationStep = () => {
  const {
    handleChangeStep,
    form: { handleSubmit },
    isEditing,
    handleSubmit: onSubimt
  } = useOnboardingFormContext()

  return (
    <div className="flex h-[100dvh] w-full flex-col justify-between">
      <PageTransition className="h-full max-h-full overflow-auto">
        <div className="mx-auto h-full max-h-full w-full overflow-auto p-3 pb-6 md:max-w-lg">
          <Stepper
            position={1}
            title={'Let’s Create Your Profile'}
            totalSteps={2}
            onBack={() => handleChangeStep(StepPositionEnum.USER_TYPE)}
            hide={isEditing}
          />
          <BasicInformationForm />
        </div>
      </PageTransition>
      {!isEditing && (
        <StepperButton onClick={handleSubmit(data => onSubimt(data))}>
          <CheckIcon size={IconSizeEnum.XS} />
          Next Step
        </StepperButton>
      )}
    </div>
  )
}
