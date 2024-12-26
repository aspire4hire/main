import { Button, IconSizeEnum, NewFileIcon, Typography } from '@/components'
import React from 'react'
import { CompanyJobPost } from './CompanyJobPost/CompanyJobPost'
import { JOB_POSTS_DUMMY } from '@/constants/dump-data'

export const CompanyJobPosts = () => {
  return (
    <div className="flex flex-col items-center gap-5 pt-5">
      <Typography className="w-full text-center">
        No have posted any job.
      </Typography>
      <Button
        variant={'ghostSecondary'}
        rounded
        size={'xl'}
        className="font-bold text-primary"
      >
        <NewFileIcon size={IconSizeEnum.SM} />
        New Job Post
      </Button>
      <div className="flex w-full flex-col gap-4">
        {JOB_POSTS_DUMMY.map((job, index) => (
          <CompanyJobPost
            key={index}
            job={job}
            onCloseJobPost={() => {}}
            onDeleteJobPost={() => {}}
          />
        ))}
      </div>
    </div>
  )
}
