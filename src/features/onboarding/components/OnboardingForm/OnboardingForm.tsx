'use client'

import { OnboardingFormProvider } from '../../context'
import { OnboardingFormWrapper } from './onboardingFormWrapper'

import {
  useCredentials,
  useOnboardingController,
  useProvinces,
  useSkillTrades
} from '../../hooks'
import { PageLoader } from '@/components'
import { Profile } from '../../types'
import { Company, useUpdateCompanyController } from '@/features/company'

type OnboardingFormProps = {
  isEditing?: boolean
  data?: Profile | null
  company?: Company
  isCompany?: boolean
}

export const OnboardingForm = ({
  isEditing,
  data = null,
  company,
  isCompany
}: OnboardingFormProps) => {
  const { data: skillsTrades } = useSkillTrades()
  const { data: provinces } = useProvinces()
  const { data: credentials } = useCredentials()

  const { isLoading, onSubmit } = useOnboardingController()

  const { isLoading: isLoadingEdit, onSubmitEdit } =
    useUpdateCompanyController()

  return (
    <OnboardingFormProvider
      skillTrades={skillsTrades}
      provinces={provinces}
      credentials={credentials}
      onSubmit={isCompany && isEditing ? onSubmitEdit : onSubmit}
      isEditing={Boolean(isEditing)}
      data={data}
      company={company}
      isCompany={isCompany}
    >
      {isLoading || isLoadingEdit ? <PageLoader /> : <OnboardingFormWrapper />}
    </OnboardingFormProvider>
  )
}
