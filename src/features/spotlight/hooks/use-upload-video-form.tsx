import { useForm } from 'react-hook-form'
import { UploadVideoDTO } from '../types'
import React, { useEffect, useState } from 'react'
import { toast } from 'sonner'
import { UploadVideo } from '../actions'
import { useRouter } from 'next/navigation'
import { ROUTES } from '@/constants'
import { useCurrentSessionStore } from '@/features/auth'

type UseUploadVideoFormParams = {
  data?: UploadVideoDTO
}

export const useUploadVideoForm = ({ data }: UseUploadVideoFormParams = {}) => {
  const { profile } = useCurrentSessionStore()
  const router = useRouter()
  const form = useForm<UploadVideoDTO>({
    defaultValues: {
      skills: []
    }
  })
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    if (data) {
      form.reset({
        description: data.description,
        file: data.file,
        skills: data.skills,
        title: data.title
      })
    }
  }, [data])

  const onSubmit = async (data: UploadVideoDTO) => {
    setIsLoading(true)
    const { error } = await UploadVideo({
      body: data,
      userId: profile?.profile_id as string
    })

    if (error) {
      toast.error('We are creating your video. Please try again.', {
        position: 'top-center'
      })
      setIsLoading(false)
      return
    }
    router.push(ROUTES.HOME)
  }

  const handleChageVideo = (
    event: React.ChangeEvent<HTMLInputElement>,
    onChange: (value: any) => void
  ) => {
    console.log('---- VALUE -- ', event.target.files)
    const file = event.target.files?.[0]

    if (file) {
      const MAX_FILE_SIZE_IN_GB = 1

      const fileSizeInGB = file.size / 1024 ** 3

      if (fileSizeInGB > MAX_FILE_SIZE_IN_GB) {
        toast.warning(
          `The video size is ${fileSizeInGB.toFixed(2)} GB. The maximum size allowed is ${MAX_FILE_SIZE_IN_GB} GB.`,
          {
            position: 'top-center'
          }
        )
        return
      }
      onChange(file)
    }
  }

  return {
    form,
    onSubmit,
    isLoading,
    handleChageVideo
  }
}
