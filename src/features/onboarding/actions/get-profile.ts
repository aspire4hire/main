'use server'
import { createServerClient } from '@/lib/supabase-server'
import { Profile } from '../types'

export async function getUserProfile(): Promise<{
  data: Profile
  error: Error
}> {
  const supabase = await createServerClient()
  const { data: userSession } = await supabase.auth.getSession()

  const { data, error } = await supabase.functions.invoke(
    `profiles-get/${userSession.session?.user.id}`,
    {
      method: 'GET'
    }
  )

  const profile = Array.isArray(data) ? data[0] : data

  console.log('🚀 ~ getUserProfile ~ profile:', profile)

  if (error || !profile) {
    throw new Error(`Error fetching data: ${error.message}`)
  }

  return {
    data: profile,
    error
  }
}
