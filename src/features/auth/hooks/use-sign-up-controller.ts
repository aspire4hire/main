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

    if (!response.signUpData || response.error) {
      toast.error(
        'We are unable to process your request due to a network issue. Please check your connection and try again.',
        {
          position: 'top-center'
        }
      )
      return
    }

    router.push(`${ROUTES.EMAIL_VERIFICATION}?email=${data.email}`)

    setIsLoading(false)

    return response.signUpData
  }

  return {
    isLoading,
    onSubmit
  }
}

export { useSignUpController }
