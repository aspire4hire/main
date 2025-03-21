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
  const today = new Date()

  const year = today.getFullYear()
  const month = String(today.getMonth() + 1).padStart(2, '0')
  const day = String(today.getDate()).padStart(2, '0')

  const path = `${userId}/${year}/${month}/${day}/${Date.now()}_${body.file.name}`

  const fileUrl = await uploadFileToStorageByClient({
    bucket: USER_VIDEOS,
    file: body.file,
    name: path
  })

  const { error } = await createVideo({
    body: {
      description: body.description,
      skills: body.skills,
      title: body.title,
      video_url: fileUrl as string
      // id: body.id
    } as any
  })

  console.log({
    error
  })

  return { error }
}
