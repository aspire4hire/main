import { AppLayout } from '@/components'
import { JobDetail } from '@/features/jobs'
import { getJobPost } from '@/features/jobs/actions'
import { JobLoadingPage } from '@/features/jobs/components'

export default async function EditCompay({
  params,
  searchParams
}: {
  params: Promise<{ [key: string]: string | string[] | undefined }>
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>
}) {
  const { id } = await params

  const { data } = await getJobPost({ id: id as string })

  return (
    <AppLayout loaderComponent={<JobLoadingPage />}>
      <JobDetail job={data} isJobSeekerView />
    </AppLayout>
  )
}
