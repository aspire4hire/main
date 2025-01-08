/* eslint-disable @next/next/no-img-element */
'use client'

import React from 'react'

import {
  ArrowRightIcon,
  Avatar,
  AvatarSizeEnum,
  IconSizeEnum,
  Typography
} from '@/components'
import { ROUTES } from '@/constants'
import { formatDate } from '@/utils'
import { JobApplicant } from '../../types'
import { useRouter } from 'next/navigation'

type JobApplicantsProps = {
  applicant: JobApplicant
}

export const JobApplicants = ({ applicant }: JobApplicantsProps) => {
  const router = useRouter()
  return (
    <div
      onClick={() =>
        router.push(
          ROUTES.JOB_SEEKER_PROFILE({
            id: applicant.applicant?.profile_id as string
          })
        )
      }
      className="w-full cursor-pointer space-y-6 rounded-3xl border border-tertiary p-4"
    >
      <div className="flex w-full items-start justify-between">
        <div className="space-y-1">
          <Avatar
            name={
              applicant.applicant?.first_name +
              ' ' +
              applicant.applicant?.last_name
            }
            justClickable
            src={applicant.applicant?.profile_pic}
            href={ROUTES.JOB_SEEKER_PROFILE({
              id: applicant.applicant?.profile_id as string
            })}
            size={AvatarSizeEnum.XS}
          />
          <Typography variant="p" className="text-xs text-tertiary">
            {applicant.applicant?.city_name},{' '}
            {applicant.applicant?.province?.province_name}
          </Typography>
        </div>
        <div className="flex h-full flex-col items-start gap-1">
          <div className="flex items-center gap-1">
            <img
              src={applicant.applicant?.skilled_trades?.[0]?.trade_icon}
              className="h-6 w-6 rounded-full"
              alt="skill icon"
            />
            <Typography variant="p" className="text-xs font-bold">
              {applicant.applicant?.skilled_trades?.[0]?.trade_name}
            </Typography>
          </div>
        </div>
      </div>
      <div className="flex w-full items-end justify-between">
        <Typography className="text-xs font-bold text-tertiary">
          Applied on:
          <Typography
            variant="span"
            className="ml-1 text-xs font-normal text-tertiary"
          >
            {formatDate(new Date(), { outputFormat: 'dd/MM/yyyy' })}
          </Typography>
        </Typography>
        <div className="flex items-center gap-1 border-b-2 border-primary text-primary transition-all hover:border-primary/80 hover:text-primary/80">
          <Typography className="text-xs font-bold uppercase text-inherit">
            View Profile
          </Typography>
          <ArrowRightIcon size={IconSizeEnum.XS} />
        </div>
      </div>
    </div>
  )
}
