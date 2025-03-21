'use client'

import { Button, IconSizeEnum, NewFileIcon, Typography } from '@/components'
import React from 'react'
import { CompanyJobPost } from './CompanyJobPost/CompanyJobPost'
import { useRouter } from 'next/navigation'
import { ROUTES } from '@/constants'
import { Job } from '@/features/jobs'

type CompanyJobPostsProps = {
  companyId: string
  jobs: Job[]
  isExternalView?: boolean
}

export const CompanyJobPosts = ({
  companyId,
  jobs,
  isExternalView
}: CompanyJobPostsProps) => {
  const router = useRouter()

  return (
    <div className="flex flex-col items-center gap-5 pt-5">
      {jobs.length === 0 && (
        <Typography className="w-full text-center">
          No have posted any job.
        </Typography>
      )}
      {!isExternalView && (
        <Button
          variant={'ghostSecondary'}
          rounded
          size={'xl'}
          className="font-bold text-primary"
          onClick={() => router.push(ROUTES.CREATE_JOB_POST({ id: companyId }))}
        >
          <NewFileIcon size={IconSizeEnum.SM} />
          New Job Post
        </Button>
      )}
      <div className="flex w-full flex-col gap-4">
        {jobs.map((job, index) => (
          <CompanyJobPost
            key={index}
            job={job}
            isExternalView={isExternalView}
          />
        ))}
      </div>
    </div>
  )
}
