'use client'

import React from 'react'
import { useOnboardingFormContext } from '../../context'
import { UserTypeStep } from '../UserTypeStep'
import { StepPositionEnum } from '../../types'
import { BasicInformationStep } from '../BasicInformationStep'
import { DetailedInformationStep } from '../DetailedInformationStep'
import { PageTransition } from '@/components'
import { EditProfileForm } from './EditProfileForm'
import { EditCompanyForm } from './EditCompanyForm'

export const OnboardingFormWrapper = () => {
  const { stepPosition, isEditing, isCompany } = useOnboardingFormContext()

  if (isCompany && isEditing) {
    return <EditCompanyForm />
  }

  if (isEditing) {
    return <EditProfileForm />
  }

  return (
    <>
      {stepPosition === StepPositionEnum.USER_TYPE && (
        <PageTransition>
          <UserTypeStep />
        </PageTransition>
      )}
      {stepPosition === StepPositionEnum.BASIC_INFORMATION && (
        <BasicInformationStep />
      )}
      {stepPosition === StepPositionEnum.DETAILED_INFORMATION && (
        <DetailedInformationStep />
      )}
    </>
  )
}
