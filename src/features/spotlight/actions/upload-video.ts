'use client'

import { UploadVideoDTO } from '../types'
import { uploadFileToStorageByClient } from '@/features/common'
import { USER_VIDEOS } from '@/constants/storage'
import { createVideo } from './create-video'

type CreateJobParams = {
  body: UploadVideoDTO
  userId: string
}

export async function UploadVideo({ body, userId }: CreateJobParams): Promise<{
  error: Error
}> {
  const fileUrl = await uploadFileToStorageByClient({
    bucket: USER_VIDEOS,
    file: body.file,
    name: `${userId}/${Date.now()}_${body.file.name}`
  })

  const { error } = await createVideo({
    body: {
      description: body.description,
      skills: body.skills,
      title: body.title,
      video_url: fileUrl as string,
      id: body.id
    }
  })

  console.log({
    error
  })

  return { error }
}
