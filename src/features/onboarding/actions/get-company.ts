'use server'
import { Company } from '@/features/company'
import { createServerClient } from '@/lib/supabase-server'

export async function getCompany({ id }: { id: string }): Promise<{
  data: Company
  error: Error
}> {
  const supabase = await createServerClient()

  const { data, error } = await supabase.functions.invoke(
    `companies-get/${id}`,
    {
      method: 'GET'
    }
  )

  const company = Array.isArray(data) ? data[0] : data

  if (error || !company) {
    console.log(error)
  }

  return {
    data: company,
    error
  }
}
