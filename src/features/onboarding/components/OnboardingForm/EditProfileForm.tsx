'use client'

import React from 'react'
import { XIcon } from 'lucide-react'
import { useRouter } from 'next/navigation'

import { useOnboardingFormContext } from '../../context'
import { Button, CheckIcon, IconSizeEnum, Tabs, Typography } from '@/components'
import { EditProfileTabEnum } from '../../types'
import { BasicInformationForm } from '../BasicInformationStep/BasicInformationForm'
import { JobSeekerDetailedInfo } from '../DetailedInformationStep/JobSeekerDetailedInfo'

import { cn } from '@/utils'

export const EditProfileForm = () => {
  const { handleChangeTab, currentEditProfileTabs, handleSubmit, form } =
    useOnboardingFormContext()

  const router = useRouter()

  return (
    <div className="flex h-[100dvh] max-h-[100dvh] flex-col justify-between">
      <div className={cn('mx-auto w-full max-w-lg overflow-hidden px-4 py-4')}>
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
          Edit Your Profile
        </Typography>
        {!form.watch('is_employer') && (
          <Tabs
            items={[
              {
                id: EditProfileTabEnum.BASIC_INFORMATION,
                title: 'Basic Information',
                onClick: () =>
                  handleChangeTab(EditProfileTabEnum.BASIC_INFORMATION)
              },
              {
                id: EditProfileTabEnum.WORK_INFORMATION,
                title: 'Work Information',
                onClick: () =>
                  handleChangeTab(EditProfileTabEnum.WORK_INFORMATION)
              }
            ]}
            activeTabId={currentEditProfileTabs}
          />
        )}
        <div className="h-[calc(100dvh-170px)] overflow-auto pb-8">
          {currentEditProfileTabs === EditProfileTabEnum.BASIC_INFORMATION && (
            <BasicInformationForm />
          )}
          {currentEditProfileTabs === EditProfileTabEnum.WORK_INFORMATION && (
            <JobSeekerDetailedInfo />
          )}
        </div>
      </div>
      <Button onClick={form.handleSubmit(handleSubmit)} variant={'form'}>
        <CheckIcon size={IconSizeEnum.SM} />
        Save Edits
      </Button>
    </div>
  )
}
