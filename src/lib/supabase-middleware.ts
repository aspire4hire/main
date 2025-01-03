import { ROUTES } from '@/constants'
import { createServerClient } from '@supabase/ssr'
import { NextResponse, type NextRequest } from 'next/server'

export async function updateSession(request: NextRequest) {
  let supabaseResponse = NextResponse.next({
    request
  })

  const supabase = createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    {
      cookies: {
        getAll() {
          return request.cookies.getAll()
        },
        setAll(cookiesToSet) {
          cookiesToSet.forEach(({ name, value }) =>
            request.cookies.set(name, value)
          )
          supabaseResponse = NextResponse.next({
            request
          })
          cookiesToSet.forEach(({ name, value, options }) =>
            supabaseResponse.cookies.set(name, value, options)
          )
        }
      }
    }
  )

  // Do not run code between createServerClient and
  // supabase.auth.getUser(). A simple mistake could make it very hard to debug
  // issues with users being randomly logged out.

  // IMPORTANT: DO NOT REMOVE auth.getUser()

  const {
    data: { user }
  } = await supabase.auth.getUser()

  const {
    data: { session }
  } = await supabase.auth.getSession()

  if (
    !user &&
    !request.nextUrl.pathname.startsWith(ROUTES.LOGIN) &&
    !request.nextUrl.pathname.startsWith(ROUTES.SIGN_UP) &&
    !request.nextUrl.pathname.startsWith(ROUTES.EMAIL_VERIFICATION) &&
    !request.nextUrl.pathname.startsWith('/auth/confirm')
  ) {
    // no user, potentially respond by redirecting the user to the login page
    const url = request.nextUrl.clone()
    url.pathname = ROUTES.LOGIN
    return NextResponse.redirect(url)
  }

  if (
    !request.nextUrl.pathname.startsWith(ROUTES.LOGIN) &&
    !request.nextUrl.pathname.startsWith(ROUTES.SIGN_UP) &&
    !request.nextUrl.pathname.startsWith(ROUTES.EMAIL_VERIFICATION) &&
    !request.nextUrl.pathname.startsWith('/auth/confirm')
  ) {
    const { data } = await supabase
      .from('profiles')
      .select('is_profile_complete')
      .eq('profile_id', user!.id)
      .single()

    if (
      user &&
      !data?.is_profile_complete &&
      !request.nextUrl.pathname.startsWith(ROUTES.ONBOARDING)
    ) {
      const url = request.nextUrl.clone()
      url.pathname = ROUTES.ONBOARDING
      return NextResponse.redirect(url)
    }
  }
  // IMPORTANT: You *must* return the supabaseResponse object as it is.
  // If you're creating a new response object with NextResponse.next() make sure to:
  // 1. Pass the request in it, like so:
  //    const myNewResponse = NextResponse.next({ request })
  // 2. Copy over the cookies, like so:
  //    myNewResponse.cookies.setAll(supabaseResponse.cookies.getAll())
  // 3. Change the myNewResponse object to fit your needs, but avoid changing
  //    the cookies!
  // 4. Finally:
  //    return myNewResponse
  // If this is not done, you may be causing the browser and server to go out
  // of sync and terminate the user's session prematurely!

  return supabaseResponse
}
