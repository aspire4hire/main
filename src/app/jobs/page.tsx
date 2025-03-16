'use client'

import { AppLayout, Typography } from '@/components'
import { PublicJobPosts } from '@/features/jobs'
import { JobPostSkeleton } from '@/features/jobs/components'
import { usePublicJobs } from '@/features/jobs/hooks'

export default function JobPostPublic() {
  const { data, isLoading } = usePublicJobs()

  return (
    <AppLayout backButton={false} hideTopNav>
      <Typography variant="h2" className="mb-3 mt-4 text-2xl font-bold">
        Jobs
      </Typography>
      {isLoading ? (
        <div className="flex flex-col gap-3">
          {Array.from({ length: 7 }).map((_, index) => (
            <JobPostSkeleton key={index} />
          ))}
        </div>
      ) : (
        <PublicJobPosts jobs={data} />
      )}
    </AppLayout>
  )
}
