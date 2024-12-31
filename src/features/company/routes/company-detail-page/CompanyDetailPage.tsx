'use client'

import React from 'react'
import { Avatar, AvatarSizeEnum, Tabs } from '@/components'
import { Company, CompanyDetailTabsEnum } from '../../types'
import { useCompanyDetailState } from '../../hooks'
import { CompanyOverview } from '../../components/CompanyOverview'
import { CompanyJobPosts } from '../../components'
import { Job } from '@/features/jobs'
import { ROUTES } from '@/constants'
import { useCurrentSessionStore } from '@/features/auth'

type MyCompaniesPageProps = {
  company: Company
  jobs: Job[]
}

export const CompanyDetailPage = ({ company, jobs }: MyCompaniesPageProps) => {
  const { activeTab, handleChangeTab } = useCompanyDetailState()
  const { profile } = useCurrentSessionStore()
  return (
    <div className="space-y-4">
      <div className="flex w-full justify-center">
        <Avatar
          src={company.logo_url}
          name={company.name}
          size={AvatarSizeEnum.XS}
          href={
            profile?.is_employer
              ? ROUTES.COMPANY_DETAILS({ id: company.id })
              : ROUTES.COMPANY_DETAILS_JOOB_SEEKER({ id: company.id })
          }
        />
      </div>
      <Tabs
        items={
          profile?.is_employer
            ? [
                {
                  id: CompanyDetailTabsEnum.JOB_POSTING,
                  title: 'Job Posts',
                  onClick: () =>
                    handleChangeTab(CompanyDetailTabsEnum.JOB_POSTING)
                },
                {
                  id: CompanyDetailTabsEnum.OVERVIEW,
                  title: 'Company Details',
                  onClick: () => handleChangeTab(CompanyDetailTabsEnum.OVERVIEW)
                }
              ]
            : [
                {
                  id: CompanyDetailTabsEnum.OVERVIEW,
                  title: 'Company Details',
                  onClick: () => handleChangeTab(CompanyDetailTabsEnum.OVERVIEW)
                },
                {
                  id: CompanyDetailTabsEnum.JOB_POSTING,
                  title: 'Job Posts',
                  onClick: () =>
                    handleChangeTab(CompanyDetailTabsEnum.JOB_POSTING)
                }
              ]
        }
        activeTabId={activeTab}
      />
      {activeTab === CompanyDetailTabsEnum.JOB_POSTING && (
        <CompanyJobPosts companyId={company.id} jobs={jobs} />
      )}
      {activeTab === CompanyDetailTabsEnum.OVERVIEW && (
        <CompanyOverview company={company} />
      )}
    </div>
  )
}
