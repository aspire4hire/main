import { Company } from '@/features/company'

/* eslint-disable no-unused-vars */
export enum StepPositionEnum {
  USER_TYPE = 'USER_TYPE',
  BASIC_INFORMATION = 'BASIC_INFORMATION',
  DETAILED_INFORMATION = 'DETAILED_INFORMATION'
}

export enum EditProfileTabEnum {
  BASIC_INFORMATION = 'BASIC_INFORMATION',
  WORK_INFORMATION = 'WORK_INFORMATION'
}

export interface OnboardingCompanyDto {
  // Company FIELDS
  name: string
  description: string
  why_work_with_us: string
  logo_url: File | string | null
  website_url: string | null
  address: string
}

export interface OnboardingFormDto extends OnboardingCompanyDto {
  first_name: string
  last_name: string
  profile_pic: File | string
  city_name: string
  province_id: number
  is_employer: boolean
  bio?: string | null

  is_profile_complete: boolean

  // JobSeeker FIELDS
  skilled_trades: number[]
  credentials: number[]
  resume_url: File | string
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

export interface Profile {
  profile_id: string
  created_at: string
  email_address: string
  first_name: string
  middle_name: string | null
  last_name: string
  date_of_birth: string | null
  city_name: string
  province_id: number
  bio: string | null
  resume_url: string | null
  is_employer: boolean
  profile_pic: string | null
  is_profile_complete: boolean
  skilled_trades: SkillTrade[]
  credentials: Credential[]
  province: Province
  companies?: Company[]
}
