'use client'

import { useCallback, useState } from 'react'
import { CompanyDetailTabsEnum } from '../types'

const useCompanyDetailState = () => {
  const [activeTab, setActiveTab] = useState<CompanyDetailTabsEnum>(
    CompanyDetailTabsEnum.JOB_POSTING
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
