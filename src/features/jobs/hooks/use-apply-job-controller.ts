'use client'

import { useState } from 'react'
import { CreateApplicantDTO } from '../types'
import { CreateApplicant } from '../actions'
import { toast } from 'sonner'
import { useRouter, useSearchParams } from 'next/navigation'
import { useDisclosure } from '@/utils'

const useApplyJobController = () => {
  const router = useRouter()

  const [isLoading, setIsLoading] = useState(false)

  const disclosure = useDisclosure()

  const onSubmit = async (data: CreateApplicantDTO) => {
    setIsLoading(true)
    const { error } = await CreateApplicant({
      body: data
    })

    if (error) {
      toast.error(
        error.message ??
          'We are unable to process your request. Please check try again.',
        {
          position: 'top-center'
        }
      )
      setIsLoading(false)
      return
    }
    disclosure.onOpen()
    setIsLoading(false)
  }

  const onAceptApply = () => {
    router.refresh()
    disclosure.onClose()
  }

  return {
    onSubmit,
    isLoading,
    disclosure,
    onAceptApply
  }
}

export { useApplyJobController }
