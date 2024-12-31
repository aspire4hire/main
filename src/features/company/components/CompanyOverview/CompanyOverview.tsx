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
}

export const CompanyOverview = ({ company }: CompanyOverviewProps) => {
  const router = useRouter()

  return (
    <div className="flex flex-col items-center justify-center gap-5">
      <div className="relative flex w-full justify-end">
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
      </div>
      <TextEditorPreview content={company.description} title="About us" />
      <TextEditorPreview
        content={company.why_work_with_us}
        title="Why work with us"
      />
    </div>
  )
}
