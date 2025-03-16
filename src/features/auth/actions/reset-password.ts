'use server'

import { createServerClient } from '@/lib/supabase-server'

export async function resetPassword(data: { password: string }) {
  const supabaseServer = await createServerClient()

  const { error, data: dataOnUpdate } = await supabaseServer.auth.updateUser({
    password: data.password
  })

  return { error, data: dataOnUpdate }
}
