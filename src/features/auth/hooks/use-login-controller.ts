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
      toast.error('Invalid email or password, please try again', {
        position: 'top-center'
      })
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
