'use client'

import React from 'react'
import { Company } from '../types'
import { Button, CompanyIcon, IconSizeEnum, Typography } from '@/components'
import { CompanyProfileDetails } from '@/features/onboarding'
import { useRouter } from 'next/navigation'
import { ROUTES } from '@/constants'

type MyCompaniesPageProps = {
  companies: Company[]
}

export const MyCompaniesPage = ({ companies }: MyCompaniesPageProps) => {
  const router = useRouter()
  if (companies.length === 0) {
    return (
      <div className="flex flex-col items-center gap-14 pt-5">
        <Typography className="w-full text-center">
          No company has been created yet
        </Typography>
        <Button
          variant={'primaryWithSecondary'}
          rounded
          size={'xl'}
          onClick={() => router.push(ROUTES.CREATE_COMPANY)}
        >
          <CompanyIcon size={IconSizeEnum.SM} className="text-white" />
          Create Company
        </Button>
      </div>
    )
  }
  return (
    <div className="space-y-5">
      <Button
        variant={'primaryWithSecondary'}
        onClick={() => router.push(ROUTES.CREATE_COMPANY)}
      >
        <CompanyIcon size={IconSizeEnum.SM} />
        Create Company
      </Button>
      <div>
        <CompanyProfileDetails companies={companies} />
      </div>
    </div>
  )
}
