import { Company } from '@/features/company'
import { Profile, SkillTrade } from '@/features/onboarding/types'

export enum JobStatusEnum {
  OPEN = 'open',
  CLOSE = 'close'
}

export enum ApplicantStatusEnum {
  PENDING = 'pending'
}

export interface Skill {
  id: string
  skill_name: string
  is_general: boolean
  skill_trades_id: string
}

export interface JobApplicant {
  id: string
  jobs_id: string
  applicant_status: ApplicantStatusEnum
  applicant?: Profile
}

export interface Job {
  id: string
  created_at: string
  company_id: string
  poster_user_id: string
  job_title: string
  job_location: string
  job_description: string
  position_type: string
  salary_range: string
  key_responsibilities: string
  key_responsibilities_html: string
  qualifications: string
  job_description_html: string
  qualifications_html: string
  company: Company
  jobs_skilled_trades: SkillTrade[]
  skills_jobs: Skill[]
  applicants?: JobApplicant[]
  job_status?: JobStatusEnum
  isApplicant?: boolean
}

export interface JobDTO {
  id: string
  company_id: string
  job_title: string
  job_location: string
  job_description: string
  job_description_html: string
  position_type: string
  salary_range: string
  key_responsibilities: string
  key_responsibilities_html: string
  qualifications: string
  qualifications_html: string
  skilled_trades: string[]
  skills: string[]
}

export interface CreateApplicantDTO {
  jobs_id: string
}
