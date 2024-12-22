'use server'

import { createServerClient } from '@/lib/supabase-server'
import { ChangeEmailDto } from '../types'

export async function updateUserEmail(data: ChangeEmailDto) {
  const supabaseServer = await createServerClient()

  const { data: response, error: changeEmailError } =
    await supabaseServer.auth.updateUser({
      email: data.email
    })

  if (changeEmailError) {
    console.error(changeEmailError.message)
  }

  return {
    response,
    changeEmailError
  }
}
