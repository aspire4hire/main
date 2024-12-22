'use server'

import { createServerClient } from '@/lib/supabase-server'
import { UpdatePassword } from '../types'

export async function updatePassword(data: UpdatePassword) {
  const supabaseServer = await createServerClient()

  const { data: response, error } = await supabaseServer.auth.updateUser({
    password: data.password
  })

  if (error) {
    console.error(error.message)
  }

  return {
    response,
    error
  }
}
