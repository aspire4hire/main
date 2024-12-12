'use client'

import React from 'react'
import { useOnboardingFormContext } from '../../context'
import { UserTypeStep } from '../UserTypeStep'
import { StepPositionEnum } from '../../types'
import { BasicInformationStep } from '../BasicInformationStep'
import { DetailedInformationStep } from '../DetailedInformationStep'

export const OnboardingFormWrapper = () => {
  const { stepPosition } = useOnboardingFormContext()
  return (
    <>
      {stepPosition === StepPositionEnum.USER_TYPE && <UserTypeStep />}
      {stepPosition === StepPositionEnum.BASIC_INFORMATION && (
        <BasicInformationStep />
      )}
      {stepPosition === StepPositionEnum.DETAILED_INFORMATION && (
        <DetailedInformationStep />
      )}
    </>
  )
}
