'use client'

import React from 'react'
import { Company } from '../types'
import { Button, CompanyIcon, IconSizeEnum, Typography } from '@/components'
import { CompanyProfileDetails } from '@/features/onboarding'

type MyCompaniesPageProps = {
  companies: Company[]
}

export const MyCompaniesPage = ({ companies }: MyCompaniesPageProps) => {
  if (companies.length === 0) {
    return (
      <div className="flex flex-col items-center gap-14 pt-5">
        <Typography className="w-full text-center">
          No company has been created yet
        </Typography>
        <Button variant={'primaryWithSecondary'} rounded size={'xl'}>
          <CompanyIcon size={IconSizeEnum.SM} className="text-white" />
          Create Company
        </Button>
      </div>
    )
  }
  return (
    <div className="space-y-5">
      <Button variant={'primaryWithSecondary'}>
        <CompanyIcon size={IconSizeEnum.SM} />
        Create Company
      </Button>
      <div>
        <CompanyProfileDetails companies={companies} />
      </div>
    </div>
  )
}
