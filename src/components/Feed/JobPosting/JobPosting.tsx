import React from 'react'

import { Avatar, AvatarSizeEnum, Badge, Typography } from '@/components/common'

import { formatDate } from '@/utils'
import { JobPostingProps } from './JobPosting.types'

export const JobPosting: React.FC<JobPostingProps> = ({
  date,
  description,
  skills,
  title,
  user
}) => {
  return (
    <article className="w-full space-y-3 py-3">
      <div className="grid grid-cols-3">
        <div className="col-span-2 pr-3">
          <Typography variant="span" className="font-semibold text-primary/60">
            {formatDate(date, {
              outputFormat: 'dd/MM/yyyy'
            })}
          </Typography>
          <Avatar name={user.name} size={AvatarSizeEnum.XS} />
          <Typography variant="h6" className="font-bold">
            {title}
          </Typography>
          <Typography variant="p">{description}</Typography>
        </div>
        <div className="h-full w-full bg-gray-300"></div>
      </div>
      <div>
        <Typography variant="p" className="mb-1 text-sm font-semibold">
          ShowCased Skills:
        </Typography>
        <div className="flex w-full flex-wrap gap-2">
          {skills.map((skill, index) => (
            <Badge key={index} variant="default" className="text-secondary">
              {skill}
            </Badge>
          ))}
        </div>
      </div>
    </article>
  )
}
