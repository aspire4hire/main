'use client'

import {
  AttachIcon,
  Badge,
  Button,
  CheckIcon,
  CloseIcon,
  FormContainer,
  IconSizeEnum,
  Input,
  Label,
  NavigationBar,
  Skeleton,
  Textarea,
  Tooltip,
  Typography
} from '@/components'
import React from 'react'
import { useUploadVideoForm } from '../../hooks'
import { Controller } from 'react-hook-form'
import { getFormError } from '@/utils'
import { DescriptionAsLabel } from '@/components/common/Atoms/DescriptionAsLabel'
import { useSkills } from '@/features/jobs/hooks'
import { SkillsSelector } from '@/features/jobs/components/JobPostForm/SkillsSelector'
import { ErrorField } from '@/components/common/Atoms/ErrorField'
import { XIcon } from 'lucide-react'

export const UploadVideoForm = () => {
  const { form, onSubmit, isLoading, handleChageVideo } = useUploadVideoForm()

  const { data: skills, isLoading: isLoadingSkills } = useSkills()

  return (
    <FormContainer
      isLoading={isLoading}
      submitButton={
        <>
          <CheckIcon size={IconSizeEnum.SM} />
          <Typography className="text-white">Save New Password</Typography>
        </>
      }
      onSubmit={form.handleSubmit(data => {
        onSubmit(data)
      })}
    >
      <NavigationBar backButton />
      <Typography variant="h5" className="mb-5 w-full text-center">
        Upload a Video
      </Typography>
      <div className="space-y-8">
        <Controller
          control={form.control}
          name="title"
          rules={{
            required: 'title is required',
            maxLength: {
              value: 30,
              message: 'Max 30 characters'
            }
          }}
          render={({ field }) => (
            <Input
              {...field}
              label="Video title"
              smallLabel="Max 30 characters"
              required
              placeholder="Type title here..."
              error={getFormError(form.formState.errors, field.name)}
            />
          )}
        />
        <Controller
          control={form.control}
          name="description"
          rules={{
            required: 'description is required',
            maxLength: {
              value: 200,
              message: 'Max 200 characters'
            }
          }}
          render={({ field }) => (
            <Textarea
              {...field}
              required
              label="Video Description"
              smallLabel="Max 200 characters"
              placeholder="Some existing video description for the video"
              description="Max 200 Characters."
              error={getFormError(form.formState?.errors, field.name)}
            />
          )}
        />
        <Controller
          control={form.control}
          name="file"
          rules={{
            required: 'video is required'
          }}
          render={({ field }) => (
            <div>
              <Label className="font-semibold text-tertiary">
                Video File ,
                <span className="ml-1 text-xs font-light text-tertiary">
                  Max 1GB
                </span>
                <span className="ml-1 text-destructive">*</span>
              </Label>
              <DescriptionAsLabel
                description={'Try to aim for a 1 minute video.'}
              />
              {field.value && (
                <div className="mb-3 flex items-center gap-2">
                  <Badge className="px-6 py-2 text-white">Video</Badge>
                  <Tooltip content={'Remove Video'}>
                    <Button
                      size={'icon'}
                      variant={'ghost'}
                      onClick={() => field.onChange(null)}
                    >
                      <XIcon />
                    </Button>
                  </Tooltip>
                </div>
              )}
              <Button
                rounded
                isFileUpload
                type="button"
                accept="video/*"
                onFileChange={event => handleChageVideo(event, field.onChange)}
              >
                <AttachIcon size={IconSizeEnum.SM} />
                <Typography
                  className="font-semibold text-secondary"
                  variant="span"
                >
                  Upload Video
                </Typography>
              </Button>
            </div>
          )}
        />
        <Controller
          name="skills"
          control={form.control}
          rules={{
            validate: {
              required: value =>
                value.length > 0 || 'Please select at least one skill'
            }
          }}
          render={({ field }) => (
            <div>
              <Label className="text-tertiary">
                Skills <span className="text-destructive">*</span>
              </Label>
              <DescriptionAsLabel description="Select skills you want applicants to have." />
              <div className="flex flex-wrap gap-3">
                {isLoadingSkills &&
                  Array.from({ length: 5 }).map((_, index) => (
                    <Skeleton key={index} className="h-5 w-32" />
                  ))}
                {field.value
                  .map(skill => skills.find(s => s.id === skill)?.skill_name)
                  .filter(Boolean)
                  .map(skill => (
                    <Badge
                      key={skill}
                      className="text-secondary hover:bg-primary"
                    >
                      {skill}
                    </Badge>
                  ))}
              </div>
              <SkillsSelector
                selectedSkills={field.value}
                skills={skills}
                onSave={field.onChange}
                isLoading={isLoadingSkills}
              />
              {getFormError(form.formState?.errors, field.name) && (
                <ErrorField
                  error={getFormError(form.formState?.errors, field.name)}
                />
              )}
            </div>
          )}
        />
      </div>
    </FormContainer>
  )
}
