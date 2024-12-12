'use server'
import { createServerClient } from '@/lib/supabase-server'

export async function getProvinces(): Promise<any[]> {
  const supabase = await createServerClient()
  const { data, error } = await supabase.from('provinces').select('*')

  if (error) {
    throw new Error(`Error fetching data: ${error.message}`)
  }

  return data
}
