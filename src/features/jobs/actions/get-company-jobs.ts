'use server'
import { createServerClient } from '@/lib/supabase-server'
import { Job } from '../types'

export async function getCompanyJobs({
  companyId
}: {
  companyId: string
}): Promise<{
  data: Job[]
  error: Error
}> {
  const supabase = await createServerClient()

  const { data: user } = await supabase.auth.getUser()

  const { data, error } = await supabase.functions.invoke(
    `job-posts-get?company_id=${companyId}&user_id=${user.user?.id}`,
    {
      method: 'GET'
    }
  )

  console.log({
    url: `job-posts-get?company_id=${companyId}&user_id=${user.user?.id}`
  })

  const jobPost = data || []

  if (error || !jobPost) {
    console.log(error)
  }

  return {
    data: jobPost,
    error
  }
}
