'use server'
import { createServerClient } from '@/lib/supabase-server'

export async function getSkills(): Promise<any[]> {
  const supabase = await createServerClient()
  const { data, error } = await supabase.from('skills').select('*')

  if (error) {
    throw new Error(`Error fetching data: ${error.message}`)
  }

  return data
}
