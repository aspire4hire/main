/* eslint-disable no-unused-vars */
export enum StepPositionEnum {
  USER_TYPE = 'USER_TYPE',
  BASIC_INFORMATION = 'BASIC_INFORMATION',
  DETAILED_INFORMATION = 'DETAILED_INFORMATION'
}

export interface OnboardingFormDto {
  first_name: string
  last_name: string
  profile_pic: File | string
  city_name: string
  province_id: string
  is_employer: boolean
  bio?: string

  // JobSeeker FIELDS
  skilled_trades: number[]
  credentials: number[]
  resume_url: File | string

  // Company FIELDS
  name: string
  description: string
  why_work_with_us: string
  logo_url: File | string
  website_url: string
  address: string
}

export interface SkillTrade {
  id: number
  trade_name: string
  trade_description: string
  trade_icon: string
  alternate_name: string
}

export interface Province {
  id: number
  province_name: string
  province_abbrev: string
}

export interface Credential {
  id: number
  credential_name: string
  credential_description: string | null
}
