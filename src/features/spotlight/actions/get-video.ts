'use server'

import { createServerClient } from '@/lib/supabase-server'
import { UserVideo } from '../types'

export async function getVideo({ videoId }: { videoId: string }): Promise<{
  data: UserVideo
  error: Error
}> {
  const supabase = await createServerClient()

  const { data, error } = await supabase.functions.invoke(
    `user-videos-get?video-id=${videoId}`,
    {
      method: 'GET'
    }
  )

  if (error) {
    console.log(error)
  }

  return {
    data,
    error
  }
}
