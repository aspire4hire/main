import { AppLayout } from '@/components'
import { MyCompaniesPage } from '@/features/company'
import { OnboardingForm } from '@/features/onboarding'
import { getUserProfile } from '@/features/onboarding/actions'

export default async function CreateCompany() {
  const { data, error } = await getUserProfile()

  if (error) {
    console.log(error)
    return <></>
  }

  return <OnboardingForm isCreateCompany />
}
