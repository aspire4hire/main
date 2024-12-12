/* eslint-disable no-unused-vars */
/* eslint-disable @next/next/no-img-element */
'use client'

import React from 'react'
import { Stepper, StepperButton } from '../Stepper'
import { useOnboardingFormContext } from '../../context'
import { StepPositionEnum } from '../../types'
import {
  AttachIcon,
  Avatar,
  AvatarSizeEnum,
  Button,
  CheckIcon,
  IconSizeEnum,
  Input,
  Selector,
  Typography
} from '@/components'
import { Controller } from 'react-hook-form'
import { getFormError, getPreviewUrl } from '@/utils'
import { Trash } from 'lucide-react'
import { ErrorField } from '@/components/common/Atoms/ErrorField'

export const BasicInformationStep = () => {
  const {
    handleChangeStep,
    form: {
      control,
      formState: { errors },
      handleSubmit
    },
    provinces
  } = useOnboardingFormContext()

  const handleChangeProfilePic = (
    event: React.ChangeEvent<HTMLInputElement>,
    onChange: (value: any) => void
  ) => {
    const file = event.target.files?.[0]

    if (file) {
      onChange(file)
    }
  }

  return (
    <div className="flex h-[100dvh] w-full flex-col justify-between">
      <div className="mx-auto h-full max-h-full w-full overflow-auto p-3 pb-6 md:max-w-lg">
        <Stepper
          position={1}
          title={'Let’s Create Your Profile'}
          totalSteps={2}
          onBack={() => handleChangeStep(StepPositionEnum.USER_TYPE)}
        />
        <div className="mt-20 space-y-10">
          <Controller
            name="first_name"
            rules={{
              required: 'First name is required'
            }}
            control={control}
            render={({ field }) => (
              <Input
                {...field}
                required
                label="First Name"
                placeholder="Type first name here...."
                error={getFormError(errors, field.name)}
              />
            )}
          />
          <Controller
            name="last_name"
            control={control}
            rules={{
              required: 'Last name is required'
            }}
            render={({ field }) => (
              <Input
                {...field}
                required
                label="Last Name"
                placeholder="Type last name here...."
                error={getFormError(errors, field.name)}
              />
            )}
          />
          <Controller
            name="profile_pic"
            control={control}
            render={({ field }) => (
              <div>
                <div className="flex w-full justify-between">
                  <Typography
                    variant="p"
                    className="mb-2 font-semibold text-tertiary"
                  >
                    Profile Picture
                  </Typography>
                  <Typography variant="p" className="text-tertiary">
                    OPTIONAL
                  </Typography>
                </div>

                {field.value ? (
                  <div className="flex w-full flex-col items-center justify-center gap-2">
                    <Avatar
                      src={getPreviewUrl(field.value)}
                      size={AvatarSizeEnum.CUSTOM}
                      className="h-48 w-48 object-cover"
                    />
                    <Button size={'icon'} onClick={() => field.onChange(null)}>
                      <Trash />
                    </Button>
                  </div>
                ) : (
                  <Button
                    rounded
                    isFileUpload
                    accept="image/*"
                    onFileChange={event =>
                      handleChangeProfilePic(event, field.onChange)
                    }
                  >
                    <AttachIcon size={IconSizeEnum.SM} />
                    <Typography className="text-secondary" variant="span">
                      Upload Picture
                    </Typography>
                  </Button>
                )}
                {getFormError(errors, field.name) && (
                  <ErrorField error={getFormError(errors, field.name)} />
                )}
              </div>
            )}
          />
          <Controller
            name="city_name"
            rules={{
              required: 'City is required'
            }}
            control={control}
            render={({ field }) => (
              <Input
                {...field}
                label="City"
                placeholder="Type city name here...."
                error={getFormError(errors, field.name)}
              />
            )}
          />
          <Controller
            name="province_id"
            control={control}
            rules={{
              required: 'Province is required'
            }}
            render={({ field }) => (
              <Selector
                label="Province"
                options={provinces.map(province => ({
                  value: province.id,
                  label: province.province_name
                }))}
                placeholder="Choose an option..."
                {...field}
                value={field.value}
                onValueChange={field.onChange}
                error={getFormError(errors, field.name)}
              />
            )}
          />
        </div>
      </div>
      <StepperButton
        onClick={handleSubmit(() =>
          handleChangeStep(StepPositionEnum.DETAILED_INFORMATION)
        )}
      >
        <CheckIcon size={IconSizeEnum.XS} />
        Next Step
      </StepperButton>
    </div>
  )
}
