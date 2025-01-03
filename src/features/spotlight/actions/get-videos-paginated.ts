'use server'

import { createServerClient } from '@/lib/supabase-server'
import { UserVideo } from '../types'

export async function getVideosPaginated({
  limit,
  page
}: {
  limit: number
  page: number
}): Promise<{
  data: UserVideo[]
  error: Error
}> {
  const supabase = await createServerClient()

  const { data, error } = await supabase.functions.invoke(
    `user-videos-get?limit=${limit}&page=${page}`,
    {
      method: 'GET'
    }
  )

  console.log({
    data
  })

  if (error) {
    console.log(error)
  }

  return {
    data,
    error
  }
}
