'use server'
import { createServerClient } from '@/lib/supabase-server'
import { Credential } from '../types'

export async function getCredentials(): Promise<Credential[]> {
  const supabase = await createServerClient()
  const { data, error } = await supabase.from('credentials').select('*')

  if (error) {
    throw new Error(`Error fetching data: ${error.message}`)
  }

  return data
}
