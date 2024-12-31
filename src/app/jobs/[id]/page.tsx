import { AppLayout } from '@/components'
import { JobDetail } from '@/features/jobs'
import { getJobPost } from '@/features/jobs/actions'

export default async function EditCompay({
  params,
  searchParams
}: {
  params: Promise<{ [key: string]: string | string[] | undefined }>
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>
}) {
  const { id } = await params

  const { data } = await getJobPost({ id: id as string })
  console.log('🚀 ~ data:', data)

  return (
    <AppLayout>
      <JobDetail job={data} isJobSeekerView />
    </AppLayout>
  )
}
