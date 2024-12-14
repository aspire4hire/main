import { AppLayout, SettingsButton, SettingsIcon } from '@/components'
import { MyProfile } from '@/features/onboarding'
import { getUserProfile } from '@/features/onboarding/actions/get-profile'

export default async function Profile() {
  const { data } = await getUserProfile()

  return (
    <AppLayout secondNavButton={<SettingsButton />}>
      <MyProfile profile={data} />
    </AppLayout>
  )
}
