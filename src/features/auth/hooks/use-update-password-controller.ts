import { useForm } from 'react-hook-form'
import { UpdatePassword } from '../types'
import { updatePassword } from '../actions'
import { toast } from 'sonner'
import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { ROUTES } from '@/constants'

const useUpdatePasswordControler = () => {
  const [isLoading, setIsLoading] = useState(false)
  const form = useForm<
    UpdatePassword & {
      confirmPassword: string
    }
  >({
    defaultValues: {
      password: '',
      confirmPassword: ''
    }
  })

  const router = useRouter()

  const onSubmit = async (data: UpdatePassword) => {
    setIsLoading(true)
    const { error } = await updatePassword({
      password: data.password
    })

    if (error) {
      toast.error(
        error.message ??
          'We are unable to update your password. Please try again.',
        {
          position: 'top-center'
        }
      )
      setIsLoading(false)
      return
    }

    router.push(`${ROUTES.CONFIRM_CHANGE_PASSWORD}`)

    setIsLoading(false)
  }

  return {
    form,
    onSubmit,
    isLoading
  }
}

export { useUpdatePasswordControler }
