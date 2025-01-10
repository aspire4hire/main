'use server'

import { createServerClient } from '@/lib/supabase-server'
import { UserVideo } from '../types'

export async function getVideosPaginated({
  limit,
  page,
  userId,
  credentials = [],
  skillTrades = [],
  skills = []
}: {
  limit: number
  page: number
  credentials?: string[]
  skills?: string[]
  skillTrades?: string[]
  userId?: string
}): Promise<{
  data: UserVideo[]
  error: Error
}> {
  const supabase = await createServerClient()

  const userFilter = userId ? `&user-id=${userId}` : ''
  const credentialsFilter = credentials?.length
    ? `&credentials=${credentials.join(',')}`
    : ''
  const skillsFilter = skills?.length ? `&skills=${skills.join(',')}` : ''
  const skillTradesFilter = skillTrades?.length
    ? `&trades=${skillTrades.join(',')}`
    : ''

  const url = `user-videos-get?limit=${limit}&page=${page}${userFilter}${credentialsFilter}${skillsFilter}${skillTradesFilter}`

  const { data, error } = await supabase.functions.invoke(url, {
    method: 'GET'
  })

  if (error) {
    console.log(error)
  }

  return {
    data,
    error
  }
}
