import { supabaseClient } from '@/lib/supabase-client'

type Params = {
  bucket: string
  file: File | string | null
  name: string
}

export async function uploadFileToStorageByClient(params: Params) {
  const { bucket, file, name } = params

  if (!file || typeof file === 'string') return null

  try {
    const { data, error } = await supabaseClient.storage
      .from(bucket)
      .upload(name, file, {
        upsert: true
      })
    if (data?.path && !error) {
      const {
        data: { publicUrl }
      } = await supabaseClient.storage.from(bucket).getPublicUrl(data?.path)

      return publicUrl
    }
  } catch (error) {
    console.log('🚀 ~ uploadFileError ~ error:', error)
  }
}
