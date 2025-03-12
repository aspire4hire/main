import { LoginDto } from '../types'
import { useState } from 'react'
import { toast } from 'sonner'
import { handleLogin } from '../actions/login-action'

const useLoginController = () => {
  const [isLoading, setIsLoading] = useState(false)

  const onSubmit = async (data: LoginDto) => {
    setIsLoading(true)
    const response = await handleLogin(data)

    if (response.error) {
      if (response.errorCode === 'email_not_confirmed') {
        toast.error(
          'Email not confirmed, please check your email and confirm your account',
          {
            position: 'top-center'
          }
        )
      } else {
        toast.error('Invalid email or password, please try again', {
          position: 'top-center'
        })
      }
    }

    setIsLoading(false)
    return response
  }

  return {
    isLoading,
    onSubmit
  }
}

export { useLoginController }
