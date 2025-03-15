'use server'

import { createServerClient } from '@/lib/supabase-server'

export async function resetPassword(data: { password: string }) {
  const supabaseServer = await createServerClient()
  let error = null
  let responseData = null
  await supabaseServer.auth.onAuthStateChange(async (event, session) => {
    if (event === 'PASSWORD_RECOVERY') {
      const { error: errorOnUpdate, data: dataOnUpdate } =
        await supabaseServer.auth.updateUser({
          password: data.password
        })
      error = errorOnUpdate
      responseData = dataOnUpdate
    }
  })

  return { error, data: responseData }
}
