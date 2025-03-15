import { useForm } from 'react-hook-form'
import { useState } from 'react'
import { toast } from 'sonner'

import { ResetPasswordDto } from '../types'
import { resetPassword } from '../actions'

const useResetPassword = () => {
  const [isLoading, setIsLoading] = useState(false)
  const form = useForm<ResetPasswordDto>({
    defaultValues: {
      confirmPassword: '',
      password: ''
    }
  })

  const onSubmit = async (data: ResetPasswordDto) => {
    const { error } = await resetPassword(data)

    setIsLoading(false)
    if (error) {
      toast.error('We are unable to process your request. Please try again.', {
        position: 'top-center'
      })
      return
    }

    form.reset({
      confirmPassword: '',
      password: ''
    })
    toast.success('Password reset successfully', {
      position: 'top-center'
    })
  }

  return {
    form,
    onSubmit,
    isLoading
  }
}

export { useResetPassword }
