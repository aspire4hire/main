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
  qualifications: string
  job_description_html: string
  qualifications_html: string
  skill_tags: {
    skill_name: string
    is_general: boolean
  }[]
}

export interface JobDTO {
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
