import { useForm } from 'react-hook-form'
import { useState } from 'react'
import { toast } from 'sonner'

import { ResetPasswordDto } from '../types'
import { resetPassword } from '../actions'
import { useRouter } from 'next/navigation'
import { ROUTES } from '@/constants'

const useResetPassword = () => {
  const router = useRouter()

  const [isLoading, setIsLoading] = useState(false)
  const form = useForm<ResetPasswordDto>({
    defaultValues: {
      confirmPassword: '',
      password: ''
    }
  })

  const onSubmit = async (data: ResetPasswordDto) => {
    setIsLoading(true)
    const { data: response, error } = await resetPassword(data)

    if (response) {
      toast.success('Password reset successfully', {
        position: 'top-center',
        duration: 6000
      })
      router.push(`${ROUTES.LOGIN}`)
    }
    if (error) {
      toast.error('We are unable to process your request. Please try again.', {
        position: 'top-center'
      })
      setIsLoading(false)
    }
  }

  return {
    form,
    onSubmit,
    isLoading
  }
}

export { useResetPassword }
