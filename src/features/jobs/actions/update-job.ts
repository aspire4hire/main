'use server'
import { createServerClient } from '@/lib/supabase-server'
import { JobDTO } from '../types'

type UpdateJobParams = {
  body: JobDTO
}

export async function updateJob({ body }: UpdateJobParams): Promise<{
  error: Error
}> {
  const supabase = await createServerClient()

  const { id, company_id, ...restBody } = body

  const bodyData = {
    ...restBody
  }

  console.log('UPDATE JOB BODY: ', bodyData)

  const { data, error } = await supabase.functions.invoke(
    `job-posts-update/${id}`,
    {
      method: 'PUT',
      body: bodyData
    }
  )

  console.log({ error, data })

  return { error }
}
