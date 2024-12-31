'use server'

import { createServerClient } from '@/lib/supabase-server'
import { Job, JobApplicant } from '../types'

export async function getJobApplicants({ jobId }: { jobId: string }): Promise<{
  data: JobApplicant[]
  error: Error
}> {
  const supabase = await createServerClient()

  const { data: user } = await supabase.auth.getUser()

  const { data, error } = await supabase.functions.invoke(
    `applicants-get?job_id=${jobId}&user_id=${user.user?.id}`,
    {
      method: 'GET'
    }
  )

  if (error || !data) {
    console.log(error)
  }

  return {
    data,
    error
  }
}
