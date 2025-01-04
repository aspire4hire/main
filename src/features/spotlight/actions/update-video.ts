'use server'

import { createServerClient } from '@/lib/supabase-server'
import { UploadVideoDTO } from '../types'

export async function updateVideo({
  body
}: {
  body: Omit<UploadVideoDTO, 'file'>
}): Promise<{
  error: Error
}> {
  const supabase = await createServerClient()

  const { data: user } = await supabase.auth.getUser()

  const bodyData = {
    // profile_id: user.user?.id,
    video_title: body.title,
    video_description: body.description,
    skills: body.skills
  }

  const { data, error } = await supabase.functions.invoke(
    'user-videos-update',
    {
      method: 'PUT',
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
