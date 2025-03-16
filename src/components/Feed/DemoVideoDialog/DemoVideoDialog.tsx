'use client'

import React, { useMemo } from 'react'

import { Dialog, DialogTitle, Typography } from '@/components'
import { useRouter, useSearchParams } from 'next/navigation'
import { ROUTES } from '@/constants'
import { useCurrentSessionStore } from '@/features/auth'

export const DemoVideoDialog = () => {
  const searchParams = useSearchParams()
  const router = useRouter()

  const { profile } = useCurrentSessionStore()

  const isOpen = searchParams.get('onboarding') === 'true'
  const onClose = () => {
    router.push(ROUTES.HOME)
  }

  const videoLink = useMemo(() => {
    if (profile?.is_employer) {
      return 'https://www.loom.com/embed/ad067dc3cb0f44e69600175717e86b75?sid=3bc82a38-aa6e-458b-b7ff-5b8e4da23d65'
    } else {
      return 'https://www.loom.com/embed/bbc0f048f8854ec59457f7718d074be0?sid=20180307-80c1-4c7d-996d-992a54a3f24f'
    }
  }, [profile?.is_employer])

  return (
    <Dialog isOpen={isOpen} onClose={onClose}>
      <DialogTitle></DialogTitle>
      <Typography variant="h5" align="center">
        Feel free to watch this demo video to get familiar with the app:
      </Typography>
      <iframe
        src={videoLink}
        allowFullScreen
        className="min-h-[40dvh] w-full"
      ></iframe>
    </Dialog>
  )
}
