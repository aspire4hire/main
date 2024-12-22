import { OnboardingForm } from '@/features/onboarding'
import { getUserProfile } from '@/features/onboarding/actions'

export default async function Onboarding() {
  const { data } = await getUserProfile()
  return (
    <>
      <OnboardingForm data={data} />
    </>
  )
}
