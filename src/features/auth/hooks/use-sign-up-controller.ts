import { LoginDto } from '../types'
import { useState } from 'react'
import { toast } from 'sonner'
import { signUpAndLogin } from '../actions'
import { useRouter } from 'next/navigation'
import { ROUTES } from '@/constants'

const useSignUpController = () => {
  const [isLoading, setIsLoading] = useState(false)
  const router = useRouter()

  const onSubmit = async (data: LoginDto) => {
    setIsLoading(true)
    const response = await signUpAndLogin(data)
    console.log('🚀 ~ onSubmit ~ response:', { response })

    if (!response.signUpData) {
      toast.error(
        'We are unable to process your request due to a network issue. Please check your connection and try again.',
        {
          position: 'top-center'
        }
      )
      return
    }

    setIsLoading(false)
    router.push(`${ROUTES.EMAIL_VERIFICATION}?email=${data.email}`)
    return response.signUpData
  }

  return {
    isLoading,
    onSubmit
  }
}

export { useSignUpController }
