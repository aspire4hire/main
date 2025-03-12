'use client'

import React, { useMemo } from 'react'

import { Dialog, DialogTitle, Typography } from '@/components'
import { useParams, useRouter, useSearchParams } from 'next/navigation'
import { ROUTES } from '@/constants'

export const DemoVideoDialog = () => {
  const searchParams = useSearchParams()
  const router = useRouter()

  const isOpen = searchParams.get('onboarding') === 'true'
  const onClose = () => {
    router.push(ROUTES.HOME)
  }

  return (
    <Dialog isOpen={isOpen} onClose={onClose}>
      <DialogTitle></DialogTitle>
      <Typography variant="h5" align="center">
        Feel free to watch this demo video to get familiar with the app:
      </Typography>
      <iframe
        width="100%"
        height="315"
        src="https://www.youtube.com/embed/aG6npfK1uuw?si=3MKp-nNit5wReJOc"
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
      ></iframe>
    </Dialog>
  )
}
