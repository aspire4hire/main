import React from 'react'

// import { SignUpForm } from '@/features/auth'
import { createServerClient } from '@/lib/supabase-server'
import { redirect } from 'next/navigation'
import { ROUTES } from '@/constants'
import { Typography } from '@/components'
import Image from 'next/image'

type Props = any

const SignUpPage = async ({ searchParams }: Props) => {
  const supabase = await createServerClient()

  const { data } = await supabase.auth.getSession()

  if (data.session) {
    redirect(ROUTES.HOME)
  }

  return (
    <section className="flex h-[100dvh] flex-col items-center justify-center bg-gray-50 dark:bg-gray-900">
      <div className="!m-0 flex w-full flex-col items-center justify-center px-6 py-8 md:h-screen md:min-w-[480px] lg:py-0">
        <div className="w-full rounded-lg bg-white shadow dark:border dark:border-gray-700 dark:bg-gray-800 sm:max-w-md md:mt-0 xl:p-0">
          <div className="space-y-4 p-6 sm:p-8 md:space-y-6">
            <Image
              className="mx-auto h-32 w-32"
              src="/assets/email_verification.png"
              alt="logo"
              width={248}
              height={248}
            />
            <Typography variant="h2" className="text-center font-semibold">
              Verify your email address
            </Typography>
            <Typography variant="p">
              A verification email has been sent to your email{' '}
              <Typography variant="span" className="font-bold">
                {searchParams.email}
              </Typography>
              .
            </Typography>
            <Typography variant="p">
              Please check your email and click the link provided to complete
              your account registration.
            </Typography>
          </div>
        </div>
      </div>
    </section>
  )
}

export default SignUpPage
