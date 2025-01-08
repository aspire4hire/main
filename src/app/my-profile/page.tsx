'use client'

import { AppLayout, SettingsButton } from '@/components'
import { useCurrentSessionStore } from '@/features/auth'
import { MyProfile } from '@/features/onboarding'
import { FloatingNewVideoButton } from '@/features/spotlight/components'

export default function Profile() {
  const { profile } = useCurrentSessionStore()

  return (
    <AppLayout
      className="relative"
      secondNavButton={<SettingsButton />}
      backButton={false}
    >
      <FloatingNewVideoButton />
      <MyProfile profile={profile!} />
    </AppLayout>
  )
}
