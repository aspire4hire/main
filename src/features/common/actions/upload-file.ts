'use server'

import { createServerClient } from '@/lib/supabase-server'

type Params = {
  bucket: string
  file: File | string | null
  name: string
}

export async function uploadFileToStorage(params: Params) {
  const { bucket, file, name } = params

  if (!file || typeof file === 'string') return null

  const supabase = await createServerClient()

  try {
    const { data, error } = await supabase.storage
      .from(bucket)
      .upload(name, file, {
        upsert: true
      })

    if (data?.path && !error) {
      const {
        data: { publicUrl }
      } = await supabase.storage.from(bucket).getPublicUrl(data?.path)

      return publicUrl
    }
  } catch (error) {
    console.log('🚀 ~ uploadFileError ~ error:', error)
  }
}
