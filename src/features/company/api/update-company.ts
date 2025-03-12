'use server'
import { createServerClient } from '@/lib/supabase-server'
import { uploadFileToStorage } from '@/features/common'
import { Company } from '../types'
import { COMPANY_LOGOS } from '@/constants/storage'
import { normalizeUrl } from '@/utils'

type UpdateCompanyParams = {
  body: Partial<Company>
}

export async function updateCompany({ body }: UpdateCompanyParams) {
  const supabase = await createServerClient()

  const { data: userSession } = await supabase.auth.getUser()

  let logoPic = body?.logo_url as any

  const [logoPicUrl] = await Promise.all([
    uploadFileToStorage({
      bucket: COMPANY_LOGOS,
      file: logoPic,
      name: `${userSession.user?.id}_${Date.now()}`
    })
  ])

  if (logoPicUrl) logoPic = logoPicUrl

  const bodyData = {
    ...(body.name && { name: body.name }),
    ...(body.description && { description: body.description }),
    ...(body.why_work_with_us && { why_work_with_us: body.why_work_with_us }),
    ...(logoPic && { logo_url: logoPic }),
    ...(body.website_url && { website_url: normalizeUrl(body.website_url) }),
    ...(body.address && { address: body.address })
  }

  const { data, error } = await supabase.functions.invoke(
    `companies-update/${body.id}`,
    {
      method: 'PUT',
      body: bodyData
    }
  )

  console.log({ data, error, bodyData })

  return { data, error }
}
