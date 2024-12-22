'use server'

import { createServerClient } from '@/lib/supabase-server'
import { SignUpLoginDto } from '../types'

export async function signUpAndLogin(singUpDto: SignUpLoginDto) {
  const supabaseServer = await createServerClient()

  console.log({
    singUpDto
  })

  const { data: signUpData, error: signUpError } =
    await supabaseServer.auth.signUp({
      email: singUpDto.email,
      password: singUpDto.password
    })

  if (signUpError) {
    console.log(signUpError)
  }

  console.log({
    data: signUpData,
    error: signUpError
  })

  return {
    signUpData,
    error: signUpError
  }
}
