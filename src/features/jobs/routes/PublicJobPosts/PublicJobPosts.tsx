import React from 'react'
import { Job } from '../../types'
import { CompanyJobPost } from '@/features/company/components/CompanyJobPosts/CompanyJobPost/CompanyJobPost'

type PublicJobPostsProps = {
  jobs: Job[]
}

export const PublicJobPosts = ({ jobs }: PublicJobPostsProps) => {
  return (
    <div className="flex flex-col gap-3">
      {jobs.map((job, index) => (
        <CompanyJobPost job={job} key={index} />
      ))}
    </div>
  )
}
