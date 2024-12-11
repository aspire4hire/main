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
  console.log('🚀 ~ signUpAndLogin ~ signUpError:', signUpError)

  if (signUpError) {
    throw new Error(signUpError.message)
  }

  //   const { data: loginData, error: loginError } =
  //     await supabaseServer.auth.signInWithPassword({
  //       email: singUpDto.email,
  //       password: singUpDto.password
  //     })

  //   if (loginError) {
  //     throw new Error(loginError.message)
  //   }

  return {
    signUpData
    // loginData
  }
}
