import { CreateJobForm } from '@/features/jobs'

export default async function EditCompay({
  params
}: {
  params: Promise<{ [key: string]: string | string[] | undefined }>
}) {
  const { id } = await params

  return <CreateJobForm />
}
