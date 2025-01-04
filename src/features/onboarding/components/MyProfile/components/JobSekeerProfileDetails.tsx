import React from 'react'

import {
  AttachIcon,
  Button,
  CheckCircleIcon,
  IconSizeEnum,
  JobPosting,
  TextEditorPreview,
  Typography
} from '@/components'
import { JOBS_DUMMY } from '@/constants/dump-data'
import { Profile } from '@/features/onboarding/types'
import { UserVideoPostsList } from './UserVideoPostsList'

type JobSekeerProfileDetailsProps = {
  profile: Profile
}

export const JobSekeerProfileDetails = ({
  profile
}: JobSekeerProfileDetailsProps) => {
  return (
    <div className="w-full">
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
