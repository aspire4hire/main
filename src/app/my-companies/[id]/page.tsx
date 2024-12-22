import { OnboardingForm } from '@/features/onboarding'
import { getCompany } from '@/features/onboarding/actions'

export default async function EditCompay({
  params
}: {
  params: Promise<{ [key: string]: string | string[] | undefined }>
}) {
  const { id } = await params

  const { data } = await getCompany({ id: id as string })

  return (
    <>
      <OnboardingForm isEditing company={data} isCompany />
    </>
  )
}
