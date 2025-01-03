import React from 'react'

import { Avatar, AvatarSizeEnum, Badge, Typography } from '@/components/common'

import { formatDate } from '@/utils'
import { JobPostingProps } from './JobPosting.types'
import { ROUTES } from '@/constants'
import { VideoThumbnail } from '@/features/spotlight/components'

export const JobPosting = ({
  date,
  description,
  skills,
  title,
  user,
  playback_id
}: JobPostingProps) => {
  return (
    <article className="w-full space-y-3 rounded-lg border border-tertiary/5 bg-[#F1F1F1] px-3 py-3 shadow-md">
      <div className="grid grid-cols-3">
        <div className="col-span-2 pr-3">
          <Typography variant="span" className="font-semibold text-primary/60">
            {formatDate(date, {
              outputFormat: 'dd/MM/yyyy'
            })}
          </Typography>
          <Avatar
            href={ROUTES.JOB_SEEKER_PROFILE({ id: '123' })}
            justClickable
            name={user.name}
            src={user.avatar}
            size={AvatarSizeEnum.XS}
          />
          <Typography variant="h6" className="font-bold">
            {title}
          </Typography>
          <Typography variant="p">{description}</Typography>
        </div>
        <div className="col-span-1 flex justify-end">
          <VideoThumbnail playback_id={playback_id} />
        </div>
      </div>
      <div>
        <Typography variant="p" className="mb-1 text-sm font-semibold">
          ShowCased Skills:
        </Typography>
        <div className="flex w-full flex-wrap gap-2">
          {skills.map((skill, index) => (
            <Badge
              key={index}
              variant="default"
              className="text-[10px] text-secondary"
            >
              {skill}
            </Badge>
          ))}
        </div>
      </div>
    </article>
  )
}
