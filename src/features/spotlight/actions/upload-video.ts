'use server'
import { createServerClient } from '@/lib/supabase-server'
import { UploadVideoDTO } from '../types'
import { uploadFileToStorage } from '@/features/common'
import { USER_VIDEOS } from '@/constants/storage'

type CreateJobParams = {
  body: UploadVideoDTO
}

export async function UploadVideo({ body }: CreateJobParams): Promise<{
  error: boolean
}> {
  const supabase = await createServerClient()

  const { data: user } = await supabase.auth.getUser()

  console.log('---------- ENTRO -------- ', user.user?.id)

  const fileUrl = await uploadFileToStorage({
    bucket: USER_VIDEOS,
    file: body.file,
    name: `${user.user?.id}/${Date.now()}_${body.file.name}`
  })

  const bodyData = {
    profile_id: user.user?.id,
    video_url: fileUrl,
    video_title: body.title,
    video_description: body.description,
    skills: body.skills
  }

  console.log('CREATE VIDEO BODY: ', bodyData)

  const { data, error } = await supabase.functions.invoke(
    'user-videos-create',
    {
      method: 'POST',
      body: bodyData
    }
  )

  console.log({
    error
  })

  return { error }
}
