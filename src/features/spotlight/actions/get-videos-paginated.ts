'use server'

import { createServerClient } from '@/lib/supabase-server'
import { UserVideo } from '../types'

export async function getVideosPaginated({
  limit,
  page,
  userId
}: {
  limit: number
  page: number
  userId?: string
}): Promise<{
  data: UserVideo[]
  error: Error
}> {
  const supabase = await createServerClient()

  const userFilter = userId ? `&user-id=${userId}` : ''

  const { data, error } = await supabase.functions.invoke(
    `user-videos-get?limit=${limit}&page=${page}${userFilter}`,
    {
      method: 'GET'
    }
  )

  console.log({
    cantidad: data.length,
    page,
    limit
  })

  if (error) {
    console.log(error)
  }

  return {
    data,
    error
  }
}
