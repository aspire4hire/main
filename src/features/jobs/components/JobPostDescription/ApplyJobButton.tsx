'use client'

import { Button, CheckIcon, Dialog, Typography } from '@/components'
import React from 'react'
import { useApplyJobController } from '../../hooks'

type ApplyJobButtonProps = {
  jobId: string
  isJobSeekerView: boolean
  isAlreadyApplied?: boolean
}

export const ApplyJobButton = ({
  jobId,
  isJobSeekerView,
  isAlreadyApplied
}: ApplyJobButtonProps) => {
  const { isLoading, onSubmit, disclosure, onAceptApply } =
    useApplyJobController()
  return (
    <div className="flex justify-center py-3">
      <Dialog isOpen={disclosure.isOpen} onClose={onAceptApply}>
        <div className="mb-8 w-full space-y-3">
          <Typography
            variant="h6"
            className="w-full text-center font-bold text-primary"
          >
            You have successfully applied!
          </Typography>
          <Typography className="text-center text-sm font-medium text-black">
            The employer will email you if they would like to proceed with your
            application.
          </Typography>
        </div>
        <Button
          onClick={onAceptApply}
          size={'xxl'}
          rounded
          className="mx-auto w-fit"
          variant={'primaryWithSecondary'}
        >
          Ok
        </Button>
      </Dialog>
      {isJobSeekerView && isAlreadyApplied ? (
        <div className="flex w-fit items-center gap-2 rounded-3xl border border-tertiary bg-white px-3 py-2">
          <CheckIcon />
          <Typography className="font-bold">Applied</Typography>
        </div>
      ) : isJobSeekerView ? (
        <Button
          rounded
          variant={'primaryWithSecondary'}
          size={'xxl'}
          className="font-bold"
          isLoading={isLoading}
          onClick={() =>
            onSubmit({
              jobs_id: jobId
            })
          }
        >
          Apply Now
        </Button>
      ) : null}
    </div>
  )
}
