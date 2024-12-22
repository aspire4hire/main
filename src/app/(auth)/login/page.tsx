import { ROUTES } from '@/constants'
import { LoginForm } from '@/features/auth/components/LoginForm'
import { createServerClient } from '@/lib/supabase-server'
import { redirect } from 'next/navigation'

export default async function Login() {
  const supabase = await createServerClient()

  const { data } = await supabase.auth.getUser()

  if (data.user) {
    redirect(ROUTES.HOME)
  }

  return (
    <section className="flex h-[100dvh] flex-col items-center justify-center bg-gray-50 dark:bg-gray-900">
      <div className="!m-0 flex w-full flex-col items-center justify-center px-6 py-8 md:h-screen md:min-w-[480px] lg:py-0">
        {/* <Image
          className="mr-2 h-8 w-8"
          src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/logo.svg"
          alt="logo"
          width={32}
          height={32}
        /> */}
        <div className="w-full rounded-lg bg-white shadow dark:border dark:border-gray-700 dark:bg-gray-800 sm:max-w-md md:mt-0 xl:p-0">
          <div className="space-y-4 p-6 sm:p-8 md:space-y-6">
            <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 dark:text-white md:text-2xl">
              Sign in to your account
            </h1>
            <LoginForm />
          </div>
        </div>
      </div>
    </section>
  )
}
