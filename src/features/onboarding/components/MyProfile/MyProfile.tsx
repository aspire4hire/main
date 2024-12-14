'use client'

import {
  AttachIcon,
  Avatar,
  AvatarSizeEnum,
  Button,
  CheckCircleIcon,
  EditIcon,
  IconSizeEnum,
  JobPosting,
  Skeleton,
  SkillTrade,
  TextEditorPreview,
  Typography
} from '@/components'
import React from 'react'
import { useCredentials, useProvinces, useSkillTrades } from '../../hooks'
import { Profile } from '../../types'
import { JOBS_DUMMY } from '@/constants/dump-data'
import { useRouter } from 'next/navigation'
import { ROUTES } from '@/constants'

type MyProfileProps = {
  profile: Profile
}

export const MyProfile = ({ profile }: MyProfileProps) => {
  const { data } = useSkillTrades()
  const { data: credentials } = useCredentials()
  const { data: provinces, isLoading } = useProvinces()

  const router = useRouter()

  return (
    <>
      <div className="flex flex-col items-center">
        <Avatar src={profile.profile_pic} size={AvatarSizeEnum.XL} />
        <Typography variant="h4" className="mb-0 mt-2 font-semibold leading-6">
          {[profile.first_name, profile.last_name].filter(Boolean).join(' ')}
        </Typography>
        {isLoading ? (
          <Skeleton className="mt-1 h-3 w-52" />
        ) : (
          <Typography variant="p" className="my-0 text-xs text-tertiary">
            {profile.city_name},{' '}
            {
              provinces.find(province => province.id === profile.province_id)
                ?.province_name
            }
          </Typography>
        )}
        <div className="my-4 flex flex-wrap justify-center gap-x-5 gap-y-3">
          {data.map(skillTrade => (
            <SkillTrade
              key={skillTrade.id}
              icon={skillTrade.trade_icon}
              name={skillTrade.trade_name}
            />
          ))}
        </div>
        <Button
          variant={'primaryWithSecondary'}
          rounded
          className="mt-4"
          onClick={() => router.push(ROUTES.EDIT_PROFILE)}
        >
          <EditIcon className="text-xs text-white" size={IconSizeEnum.SM} />
          Edit Profile
        </Button>
      </div>
      <div className="mb-8 mt-3 h-[2px] w-full bg-primary"></div>
      <TextEditorPreview
        title="Bio"
        content={profile.bio ?? '<p className="text-tertiary">No bio yet</p>'}
      />
      <Button
        variant={'outline'}
        rounded
        className="mt-2 flex items-center gap-2"
      >
        <AttachIcon size={IconSizeEnum.MD} className="!text-primary" />
        View Resume
      </Button>
      <Typography className="mb-2 mt-6" variant="semiTitle">
        Credentials Checklist
      </Typography>
      <div className="mb-5 flex flex-wrap gap-x-5 gap-y-3">
        {credentials.map(credential => (
          <div key={credential.id} className="flex items-center gap-1">
            <CheckCircleIcon className="text-primary" size={IconSizeEnum.XS} />
            <Typography variant="p" className="text-xs md:text-sm">
              {credential.credential_name}
            </Typography>
          </div>
        ))}
      </div>
      <Typography className="mb-2 mt-6" variant="semiTitle">
        Video Portfolio
      </Typography>
      <div className="flex flex-col">
        <div className="space-y-4">
          {JOBS_DUMMY.map((job, index) => (
            <JobPosting {...job} key={index} />
          ))}
        </div>
      </div>
    </>
  )
}
