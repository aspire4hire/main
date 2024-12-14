'use server'
import { createServerClient } from '@/lib/supabase-server'
import { OnboardingFormDto, Profile } from '../types'

type UpdateProfileParams = {
  body: OnboardingFormDto
}

export async function updateProfile({ body }: UpdateProfileParams): Promise<{
  data: Profile
  error: Error
}> {
  const supabase = await createServerClient()

  const { data: userSession } = await supabase.auth.getSession()

  const { data, error } = await supabase.functions.invoke(
    `profiles-update/${userSession.session?.user.id}`,
    {
      method: 'PUT',
      body: {
        first_name: body.first_name,
        last_name: body.last_name,
        // profile_pic: body.profile_pic,
        // resume_url: resume_url,
        city_name: body.city_name,
        province_id: body.province_id,
        is_employer: body.is_employer,
        bio: body.bio,
        is_profile_complete: true
      }
    }
  )

  return { data, error }
}
