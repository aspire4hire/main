'use client'

import { UpdateJobStatusDTO } from '@/features/jobs'
import { updateJobStatus } from '@/features/jobs/actions'
import { useRouter } from 'next/navigation'
import { useState } from 'react'
import { toast } from 'sonner'

const useJobStatusController = () => {
  const router = useRouter()
  const [isLoading, setIsLoading] = useState(false)

  const onSubmit = async (data: UpdateJobStatusDTO) => {
    setIsLoading(true)
    const { error } = await updateJobStatus({
      body: data
    })

    if (error) {
      toast.error(
        'We are unable to process your request. Please check try again.',
        {
          position: 'top-center'
        }
      )
      setIsLoading(false)
      return
    }

    router.refresh()

    setIsLoading(false)
  }

  return {
    isLoading,
    onSubmit
  }
}

export { useJobStatusController }
