'use client'

import React from 'react'
import { Company } from '../../types'
import {
  EditIcon,
  IconSizeEnum,
  TextEditorPreview,
  Typography
} from '@/components'
import { useRouter } from 'next/navigation'
import { ROUTES } from '@/constants'

type CompanyOverviewProps = {
  company: Company
  isExternalView?: boolean
}

export const CompanyOverview = ({
  company,
  isExternalView
}: CompanyOverviewProps) => {
  const router = useRouter()

  return (
    <div className="flex flex-col items-center justify-center gap-5">
      <div className="relative flex w-full justify-end">
        {!isExternalView && (
          <button
            onClick={() => router.push(ROUTES.EDIT_COMPANY({ id: company.id }))}
            type="button"
            className="flex h-fit items-end gap-1 border-b border-tertiary text-tertiary outline-none"
          >
            <EditIcon size={IconSizeEnum.SM} className="pb-1" />
            <Typography
              className="text-xs font-semibold text-tertiary"
              variant="span"
            >
              EDIT
            </Typography>
          </button>
        )}
      </div>
      <Typography
        variant="p"
        className="w-full text-left text-tertiary"
        weight="bold"
      >
        Address:{' '}
        <Typography variant="span" className="ml-1 font-medium text-primary">
          {company.address}
        </Typography>
      </Typography>
      <Typography
        variant="p"
        className="w-full text-left text-tertiary"
        weight="bold"
      >
        Website:{' '}
        {company.website_url && (
          <a
            href={company.website_url}
            target="_blank"
            className="ml-1 font-medium text-primary underline"
          >
            {company.website_url}
          </a>
        )}
      </Typography>
      <TextEditorPreview content={company.description} title="About us" />
      <TextEditorPreview
        content={company.why_work_with_us}
        title="Why work with us"
      />
    </div>
  )
}
