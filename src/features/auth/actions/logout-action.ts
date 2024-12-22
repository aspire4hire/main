'use server'

import { createServerClient } from '@/lib/supabase-server'

export async function getLogout() {
  const supabaseServer = await createServerClient()
  const { error } = await supabaseServer.auth.signOut()

  return { error }
}
