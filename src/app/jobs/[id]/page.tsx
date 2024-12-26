import { AppLayout, SettingsButton } from '@/components'
import { JOB_POSTS_DUMMY } from '@/constants/dump-data'
import { JobDetail } from '@/features/jobs'

export default async function EditCompay({
  params
}: {
  params: Promise<{ [key: string]: string | string[] | undefined }>
}) {
  const { id } = await params

  return (
    <AppLayout secondNavButton={<SettingsButton />}>
      <JobDetail job={JOB_POSTS_DUMMY[0]} />
    </AppLayout>
  )
}
