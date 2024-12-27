import { AppLayout, EditButton } from '@/components'
import { ROUTES } from '@/constants'

import { JobDetail } from '@/features/jobs'
import { getJobPost } from '@/features/jobs/actions'

export default async function JobPostCompanyPageDetail({
  params
}: {
  params: Promise<{ [key: string]: string | string[] | undefined }>
}) {
  const { id, jobId } = await params

  const { data } = await getJobPost({ id: jobId as string })

  return (
    <AppLayout
      secondNavButton={
        <EditButton
          href={ROUTES.EDIT_JOB_POST({
            companyId: String(id),
            id: String(jobId)
          })}
        />
      }
      hideBottomBar
    >
      <JobDetail job={data} />
    </AppLayout>
  )
}
