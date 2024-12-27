import { UpdateJobPostForm } from '@/features/jobs'
import { getJobPost } from '@/features/jobs/actions'

export default async function EditCompay({
  params
}: {
  params: Promise<{ [key: string]: string | string[] | undefined }>
}) {
  const { jobId } = await params
  const { data } = await getJobPost({ id: jobId as string })

  return (
    <UpdateJobPostForm
      data={{
        id: data.id,
        company_id: data.company.id,
        job_title: data.job_title,
        job_location: data.job_location,
        job_description: data.job_description,
        skills: data.skills_jobs.map(skill => skill.id),
        job_description_html: data.job_description_html,
        key_responsibilities: data.key_responsibilities,
        key_responsibilities_html: data.key_responsibilities_html,
        position_type: data.position_type,
        salary_range: data.salary_range,
        qualifications: data.qualifications,
        qualifications_html: data.qualifications_html,
        skilled_trades: data.jobs_skilled_trades.map(trade => String(trade.id))
      }}
    />
  )
}
