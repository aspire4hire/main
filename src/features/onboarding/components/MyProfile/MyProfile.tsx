'use client'

import {
  Avatar,
  AvatarSizeEnum,
  Button,
  CompanyIcon,
  EditIcon,
  IconSizeEnum,
  SkillTrade,
  Typography
} from '@/components'
import React from 'react'
import { Profile } from '../../types'
import { useRouter } from 'next/navigation'
import { ROUTES } from '@/constants'
import { CompanyProfileDetails, JobSekeerProfileDetails } from './components'
import { Company } from '@/features/company'
import { MailIcon } from 'lucide-react'

type MyProfileProps = {
  profile: Profile
  isExternalView?: boolean
  isLookingOtherJobSeeker?: boolean
}

export const MyProfile = ({
  profile,
  isExternalView = false,
  isLookingOtherJobSeeker = false
}: MyProfileProps) => {
  const router = useRouter()

  const onEdit = (company: Company) =>
    router.push(ROUTES.EDIT_COMPANY({ id: company.id }))

  const onView = (company: Company) =>
    router.push(ROUTES.COMPANY_DETAILS({ id: company.id }))

  const onDelete = (company: Company) =>
    router.push(ROUTES.EDIT_COMPANY({ id: company.id }))

  return (
    <>
      <div className="flex flex-col items-center">
        <Avatar src={profile.profile_pic} size={AvatarSizeEnum.XL} />
        <Typography variant="h4" className="mb-0 mt-2 font-semibold leading-6">
          {[profile.first_name, profile.last_name].filter(Boolean).join(' ')}
        </Typography>
        <Typography variant="p" className="my-0 text-xs text-tertiary">
          {profile.city_name}, {profile.province?.province_name}
        </Typography>
        {profile.is_employer ? (
          <div className="my-4 flex items-center gap-2">
            <div className="flex h-9 w-9 items-center justify-center rounded-full bg-tertiary/20">
              <CompanyIcon className="!h-5 !w-5 text-primary" />
            </div>

            <Typography className="text-base font-bold">Employer</Typography>
          </div>
        ) : (
          <div className="my-4 flex flex-wrap justify-center gap-x-5 gap-y-3">
            {profile.skilled_trades.map(skillTrade => (
              <SkillTrade
                key={skillTrade.id}
                icon={skillTrade.trade_icon}
                name={skillTrade.trade_name}
              />
            ))}
          </div>
        )}

        {!isExternalView ? (
          <Button
            variant={'primaryWithSecondary'}
            rounded
            className="mt-4"
            onClick={() => router.push(ROUTES.EDIT_PROFILE)}
          >
            <EditIcon className="text-xs text-white" size={IconSizeEnum.SM} />
            Edit Profile
          </Button>
        ) : (
          <>
            {!isLookingOtherJobSeeker && (
              <Button
                variant={'ghostSecondary'}
                rounded
                className="mt-4 text-sm font-bold text-primary"
                size={'xxl'}
                onClick={() => {
                  const mailtoLink = `mailto:${profile.email_address}`
                  window.location.href = mailtoLink
                }}
              >
                <MailIcon />
                Contact
              </Button>
            )}
          </>
        )}
      </div>
      <div className="mb-8 mt-3 h-[2px] w-full bg-primary"></div>
      {profile.is_employer ? (
        <div>
          <Typography variant="semiTitle" className="mb-3">
            My Companies
          </Typography>
          <CompanyProfileDetails
            companies={profile.companies || []}
            onEdit={onEdit}
            onView={onView}
            onDelete={onDelete}
          />
        </div>
      ) : (
        <JobSekeerProfileDetails
          profile={profile}
          hideResume={isLookingOtherJobSeeker}
        />
      )}
    </>
  )
}
