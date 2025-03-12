import { AppLayout } from '@/components'
import { MyProfile } from '@/features/onboarding'
import { getUserProfile } from '@/features/onboarding/actions'

export default async function JobSeekerProfilePage({
  params
}: {
  params: Promise<{ [key: string]: string | string[] | undefined }>
}) {
  const { id } = await params

  const [{ data }, { data: currentUser }] = await Promise.all([
    getUserProfile({ id: id as string }),
    getUserProfile()
  ])

  return (
    <AppLayout>
      <MyProfile
        profile={data}
        isExternalView
        isLookingOtherJobSeeker={!currentUser.is_employer}
      />
    </AppLayout>
  )
}
