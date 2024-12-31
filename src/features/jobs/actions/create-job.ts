'use server'
import { createServerClient } from '@/lib/supabase-server'
import { JobDTO } from '../types'

type CreateJobParams = {
  body: JobDTO
}

export async function createJob({ body }: CreateJobParams): Promise<{
  error: Error
}> {
  const supabase = await createServerClient()

  const { data: user } = await supabase.auth.getUser()

  const bodyData = {
    ...body,
    poster_user_id: user.user?.id
  }

  console.log('CREATE COMPANY BODY: ', bodyData)

  const { data, error } = await supabase.functions.invoke('job-posts-create', {
    method: 'POST',
    body: bodyData
  })

  console.log({ error, data })

  return { error }
}
