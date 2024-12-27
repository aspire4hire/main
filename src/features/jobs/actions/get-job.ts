'use server'
import { createServerClient } from '@/lib/supabase-server'
import { Job } from '../types'

export async function getJobPost({ id }: { id: string }): Promise<{
  data: Job
  error: Error
}> {
  const supabase = await createServerClient()

  const { data, error } = await supabase.functions.invoke(
    `job-posts-get/${id}`,
    {
      method: 'GET'
    }
  )

  const jobPost = Array.isArray(data) ? data[0] : data

  if (error || !jobPost) {
    console.log(error)
  }

  return {
    data: jobPost,
    error
  }
}
