import { OnboardingForm } from '@/features/onboarding'
import { getUserProfile } from '@/features/onboarding/actions'

export default async function EditProfile() {
  const { data } = await getUserProfile()

  return (
    <>
      <OnboardingForm isEditing data={data} />
    </>
  )
}
