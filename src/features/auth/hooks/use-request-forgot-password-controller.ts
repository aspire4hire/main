import { useForm } from 'react-hook-form'
import { toast } from 'sonner'
import { usePathname, useRouter, useSearchParams } from 'next/navigation'

import { requestForgotPassword } from '../actions'
import { useState } from 'react'

type FormValues = {
  email: string
}

const useRequestForgotPasswordController = () => {
  const [isLoading, setIsLoading] = useState(false)
  const router = useRouter()
  const searchParams = useSearchParams()
  const pathname = usePathname()
  const form = useForm<FormValues>({
    defaultValues: {
      email: ''
    }
  })

  const onSubmit = async (data: FormValues) => {
    setIsLoading(true)
    const { error } = await requestForgotPassword(
      data,
      `http://localhost:3000/reset-password`
    )

    if (error) {
      setIsLoading(false)
      return toast.error(
        'We are unable to process your request. Please try again.',
        {
          position: 'top-center'
        }
      )
    }

    const params = new URLSearchParams(searchParams)
    params.set('email', data.email)
    router.replace(`${pathname}?${params.toString()}`)
    setIsLoading(false)
  }

  return {
    form,
    onSubmit,
    isLoading
  }
}

export { useRequestForgotPasswordController }
