'use client'

import { AppLayout, SettingsButton } from '@/components'
import { useCurrentSessionStore } from '@/features/auth'
import { MyProfile } from '@/features/onboarding'

export default function Profile() {
  const { profile } = useCurrentSessionStore()

  return (
    <AppLayout secondNavButton={<SettingsButton />} backButton={false}>
      <MyProfile profile={profile!} />
    </AppLayout>
  )
}
