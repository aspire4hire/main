'use server'
import { createServerClient } from '@/lib/supabase-server'
import { CreateApplicantDTO } from '../types'

type CreateJobParams = {
  body: CreateApplicantDTO
}

export async function CreateApplicant({ body }: CreateJobParams): Promise<{
  error: Error
}> {
  const supabase = await createServerClient()

  const { data: user } = await supabase.auth.getUser()

  const bodyData = {
    ...body,
    profile_id: user.user?.id
  }

  console.log('CREATE APPLICANT BODY: ', bodyData)

  const { data, error } = await supabase.functions.invoke('applicants-create', {
    method: 'POST',
    body: bodyData
  })

  console.log({ error, data })

  return { error }
}
