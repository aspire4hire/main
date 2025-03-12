import { AppLayout, Typography } from '@/components'
import { PublicJobPosts } from '@/features/jobs'
import { getPublicJobPosts } from '@/features/jobs/actions'

export default async function JobPostPublic() {
  const { data } = await getPublicJobPosts()

  return (
    <AppLayout backButton={false}>
      <Typography variant="h2" className="mb-3 text-2xl font-bold">
        Jobs
      </Typography>
      <PublicJobPosts jobs={data} />
    </AppLayout>
  )
}
