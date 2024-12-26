import { AppLayout, SettingsButton } from '@/components'
import { MyProfile } from '@/features/onboarding'
import { getUserProfile } from '@/features/onboarding/actions'

export default async function JobSeekerProfilePage({
  params
}: {
  params: Promise<{ [key: string]: string | string[] | undefined }>
}) {
  //   const { id } = await params

  const { data } = await getUserProfile()

  return (
    <AppLayout secondNavButton={<SettingsButton />}>
      <MyProfile profile={data} />
    </AppLayout>
  )
}