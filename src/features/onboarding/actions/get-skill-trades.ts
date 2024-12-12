'use server'
import { createServerClient } from '@/lib/supabase-server'

export async function getSkillTrades(): Promise<any[]> {
  const supabase = await createServerClient()
  const { data, error } = await supabase.from('skilled_trades').select('*')

  if (error) {
    throw new Error(`Error fetching data: ${error.message}`)
  }

  return data
}
