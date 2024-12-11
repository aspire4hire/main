// app/api/actions.ts (ejemplo)
'use server'

import { createServerClient } from '@/lib/supabase-server'
import { LoginDto } from '../types'

export async function handleLogin(data: LoginDto) {
  const supabaseServer = await createServerClient()
  const response = await supabaseServer.auth.signInWithPassword({
    email: data.email,
    password: data.password
  })

  return response
}
