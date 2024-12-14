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

type OnboardingFormProps = {
  isEditing?: boolean
  data?: Profile | null
}

export const OnboardingForm = ({
  isEditing,
  data = null
}: OnboardingFormProps) => {
  const { data: skillsTrades } = useSkillTrades()
  const { data: provinces } = useProvinces()
  const { data: credentials } = useCredentials()

  const { isLoading, onSubmit } = useOnboardingController()

  return (
    <OnboardingFormProvider
      skillTrades={skillsTrades}
      provinces={provinces}
      credentials={credentials}
      onSubmit={onSubmit}
      isEditing={Boolean(isEditing)}
      data={data}
    >
      {isLoading ? <PageLoader /> : <OnboardingFormWrapper />}
    </OnboardingFormProvider>
  )
}
