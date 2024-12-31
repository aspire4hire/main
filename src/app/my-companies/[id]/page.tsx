import { AppLayout, SettingsButton } from '@/components'
import { CompanyDetailPage } from '@/features/company'
import { getCompanyJobs } from '@/features/jobs/actions'

import { getCompany } from '@/features/onboarding/actions'

export default async function EditCompay({
  params
}: {
  params: Promise<{ [key: string]: string | string[] | undefined }>
}) {
  const { id } = await params

  const [{ data }, { data: jobs }] = await Promise.all([
    getCompany({ id: id as string }),
    getCompanyJobs({ companyId: id as string })
  ])

  return (
    <AppLayout secondNavButton={<SettingsButton />} backButton={false}>
      <CompanyDetailPage jobs={jobs} company={data} />
    </AppLayout>
  )
}
