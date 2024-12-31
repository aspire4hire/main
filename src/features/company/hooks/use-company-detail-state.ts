'use client'

import { useCallback, useState } from 'react'
import { CompanyDetailTabsEnum } from '../types'
import { useCurrentSessionStore } from '@/features/auth'

const useCompanyDetailState = () => {
  const { profile } = useCurrentSessionStore()
  const [activeTab, setActiveTab] = useState<CompanyDetailTabsEnum>(
    profile?.is_employer
      ? CompanyDetailTabsEnum.JOB_POSTING
      : CompanyDetailTabsEnum.OVERVIEW
  )

  const handleChangeTab = useCallback((tab: CompanyDetailTabsEnum) => {
    setActiveTab(tab)
  }, [])

  return {
    activeTab,
    handleChangeTab
  }
}

export { useCompanyDetailState }
