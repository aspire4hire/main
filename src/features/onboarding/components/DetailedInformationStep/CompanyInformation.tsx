/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable no-unused-vars */
/* eslint-disable @next/next/no-img-element */
'use client'

import React from 'react'
import { useOnboardingFormContext } from '../../context'
import {
  AttachIcon,
  Avatar,
  AvatarSizeEnum,
  Button,
  IconSizeEnum,
  Input,
  Label,
  TextEditor,
  Typography
} from '@/components'
import { Controller } from 'react-hook-form'
import { cleanHtml, getFormError, getPreviewUrl } from '@/utils'
import { Trash, XIcon } from 'lucide-react'
import { isValidURL } from '@/utils/is-valid-url'

export const CompanyInformation = () => {
  const {
    form: {
      control,
      formState: { errors },
      watch
    }
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
    <div className="mt-8 space-y-10">
      <Typography align="center" className="w-full">
        This information will be public to job seekers.
      </Typography>
      <Controller
        name="name"
        rules={{
          required: 'Company name is required'
        }}
        control={control}
        render={({ field }) => (
          <Input
            {...field}
            required
            label="Company Name"
            placeholder="Type company name name here..."
            error={getFormError(errors, field.name)}
          />
        )}
      />
      <Controller
        name="address"
        rules={{
          required: 'Company address is required'
        }}
        control={control}
        render={({ field }) => (
          <Input
            {...field}
            required
            label="Company Address (Head Office)"
            placeholder="Type company address here..."
            error={getFormError(errors, field.name)}
          />
        )}
      />
      <Controller
        name="website_url"
        control={control}
        rules={{
          validate: value => {
            if (value) {
              return isValidURL(value) || 'Invalid URL'
            }
            return true
          }
        }}
        render={({ field }) => (
          <div className="relative w-full">
            <Typography
              variant="p"
              className="absolute right-2 top-0 text-tertiary"
            >
              OPTIONAL
            </Typography>
            <Input
              {...field}
              value={field.value ?? undefined}
              label="Company Website URL"
              placeholder="Type company address here..."
              error={getFormError(errors, field.name)}
            />
          </div>
        )}
      />
      <Controller
        name="logo_url"
        control={control}
        render={({ field }) => (
          <div>
            <div className="relative w-full">
              <Typography
                variant="p"
                className="absolute right-2 top-0 text-tertiary"
              >
                OPTIONAL
              </Typography>
              <Typography
                variant="p"
                className="mb-2 font-semibold text-tertiary"
              >
                Company Logo
              </Typography>
            </div>
            {field.value ? (
              <div className="mb-2 flex w-fit items-center gap-16 rounded-md bg-tertiary/10 p-2">
                <Avatar
                  src={getPreviewUrl(field.value)}
                  size={AvatarSizeEnum.CUSTOM}
                  className="h-20 w-20 object-cover"
                />
                <Button
                  size={'icon'}
                  variant={'ghost'}
                  onClick={() => field.onChange(null)}
                >
                  <XIcon />
                </Button>
              </div>
            ) : null}
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
          </div>
        )}
      />
      <Controller
        name="description"
        control={control}
        rules={{
          validate: value =>
            Boolean(cleanHtml(value)) || 'Description is required'
        }}
        render={({ field }) => (
          <div className="w-full space-y-2">
            <Label>
              What Does The Company Do?{' '}
              <span className="ml-1 text-destructive">*</span>
            </Label>
            <TextEditor
              value={field.value}
              onChange={field.onChange}
              placeholder="Type description here..."
              error={getFormError(errors, field.name)}
              className="min-h-32"
            />
          </div>
        )}
      />{' '}
      <Controller
        name="why_work_with_us"
        control={control}
        rules={{
          validate: value =>
            Boolean(cleanHtml(value)) || 'Description is required'
        }}
        render={({ field }) => (
          <div className="w-full space-y-2">
            <Label>
              Why Work With The Company?{' '}
              <span className="ml-1 text-destructive">*</span>
            </Label>
            <TextEditor
              value={field.value}
              onChange={field.onChange}
              placeholder="Type company advantages here..."
              error={getFormError(errors, field.name)}
              className="min-h-32"
            />
          </div>
        )}
      />
    </div>
  )
}
