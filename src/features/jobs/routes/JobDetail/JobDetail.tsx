'use client'

import { Avatar, AvatarSizeEnum } from '@/components'
import React, { useState } from 'react'
import { Job } from '../../types'
import { cn } from '@/lib/utils'
import { JobApplicants, JobPostDescription } from '../../components'

type JobDetailProps = {
  job: Job
}

export const JobDetail = ({ job }: JobDetailProps) => {
  const [currentTab, setCurrentTab] = useState<'posts' | 'applicants'>('posts')
  return (
    <div className="flex flex-col items-center">
      <Avatar
        size={AvatarSizeEnum.LG}
        src={job?.company?.logo_url}
        name={job?.company?.name}
      />
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
      {currentTab === 'posts' && <JobPostDescription job={job} />}
      {currentTab === 'applicants' && <JobApplicants />}
    </div>
  )
}
