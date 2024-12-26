'use client'

import { useState } from 'react'
import { Company } from '../types'
import { updateCompany } from '../api'
import { toast } from 'sonner'
import { getUserProfile } from '@/features/onboarding/actions'
import { useCurrentSessionStore } from '@/features/auth'
import { useRouter } from 'next/navigation'
import { ROUTES } from '@/constants'

const useUpdateCompanyController = () => {
  const [isLoading, setIsLoading] = useState(false)
  const router = useRouter()

  const { setCurrentSessionState } = useCurrentSessionStore()

  const onSubmitEdit = async (
    company: Partial<Company>,
    callback?: () => void
  ) => {
    setIsLoading(true)
    const { data, error } = await updateCompany({
      body: company
    })

    if (error) {
      toast.error(
        'We are unable to process your request. Please check try again.',
        {
          position: 'top-center'
        }
      )
      setIsLoading(false)
    } else {
      const profile = await getUserProfile()
      setCurrentSessionState({ profile: profile.data })

      callback?.()

      router.push(ROUTES.MY_PROFILE)
      return data
    }
  }

  return {
    onSubmitEdit,
    isLoading
  }
}

export { useUpdateCompanyController }
