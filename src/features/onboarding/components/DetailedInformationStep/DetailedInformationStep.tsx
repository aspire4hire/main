'use client'

import React, { useMemo } from 'react'

import { CheckIcon, IconSizeEnum, PageTransition } from '@/components'
import { Stepper, StepperButton } from '../Stepper'
import { useOnboardingFormContext } from '../../context'
import { StepPositionEnum } from '../../types'
import { JobSeekerDetailedInfo } from './JobSeekerDetailedInfo'
import { CompanyInformation } from './CompanyInformation'

export const DetailedInformationStep = () => {
  const {
    handleChangeStep,
    form: { handleSubmit, watch }
  } = useOnboardingFormContext()

  const isEmployer = watch('is_employer')

  const StepperInformation = useMemo(() => {
    if (isEmployer) {
      return {
        stepTitle: 'Let’s Create Your Company',
        submitText: 'Finish Company Setup'
      }
    }

    return {
      stepTitle: 'Finish Creating Your Profile',
      submitText: 'Finish Profile Setup'
    }
  }, [isEmployer])

  return (
    <div className="flex h-[100dvh] w-full flex-col justify-between">
      <PageTransition className="h-full max-h-full overflow-auto">
        <div className="mx-auto h-full max-h-full w-full overflow-auto p-3 pb-6 md:max-w-lg">
          <Stepper
            position={2}
            title={StepperInformation.stepTitle}
            totalSteps={2}
            onBack={() => handleChangeStep(StepPositionEnum.BASIC_INFORMATION)}
          />

          {isEmployer ? <CompanyInformation /> : <JobSeekerDetailedInfo />}
        </div>
      </PageTransition>
      <StepperButton
        onClick={handleSubmit(() =>
          handleChangeStep(StepPositionEnum.DETAILED_INFORMATION)
        )}
      >
        <CheckIcon size={IconSizeEnum.XS} />
        {StepperInformation.submitText}
      </StepperButton>
    </div>
  )
}
