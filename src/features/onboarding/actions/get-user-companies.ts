'use server'
import { Company } from '@/features/company'
import { createServerClient } from '@/lib/supabase-server'

export async function getUserCompanies(): Promise<{
  data: Company
  error: Error
}> {
  const supabase = await createServerClient()
  const { data: user } = await supabase.auth.getUser()

  const { status } = await supabase
    .from('Companies')
    .select('*')
    .eq('user_id', user.user?.id)

  const { data, error } = await supabase.functions.invoke(
    `user-Companys-get/${user.user?.id}`,
    {
      method: 'GET'
    }
  )

  const profile = Array.isArray(data) ? data[0] : data

  if (error || !profile) {
    console.log(error)
    throw new Error(`Error fetching data: ${error.message}`)
  }

  return {
    data: profile,
    error
  }
}
