'use server'

import { createServerClient } from '@/lib/supabase-server'
import { UploadVideoDTO, UserVideo } from '../types'

export async function createVideo({
  body
}: {
  body: Omit<UploadVideoDTO, 'file'> & {
    video_url: string
  }
}): Promise<{
  error: Error
}> {
  const supabase = await createServerClient()

  const { data: user } = await supabase.auth.getUser()

  const bodyData = {
    profile_id: user.user?.id,
    video_url: body.video_url,
    video_title: body.title,
    video_description: body.description,
    skills: body.skills
  }

  const { data, error } = await supabase.functions.invoke(
    'user-videos-create',
    {
      method: 'POST',
      body: bodyData
    }
  )

  if (error) {
    console.log(error)
  }

  return {
    error
  }
}
