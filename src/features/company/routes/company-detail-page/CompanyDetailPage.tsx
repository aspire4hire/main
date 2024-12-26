'use client'

import React from 'react'
import { Tabs } from '@/components'
import { Company, CompanyDetailTabsEnum } from '../../types'
import { useCompanyDetailState } from '../../hooks'
import { CompanyOverview } from '../../components/CompanyOverview'
import { CompanyJobPosts } from '../../components'

type MyCompaniesPageProps = {
  company: Company
}

export const CompanyDetailPage = ({ company }: MyCompaniesPageProps) => {
  const { activeTab, handleChangeTab } = useCompanyDetailState()
  return (
    <div className="space-y-4">
      <Tabs
        items={[
          {
            id: CompanyDetailTabsEnum.JOB_POSTING,
            title: 'Job Posts',
            onClick: () => handleChangeTab(CompanyDetailTabsEnum.JOB_POSTING)
          },
          {
            id: CompanyDetailTabsEnum.OVERVIEW,
            title: 'Company Details',
            onClick: () => handleChangeTab(CompanyDetailTabsEnum.OVERVIEW)
          }
        ]}
        activeTabId={activeTab}
      />
      {activeTab === CompanyDetailTabsEnum.JOB_POSTING && <CompanyJobPosts />}
      {activeTab === CompanyDetailTabsEnum.OVERVIEW && (
        <CompanyOverview company={company} />
      )}
    </div>
  )
}
