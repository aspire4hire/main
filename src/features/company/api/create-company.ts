'use server'
import { createServerClient } from '@/lib/supabase-server'
import { OnboardingCompanyDto, Profile } from '../types'

type CreateCompanyParams = {
  body: OnboardingCompanyDto
}

export async function createCompany({ body }: CreateCompanyParams): Promise<{
  data: Profile
  error: Error
}> {
  const supabase = await createServerClient()

  const { data, error } = await supabase.functions.invoke('companies-create', {
    method: 'POST',
    body
  })

  console.log(error)

  return { data, error }
}
