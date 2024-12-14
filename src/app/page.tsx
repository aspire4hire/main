import { AppLayout, JobPosting } from '@/components'
import { JOBS_DUMMY } from '@/constants/dump-data'

export default function Home() {
  return (
    <AppLayout>
      <div className="m-auto max-w-md">
        <h1 className="mb-5">Home</h1>
        <div className="space-y-4">
          {JOBS_DUMMY.map((job, index) => (
            <JobPosting {...job} key={index} />
          ))}
        </div>
      </div>
    </AppLayout>
  )
}
