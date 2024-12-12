'use client'

import { OnboardingFormProvider } from '../../context'
import { OnboardingFormWrapper } from './onboardingFormWrapper'

import { useCredentials, useProvinces, useSkillTrades } from '../../hooks'

export const OnboardingForm = () => {
  const { data: skillsTrades } = useSkillTrades()
  const { data: provinces } = useProvinces()
  const { data: credentials } = useCredentials()
  return (
    <OnboardingFormProvider
      skillTrades={skillsTrades}
      provinces={provinces}
      credentials={credentials}
      onSubmit={() => {}}
    >
      <OnboardingFormWrapper />
    </OnboardingFormProvider>
  )
}
