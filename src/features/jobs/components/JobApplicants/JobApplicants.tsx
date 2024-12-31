'use client'

import {
  ArrowRightIcon,
  Avatar,
  AvatarSizeEnum,
  IconSizeEnum,
  Skeleton,
  Typography
} from '@/components'
import { ROUTES } from '@/constants'
import { useProvinces, useSkillTrades } from '@/features/onboarding/hooks'
import { formatDate } from '@/utils'
import Link from 'next/link'
import React, { useMemo } from 'react'
import { JobApplicant } from '../../types'

type JobApplicantsProps = {
  applicant: JobApplicant
}

export const JobApplicants = ({ applicant }: JobApplicantsProps) => {
  console.log('🚀 ~ JobApplicants ~ applicant:', applicant)
  const { data, isLoading } = useProvinces()

  const provinceName = useMemo(
    () =>
      data.find(province => province.id === applicant.applicant?.province_id)
        ?.province_name,
    [applicant, data]
  )

  return (
    <div className="w-full space-y-6 rounded-3xl border border-tertiary p-4">
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
          {isLoading ? (
            <Skeleton className="h-3 w-20"></Skeleton>
          ) : (
            <Typography variant="p" className="text-xs text-tertiary">
              {applicant.applicant?.city_name}, {provinceName}
            </Typography>
          )}
        </div>
        <div className="flex h-full flex-col items-start gap-1">
          <div className="flex items-center gap-1">
            <img
              src={applicant.applicant?.skilled_trades?.[0]?.trade_icon}
              className="h-6 w-6 rounded-full"
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
        <Link
          href={ROUTES.JOB_SEEKER_PROFILE({
            id: applicant.applicant?.profile_id as string
          })}
          className="flex items-center gap-1 border-b-2 border-primary text-primary transition-all hover:border-primary/80 hover:text-primary/80"
        >
          <Typography className="text-xs font-bold uppercase text-inherit">
            View Profile
          </Typography>
          <ArrowRightIcon size={IconSizeEnum.XS} />
        </Link>
      </div>
    </div>
  )
}
