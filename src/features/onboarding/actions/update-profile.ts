'use server'
import { createServerClient } from '@/lib/supabase-server'
import { OnboardingFormDto, Profile } from '../types'
import { uploadFileToStorage } from '@/features/common'
import { COMPANY_LOGOS, PROFILE_PICS, RESUMES } from '@/constants/storage'

type UpdateProfileParams = {
  body: OnboardingFormDto
}

export async function updateProfile({ body }: UpdateProfileParams): Promise<{
  data: Profile
  error: Error
}> {
  const supabase = await createServerClient()

  console.log({
    body
  })

  const { data: userSession } = await supabase.auth.getUser()

  let profilePic = body?.profile_pic
  let resumePic = body?.resume_url
  let logoPic = body?.logo_url

  const [profilePicUrl, resumePicUrl, logoPicUrl] = await Promise.all([
    uploadFileToStorage({
      bucket: PROFILE_PICS,
      file: profilePic,
      name: `${userSession.user?.id}_${Date.now()}`
    }),
    uploadFileToStorage({
      bucket: RESUMES,
      file: resumePic,
      name: `${userSession.user?.id}_${Date.now()}`
    }),
    uploadFileToStorage({
      bucket: COMPANY_LOGOS,
      file: logoPic,
      name: `${userSession.user?.id}_${Date.now()}`
    })
  ])

  if (profilePicUrl) profilePic = profilePicUrl
  if (resumePicUrl) resumePic = resumePicUrl
  if (logoPicUrl) logoPic = logoPicUrl

  const companies = body?.name && [
    {
      name: body.name,
      description: body.description,
      why_work_with_us: body.why_work_with_us,
      logo_url: logoPic,
      website_url: body.website_url,
      address: body.address,
      is_admin: true,
      company_role: 'b566aef7-f859-4019-827e-c2602659204b'
    }
  ]

  const bodyData = {
    ...(body?.first_name && { first_name: body.first_name }),
    ...(body?.last_name && { last_name: body.last_name }),
    ...(profilePic && { profile_pic: profilePic }),
    ...(body?.city_name && { city_name: body.city_name }),
    ...(body?.province_id && { province_id: body.province_id }),
    ...(typeof body?.is_employer === 'boolean' && {
      is_employer: body.is_employer
    }),
    ...(typeof body?.is_profile_complete === 'boolean' && {
      is_profile_complete: body.is_profile_complete
    }),
    ...(body?.bio && { bio: body.bio }),
    ...(resumePic && { resume_url: resumePic }),
    ...((body?.skilled_trades || [])?.length > 0 && {
      skilled_trades: body.skilled_trades
    }),
    ...((body?.credentials || [])?.length > 0 && {
      credentials: body.credentials
    }),
    ...((companies || [])?.length > 0 && { companies })
  }

  const { data, error } = await supabase.functions.invoke(
    `user-profiles-update/${userSession.user?.id}`,
    {
      method: 'PUT',
      body: bodyData
    }
  )

  console.log({ data })
  console.log(error)

  return { data, error }
}
