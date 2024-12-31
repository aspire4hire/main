'use server'
import { createServerClient } from '@/lib/supabase-server'
import { Job } from '../types'

export async function getPublicJobPosts(): Promise<{
  data: Job[]
  error: Error
}> {
  const supabase = await createServerClient()

  const { data, error } = await supabase.functions.invoke(`job-posts-get`, {
    method: 'GET'
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
