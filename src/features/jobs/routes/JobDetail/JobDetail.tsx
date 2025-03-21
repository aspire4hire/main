'use client'

import { Avatar, AvatarSizeEnum, Typography } from '@/components'
import React, { useState } from 'react'
import { Job, JobApplicant } from '../../types'
import { cn } from '@/lib/utils'
import { JobApplicants, JobPostDescription } from '../../components'
import { ROUTES } from '@/constants'

type JobDetailProps = {
  job: Job
  isJobSeekerView?: boolean
  sucess?: boolean
  applicants?: JobApplicant[]
}

export const JobDetail = ({
  job,
  isJobSeekerView,
  applicants
}: JobDetailProps) => {
  const [currentTab, setCurrentTab] = useState<'posts' | 'applicants'>('posts')
  return (
    <div
      className={cn('flex flex-col items-center', isJobSeekerView && 'gap-4')}
    >
      <Avatar
        size={isJobSeekerView ? AvatarSizeEnum.XS : AvatarSizeEnum.LG}
        src={job?.company?.logo_url}
        name={job?.company?.name}
        defaultImage="/assets/company_default.png"
        href={
          isJobSeekerView
            ? ROUTES.COMPANY_DETAILS_JOOB_SEEKER({ id: job?.company?.id })
            : undefined
        }
      />
      {!isJobSeekerView && (
        <div className="my-7 grid w-full grid-cols-2 gap-4">
          <button
            className={cn(
              'w-full appearance-none rounded-xl border-2 border-primary py-2 font-semibold transition-all duration-200',
              currentTab === 'posts'
                ? 'bg-primary text-secondary hover:!border-primary/10 hover:bg-primary/90'
                : 'text- bg-transparent hover:bg-primary/10'
            )}
            onClick={() => setCurrentTab('posts')}
          >
            Job Post
          </button>
          <button
            className={cn(
              'w-full appearance-none rounded-xl border-2 border-primary py-2 font-semibold transition-all duration-200',
              currentTab === 'applicants'
                ? 'bg-primary text-secondary hover:!border-primary/10 hover:bg-primary/90'
                : 'text- bg-transparent hover:bg-primary/10'
            )}
            onClick={() => setCurrentTab('applicants')}
          >
            Applicants
          </button>
        </div>
      )}
      {currentTab === 'posts' && (
        <JobPostDescription job={job} isJobSeekerView={isJobSeekerView} />
      )}
      {currentTab === 'applicants' && !isJobSeekerView && (
        <div className="flex w-full flex-col gap-3">
          {applicants?.map(applicant => (
            <JobApplicants applicant={applicant} key={applicant.id} />
          ))}
          {(applicants || []).length === 0 && (
            <Typography className="w-full text-center font-medium text-tertiary">
              This job post has no applicants
            </Typography>
          )}
        </div>
      )}
    </div>
  )
}
