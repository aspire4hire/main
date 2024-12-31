import { AppLayout, JobPosting } from '@/components'
import { ROUTES } from '@/constants'
import { JOBS_DUMMY } from '@/constants/dump-data'
import Link from 'next/link'

export default function Home() {
  return (
    <AppLayout className="relative">
      <Link href={ROUTES.UPLOAD_VIDEO} className="fixed bottom-28 right-4">
        VIDEO
      </Link>
      <h1 className="mb-5">Home</h1>
      <div className="space-y-4">
        {JOBS_DUMMY.map((job, index) => (
          <JobPosting {...job} key={index} />
        ))}
      </div>
    </AppLayout>
  )
}
