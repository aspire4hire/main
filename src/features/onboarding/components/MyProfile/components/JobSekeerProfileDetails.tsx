'use client'

import React from 'react'

import {
  AttachIcon,
  Button,
  CheckCircleIcon,
  IconSizeEnum,
  TextEditorPreview,
  Typography
} from '@/components'
import { Profile } from '@/features/onboarding/types'
import { UserVideoPostsList } from './UserVideoPostsList'

type JobSekeerProfileDetailsProps = {
  profile: Profile
  hideResume?: boolean
}

export const JobSekeerProfileDetails = ({
  profile,
  hideResume = false
}: JobSekeerProfileDetailsProps) => {
  const onDownloadResume = () => {
    if (!profile.resume_url) return
    window.open(profile.resume_url, '_blank')
  }

  return (
    <div className="w-full">
      <TextEditorPreview
        title="Bio"
        content={profile.bio ?? '<p className="text-tertiary">No bio yet</p>'}
      />
      {hideResume ? null : (
        <>
          {profile.resume_url ? (
            <Button
              variant={'outline'}
              rounded
              className="mt-2 flex items-center gap-2"
              onClick={onDownloadResume}
            >
              <AttachIcon size={IconSizeEnum.MD} className="!text-primary" />
              View Resume
            </Button>
          ) : (
            <>
              <Typography variant="body2" className="mt-2 font-semibold">
                Resume not provided
              </Typography>
            </>
          )}
        </>
      )}

      <Typography className="mb-2 mt-6" variant="semiTitle">
        Credentials Checklist
      </Typography>
      <div className="mb-5 flex flex-wrap gap-x-5 gap-y-3">
        {profile.credentials.map(credential => (
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
      <UserVideoPostsList userId={profile.profile_id} />
    </div>
  )
}
