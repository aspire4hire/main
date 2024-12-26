import { AppLayout, SettingsButton } from '@/components'
import { CompanyDetailPage } from '@/features/company'

import { getCompany } from '@/features/onboarding/actions'

export default async function EditCompay({
  params
}: {
  params: Promise<{ [key: string]: string | string[] | undefined }>
}) {
  const { id } = await params

  const { data } = await getCompany({ id: id as string })

  return (
    <AppLayout secondNavButton={<SettingsButton />} backButton={false}>
      <CompanyDetailPage company={data} />
    </AppLayout>
  )
}
