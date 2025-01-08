'use server'
import { createServerClient } from '@/lib/supabase-server'
import { UpdateJobStatusDTO } from '../types'

type UpdateJobStatusParams = {
  body: UpdateJobStatusDTO
}

export async function updateJobStatus({
  body
}: UpdateJobStatusParams): Promise<{
  error: Error
}> {
  const supabase = await createServerClient()

  const { jobId, status } = body

  const bodyData = {
    job_status: status
  }

  console.log('UPDATE JOB STATUS BODY: ', bodyData)

  const { data, error } = await supabase.functions.invoke(
    `job-posts-update/${jobId}`,
    {
      method: 'PUT',
      body: bodyData
    }
  )

  console.log({ data })

  if (error) {
    console.log(error)
  }

  return { error }
}
