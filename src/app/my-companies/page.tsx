import { AppLayout } from '@/components'
import { ROUTES } from '@/constants'
import { MyCompaniesPage } from '@/features/company'
import { getUserProfile } from '@/features/onboarding/actions'
import { redirect } from 'next/navigation'

export default async function MyCompanies() {
  const { data, error } = await getUserProfile()

  if (error) {
    console.log(error)
    return <></>
  }

  const firstCompany = data.companies?.[0]

  if (firstCompany) redirect(ROUTES.COMPANY_DETAILS({ id: firstCompany.id }))

  return (
    <AppLayout backButton={false}>
      <MyCompaniesPage companies={[]} />
    </AppLayout>
  )
}
