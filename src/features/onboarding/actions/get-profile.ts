'use server'
import { createServerClient } from '@/lib/supabase-server'
import { Profile } from '../types'

export async function getUserProfile(): Promise<{
  data: Profile
  error: Error
}> {
  const supabase = await createServerClient()
  const { data: user } = await supabase.auth.getUser()

  const { data, error } = await supabase.functions.invoke(
    `user-profiles-get/${user.user?.id}`,
    {
      method: 'GET'
    }
  )

  console.log('PROFILE: ', {
    data
  })

  const profile = Array.isArray(data) ? data[0] : data

  if (error || !profile) {
    console.log(error)
  }

  return {
    data: profile,
    error
  }
}
