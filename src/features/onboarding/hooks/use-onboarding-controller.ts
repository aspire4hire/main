import { useState } from 'react'
import { createCompany, getUserProfile, updateProfile } from '../actions'
import { OnboardingFormDto } from '../types'
import { useRouter } from 'next/navigation'
import { ROUTES } from '@/constants'
import { toast } from 'sonner'
import { useCurrentSessionStore } from '@/features/auth'

type SubmitParams = {
  callback?: () => void
  redirect?: boolean
  setLoadingAsFalse?: boolean
  showVideo?: boolean
  redirectTo?: string
}

const useOnboardingController = () => {
  const [isLoading, setIsLoading] = useState(false)
  const router = useRouter()

  const { setCurrentSessionState } = useCurrentSessionStore()

  const onSubmit = async (
    data: OnboardingFormDto,
    {
      callback,
      redirect = true,
      setLoadingAsFalse = false,
      showVideo = true,
      redirectTo
    }: SubmitParams = {
      redirect: true,
      setLoadingAsFalse: false,
      showVideo: true
    }
  ) => {
    setIsLoading(true)
    try {
      const { data: response, error } = await updateProfile({
        body: data
      })

      if (error) {
        toast.error(
          'We are unable to process your request. Please check try again.',
          {
            position: 'top-center'
          }
        )
      }

      const profile = await getUserProfile()

      setCurrentSessionState({ profile: profile.data })

      callback?.()

      if (redirect) {
        const showOnboardingVideo = showVideo ? '?onboarding=true' : ''
        const redirectRoute = redirectTo ?? ROUTES.HOME
        router.push(redirectRoute + showOnboardingVideo)
        return
      }

      if (setLoadingAsFalse) setIsLoading(false)

      return response
    } catch (error) {
      console.log('🚀 ~ onSubmit ~ error:', error)
      setIsLoading(false)
    }
  }

  return {
    isLoading,
    onSubmit
  }
}

export { useOnboardingController }
