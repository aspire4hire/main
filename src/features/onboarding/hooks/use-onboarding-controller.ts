import { useState } from 'react'
import { updateProfile } from '../actions'
import { OnboardingFormDto } from '../types'
import { useRouter } from 'next/navigation'
import { ROUTES } from '@/constants'
import { toast } from 'sonner'

const useOnboardingController = () => {
  const [isLoading, setIsLoading] = useState(false)
  const router = useRouter()

  const onSubmit = async (data: OnboardingFormDto) => {
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

      router.push(ROUTES.MY_PROFILE)

      setIsLoading(false)

      return response
    } catch (error) {
      console.log('🚀 ~ onSubmit ~ error:', error)
    }
  }

  return {
    isLoading,
    onSubmit
  }
}

export { useOnboardingController }
