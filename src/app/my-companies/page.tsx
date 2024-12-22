import { AppLayout } from '@/components'
import { MyCompaniesPage } from '@/features/company'

export default async function MyCompanies() {
  return (
    <AppLayout backButton={false}>
      <MyCompaniesPage companies={[]} />
    </AppLayout>
  )
}
