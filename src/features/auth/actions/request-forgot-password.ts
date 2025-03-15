'use server'

import { createServerClient } from '@/lib/supabase-server'

export async function requestForgotPassword(
  data: { email: string },
  redirectTo: string
) {
  const supabaseServer = await createServerClient()
  const { error } = await supabaseServer.auth.resetPasswordForEmail(
    data.email,
    {
      redirectTo
    }
  )

  return { error }
}
