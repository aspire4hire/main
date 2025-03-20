import React from 'react'

import { SignUpForm } from '@/features/auth'
import { createServerClient } from '@/lib/supabase-server'
import { redirect } from 'next/navigation'
import { ROUTES } from '@/constants'

const SignUpPage = async () => {
  const supabase = await createServerClient()

  const { data } = await supabase.auth.getUser()

  if (data.user) {
    redirect(ROUTES.HOME)
  }

  return (
    <section className="flex h-[100dvh] flex-col items-center justify-center bg-gray-50 dark:bg-gray-900">
      <div className="!m-0 flex w-full flex-col items-center justify-center px-6 py-8 md:h-screen md:min-w-[480px] lg:py-0">
        <div className="w-full rounded-lg bg-white shadow dark:border dark:border-gray-700 dark:bg-gray-800 sm:max-w-md md:mt-0 xl:p-0">
          <div className="space-y-4 p-6 sm:p-8 md:space-y-6">
            <img
              src="/assets/logo_4h.png"
              className="mx-auto mb-5 w-40"
              alt="company logo"
            />
            <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 dark:text-white md:text-2xl">
              Create your account
            </h1>
            <SignUpForm />
          </div>
        </div>
      </div>
    </section>
  )
}

export default SignUpPage
