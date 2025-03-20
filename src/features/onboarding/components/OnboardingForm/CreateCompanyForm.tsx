'use client'

import React from 'react'
import { XIcon } from 'lucide-react'
import { useRouter } from 'next/navigation'

import { useOnboardingFormContext } from '../../context'
import { Button, CheckIcon, IconSizeEnum, Typography } from '@/components'

import { cn } from '@/utils'
import { CompanyInformation } from '../DetailedInformationStep/CompanyInformation'

export const CreateCompanyForm = () => {
  const { handleSubmit, form } = useOnboardingFormContext()

  const router = useRouter()

  return (
    <div className="flex h-[100dvh] max-h-[100dvh] flex-col justify-between">
      <div className={cn('mx-auto w-full max-w-lg overflow-auto px-4 py-4')}>
        <div className="flex justify-end">
          <button
            onClick={() => router.back()}
            className="relative ml-auto mr-0 w-fit outline-none"
          >
            <XIcon />
          </button>
        </div>
        <Typography
          variant="h5"
          className="mb-4 w-full font-bold text-black"
          align="center"
        >
          Create Company
        </Typography>
        <CompanyInformation />
      </div>
      <Button onClick={form.handleSubmit(handleSubmit)} variant={'form'}>
        <CheckIcon size={IconSizeEnum.SM} />
        Save
      </Button>
    </div>
  )
}
