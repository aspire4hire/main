/* eslint-disable no-unused-vars */
export enum CompanyDetailTabsEnum {
  OVERVIEW = 'OVERVIEW',
  JOB_POSTING = 'JOB_POSTING'
}

export interface Company {
  id: string
  created_at: string
  name: string
  description: string
  why_work_with_us: string
  logo_url: string | null
  website_url: string | null
  address: string
}
