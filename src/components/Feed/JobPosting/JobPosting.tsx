'use client'

import React from 'react'

import {
  Avatar,
  AvatarSizeEnum,
  Badge,
  Button,
  EditIcon,
  IconSizeEnum,
  Popover,
  PopoverContent,
  PopoverTrigger,
  ThreeDotIcon,
  Typography
} from '@/components/common'

import { formatDate } from '@/utils'
import { JobPostingProps } from './JobPosting.types'
import { ROUTES } from '@/constants'
import { VideoThumbnail } from '@/features/spotlight/components'
import { Trash2Icon } from 'lucide-react'
import { useCurrentSessionStore } from '@/features/auth'

export const JobPosting = ({
  date,
  description,
  skills,
  title,
  user,
  playback_id
}: JobPostingProps) => {
  const { profile } = useCurrentSessionStore()
  return (
    <article className="w-full space-y-3 rounded-lg border border-tertiary/5 bg-[#F1F1F1] px-3 py-3 shadow-md">
      <div className="flex w-full justify-between">
        <Typography variant="span" className="font-semibold text-primary/60">
          {formatDate(date, {
            outputFormat: 'dd/MM/yyyy'
          })}
        </Typography>
        {profile?.profile_id === user.id && (
          <Popover>
            <PopoverTrigger asChild>
              <Button variant={'icon'}>
                <ThreeDotIcon size={IconSizeEnum.SM} />
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-48 bg-gray-100 p-0">
              <button
                onClick={() => {}}
                className="flex w-full items-center gap-2 p-3 transition-all hover:bg-tertiary/10"
              >
                <EditIcon
                  size={IconSizeEnum.SM}
                  className="!h-5 !w-5 font-semibold text-primary"
                />
                <Typography variant="span" className="text-sm font-semibold">
                  EDIT POST
                </Typography>
              </button>
              <button
                onClick={() => {}}
                className="flex w-full items-center gap-1 p-3 transition-all hover:bg-tertiary/10"
              >
                <Trash2Icon className="!h-5 !w-5 font-semibold text-destructive" />
                <Typography
                  variant="span"
                  className="text-sm font-semibold text-destructive"
                >
                  DELETE POST
                </Typography>
              </button>
            </PopoverContent>
          </Popover>
        )}
      </div>
      <div className="grid grid-cols-3">
        <div className="col-span-2 pr-3">
          <Avatar
            href={ROUTES.JOB_SEEKER_PROFILE({ id: user.id })}
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
