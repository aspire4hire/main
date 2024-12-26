'use client'

import {
  ArrowRightIcon,
  Avatar,
  AvatarSizeEnum,
  IconSizeEnum,
  Typography
} from '@/components'
import { ROUTES } from '@/constants'
import { useSkillTrades } from '@/features/onboarding/hooks'
import { formatDate } from '@/utils'
import Link from 'next/link'
import React from 'react'

export const JobApplicants = () => {
  const { data } = useSkillTrades()
  return (
    <div className="w-full space-y-6 rounded-3xl border border-tertiary p-4">
      <div className="flex w-full items-end justify-between">
        <div className="space-y-1">
          <Avatar name="Jordan Blake" size={AvatarSizeEnum.XS} />
          <Typography variant="p" className="text-xs text-tertiary">
            Toronto, Ontario
          </Typography>
        </div>
        <div className="flex flex-col items-end gap-1">
          <div className="flex items-center gap-1">
            <img src={data?.[1]?.trade_icon} className="h-6 w-6 rounded-full" />
            <Typography variant="p" className="text-xs font-bold">
              {data?.[1]?.trade_name}
            </Typography>
          </div>
          <Typography variant="p" className="text-xs text-tertiary">
            5+ Years Experience
          </Typography>
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
            id: 'b1687944-2fc8-453c-a17f-f545c6d0aeb7'
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
