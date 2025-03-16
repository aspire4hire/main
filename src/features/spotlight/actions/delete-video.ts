'use server'

import { createServerClient } from '@/lib/supabase-server'
import { UploadVideoDTO } from '../types'

export async function deleteVideo({
  body
}: {
  body: Pick<UploadVideoDTO, 'id'>
}): Promise<{
  error: Error
}> {
  const supabase = await createServerClient()

  const bodyData = {
    id: body.id
  }

  const { data, error } = await supabase.functions.invoke(
    `user-videos-delete/${body.id}`,
    {
      method: 'DELETE',
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
