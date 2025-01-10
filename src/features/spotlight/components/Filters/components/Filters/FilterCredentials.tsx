'use client'

import React, { useMemo, useState } from 'react'
import { Checkbox, Typography } from '@/components'
import { Credential } from '@/features/onboarding/types'

type FilterCredentialsProps = {
  credentials: Credential[]
  onChange: (id: string) => void
  checkedCredentials: string[]
}

export const FilterCredentials = ({
  credentials,
  onChange,
  checkedCredentials
}: FilterCredentialsProps) => {
  const [viewMore, setViewMore] = useState(false)

  const items = useMemo(() => {
    if (viewMore) {
      return [...credentials]
    }

    return [...credentials].splice(0, 8)
  }, [credentials, viewMore])

  return (
    <div className="mt-7">
      <Typography className="mb-3 font-bold">
        Video Creator Has Credentials:
      </Typography>
      <div className="flex flex-wrap gap-4">
        {items.map((skill, index) => (
          <div key={index}>
            <Checkbox
              classNameLabel="text-xs"
              className="h-5 w-5"
              onCheckedChange={() => onChange(skill.id as any)}
              label={skill.credential_name}
              checked={checkedCredentials.includes(skill.id as any)}
            />
          </div>
        ))}
      </div>
      <div className="mt-2 flex w-full justify-end border-t-2 border-primary pt-1">
        <button type="button" onClick={() => setViewMore(!viewMore)}>
          <Typography className="text-xs font-bold">
            {!viewMore ? 'SEE MORE' : 'SEE LESS'}
          </Typography>
        </button>
      </div>
    </div>
  )
}
