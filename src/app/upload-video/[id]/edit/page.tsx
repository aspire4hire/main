import { getVideo } from '@/features/spotlight/actions'
import { UploadVideoForm } from '@/features/spotlight/components'

export default async function EditVideo({
  params,
  searchParams
}: {
  params: Promise<{ [key: string]: string | string[] | undefined }>
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>
}) {
  const { id } = await params

  const { data } = await getVideo({ videoId: id as string })

  return (
    <UploadVideoForm
      isEditing
      data={{
        description: data.video_description,
        file: '' as any,
        skills: data.skills.map(skill => skill.id),
        title: data.video_title
      }}
    />
  )
}
