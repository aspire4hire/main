import { Typography } from '@/components'
import { ForgotPasswordForm } from '@/features/auth'
import { Suspense } from 'react'

export default function ForgotPassword() {
  return (
    <section className="flex h-[100dvh] flex-col items-center justify-center bg-gray-50 dark:bg-gray-900">
      <div className="!m-0 flex w-full flex-col items-center justify-center px-6 py-8 md:h-screen md:min-w-[480px] lg:py-0">
        <div className="w-full rounded-lg bg-white shadow dark:border dark:border-gray-700 dark:bg-gray-800 sm:max-w-md md:mt-0 xl:p-0">
          <div className="space-y-4 p-6 sm:p-8 md:space-y-6">
            <h1 className="text-center text-xl font-bold leading-tight tracking-tight text-gray-900 dark:text-white md:text-2xl">
              Forgot your password?
            </h1>
            <Typography
              variant="p"
              className="!mt-1 w-full text-center"
              align="center"
            >
              Enter your email to reset it!
            </Typography>
            <Suspense>
              <ForgotPasswordForm />
            </Suspense>
          </div>
        </div>
      </div>
    </section>
  )
}
