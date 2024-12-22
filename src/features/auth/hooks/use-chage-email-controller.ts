import { useForm } from 'react-hook-form'
import { ChangeEmailDto } from '../types'
import { updateUserEmail } from '../actions'
import { toast } from 'sonner'
import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { ROUTES } from '@/constants'

const useChangeEmailController = () => {
  const [isLoading, setIsLoading] = useState(false)
  const form = useForm<ChangeEmailDto>()

  const router = useRouter()

  const onSubmit = async (data: ChangeEmailDto) => {
    setIsLoading(true)
    const { changeEmailError } = await updateUserEmail({
      email: data.email
    })

    if (changeEmailError) {
      toast.error(
        changeEmailError.message ??
          'We are unable to update your email. Please try again.',
        {
          position: 'top-center'
        }
      )
      setIsLoading(false)
      return
    }

    router.push(`${ROUTES.CONFIRM_CHANGE_EMAIL}?email=${data.email}`)
  }

  return {
    form,
    onSubmit,
    isLoading
  }
}

export { useChangeEmailController }
