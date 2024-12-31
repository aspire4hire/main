import { AppLayout } from '@/components'
import { PublicJobPosts } from '@/features/jobs'
import { getPublicJobPosts } from '@/features/jobs/actions'

export default async function JobPostPublic() {
  const { data } = await getPublicJobPosts()

  return (
    <AppLayout backButton={false}>
      <PublicJobPosts jobs={data} />
    </AppLayout>
  )
}
