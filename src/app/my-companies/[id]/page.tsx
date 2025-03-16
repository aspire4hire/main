'use client'

import { useParams } from 'next/navigation'

import { AppLayout } from '@/components'
import { CompanyDetailPage, useCompany } from '@/features/company'
import { CompanyDetailSkeleton } from '@/features/company/components'

export default function EditCompay() {
  const { id } = useParams()
  const { data, isLoading } = useCompany({ id: id as string })

  return (
    <AppLayout hideTopNav backButton={false}>
      {isLoading || !data.company ? (
        <CompanyDetailSkeleton />
      ) : (
        <CompanyDetailPage jobs={data.jobs} company={data.company} />
      )}
    </AppLayout>
  )
}
