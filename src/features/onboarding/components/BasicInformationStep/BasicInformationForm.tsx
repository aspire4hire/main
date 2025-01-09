import { cn } from '@/lib/utils'
import React from 'react'
import { useOnboardingFormContext } from '../../context'
import { Controller } from 'react-hook-form'
import {
  AttachIcon,
  Avatar,
  AvatarSizeEnum,
  Button,
  IconSizeEnum,
  Input,
  Selector,
  Typography
} from '@/components'
import { getFormError, getPreviewUrl } from '@/utils'
import { Trash, XIcon } from 'lucide-react'
import { ErrorField } from '@/components/common/Atoms/ErrorField'

export const BasicInformationForm = () => {
  const {
    form: {
      control,
      formState: { errors }
    },
    provinces,
    isEditing
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
    <div className={cn('mt-20 space-y-10', isEditing && 'mt-6')}>
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
              accept=".png, .jpg, .jpeg, image/png, image/jpeg, image/img"
              onFileChange={event =>
                handleChangeProfilePic(event, field.onChange)
              }
            >
              <AttachIcon size={IconSizeEnum.SM} />
              <Typography className="text-secondary" variant="span">
                Upload Picture
              </Typography>
            </Button>
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
            value={field.value as any}
            onValueChange={field.onChange}
            error={getFormError(errors, field.name)}
          />
        )}
      />
    </div>
  )
}
