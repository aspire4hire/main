'use server'

import { MUX_THUMBNAIL_URL } from '@/lib'

export async function getVideoThumbnail({
  playback_id
}: {
  playback_id?: string
} = {}): Promise<{
  data: any
}> {
  const url = `https://image.mux.com/uMs7Qn3LlTUXldin98QUPrei5oearcuRSh4VmC6FwY8/thumbnail.webp?width=128&height=168&format=webp`
  //   const url = `${MUX_THUMBNAIL_URL}/${playback_id}/thumbnail.webp?width=128&height=168&format=webp`

  console.log({ url })

  const response = await fetch(url, {
    method: 'GET'
  })

  const imageBuffer = await response.blob()

  const blob = new Blob([imageBuffer], { type: 'image/png' })
  const url1 = URL.createObjectURL(blob)
  console.log('🚀 ~ url1:', url1)

  return {
    data: imageBuffer
  }
}
