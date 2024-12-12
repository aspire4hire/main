'use server'

import { createServerClient } from '@/lib/supabase-server'
import { SignUpLoginDto } from '../types'

export async function signUpAndLogin(singUpDto: SignUpLoginDto) {
  const supabaseServer = await createServerClient()

  const { data: signUpData, error: signUpError } =
    await supabaseServer.auth.signUp({
      email: singUpDto.email,
      password: singUpDto.password
    })

  if (signUpError) {
    throw new Error(signUpError.message)
  }

  return {
    signUpData
  }
}
