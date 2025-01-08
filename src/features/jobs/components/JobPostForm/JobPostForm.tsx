/* eslint-disable @next/next/no-img-element */
'use client'

import React from 'react'
import { useJobPostForm } from '../../hooks'
import {
  Badge,
  Button,
  Checkbox,
  CheckIcon,
  CloseIcon,
  FormContainer,
  IconSizeEnum,
  Input,
  Label,
  NavigationBar,
  PageLoader,
  Selector,
  Skeleton,
  Textarea,
  TextEditor,
  Typography
} from '@/components'
import { Controller } from 'react-hook-form'

import { cleanHtml, getFormError } from '@/utils'
import { ErrorField } from '@/components/common/Atoms/ErrorField'
import { DescriptionAsLabel } from '@/components/common/Atoms/DescriptionAsLabel'
import { SkillsSelector } from './SkillsSelector'
import { JobDTO } from '../../types'

type JobPostFormProps = {
  isEditing?: boolean
  data?: JobDTO
}

export const JobPostForm = ({ isEditing, data }: JobPostFormProps) => {
  const CONTENT = {
    title: isEditing ? 'Edit Job' : 'Create & Publish a Job',
    subTitle: 'This information will be public to job seekers.',
    submitText: isEditing ? 'Save Edits' : 'Publish Job'
  }

  const {
    form,
    skillTrades,
    handleChangeSkillTrade,
    isLoadingSkills,
    skills,
    isLoading,
    onSubmit,
    isLoadingSkillTrades
  } = useJobPostForm({
    data
  })

  if (isLoading) {
    return <PageLoader />
  }

  return (
    <FormContainer
      onSubmit={form.handleSubmit(data => onSubmit(data))}
      submitButton={
        <>
          <CheckIcon size={IconSizeEnum.SM} />
          <Typography className="text-white">{CONTENT.submitText}</Typography>
        </>
      }
    >
      <NavigationBar backButton className="py-2 pt-0" />
      <Typography variant="h5" className="w-full text-center font-bold">
        {CONTENT.title}
      </Typography>
      <Typography className="w-full text-center">{CONTENT.subTitle}</Typography>
      <div className="flex flex-col gap-4">
        <Controller
          name="job_title"
          control={form.control}
          rules={{
            required: 'Job title is required',
            maxLength: {
              value: 100,
              message: 'Job title must be less than 100 characters'
            }
          }}
          render={({ field }) => (
            <Input
              {...field}
              required
              label="Job Title"
              placeholder="Type job title here..."
              description="Max 100 Characters."
              error={getFormError(form.formState?.errors, field.name)}
            />
          )}
        />
        <Controller
          name="job_location"
          control={form.control}
          rules={{
            required: 'Job location is required',
            maxLength: {
              value: 100,
              message: 'Job title must be less than 100 characters'
            }
          }}
          render={({ field }) => (
            <Input
              {...field}
              required
              label="Job Location"
              placeholder="Type job location here..."
              description="Max 100 Characters."
              error={getFormError(form.formState?.errors, field.name)}
            />
          )}
        />
        <Controller
          name="job_description"
          control={form.control}
          rules={{
            required: 'Job description is required',
            maxLength: {
              value: 500,
              message: 'Job title must be less than 500 characters'
            }
          }}
          render={({ field }) => (
            <Textarea
              {...field}
              required
              label="Job Description"
              placeholder="Type job description here..."
              description="Max 500 Characters."
              error={getFormError(form.formState?.errors, field.name)}
            />
          )}
        />
        <Controller
          name="position_type"
          control={form.control}
          rules={{
            required: 'Position type is required'
          }}
          render={({ field }) => (
            <Selector
              label="Position Type"
              options={[
                { value: 'Full-Time', label: 'Full-Time' },
                {
                  value: 'Part-Time',
                  label: 'Part-Time'
                },
                {
                  value: 'Contract',
                  label: 'Contract'
                },
                {
                  value: 'Temporary',
                  label: 'Temporary'
                }
              ]}
              placeholder="Choose an option..."
              {...field}
              value={field.value as any}
              onValueChange={field.onChange}
              error={getFormError(form.formState?.errors, field.name)}
            />
          )}
        />
        <Controller
          name="salary_range"
          control={form.control}
          rules={{
            required: 'Salary range is required',
            maxLength: {
              value: 25,
              message: 'Salary range must be less than 25 characters'
            }
          }}
          render={({ field }) => (
            <Input
              {...field}
              required
              label="Salary/Wage"
              placeholder="Type pay here..."
              description="Enter a range, rate, or salary. Max 25 Characters."
              error={getFormError(form.formState?.errors, field.name)}
            />
          )}
        />
        <Controller
          control={form.control}
          name="skilled_trades"
          rules={{
            validate: {
              required: value =>
                value.length > 0 || 'Please select at least one trade'
            }
          }}
          render={({ field }) => (
            <div>
              <Label className="text-tertiary">
                Skilled Trade <span className="text-destructive">*</span>
              </Label>
              <DescriptionAsLabel description="Select which trade this job is for." />
              <div className="mt-5 flex flex-col gap-3">
                {isLoadingSkillTrades && (
                  <>
                    {Array.from({ length: 3 }).map((_, i) => (
                      <div className="flex items-center gap-2" key={i}>
                        <Skeleton className="h-6 w-7" />
                        <Skeleton className="h-5 w-28" />
                        <div className="ml-5">
                          <Skeleton className="h-6 w-6" />
                        </div>
                      </div>
                    ))}
                  </>
                )}
                {skillTrades.map(skillTrade => (
                  <div key={skillTrade.id} className="flex items-center gap-2">
                    <div className="flex w-36 max-w-36 items-center gap-2">
                      <img
                        src={skillTrade.trade_icon}
                        alt={skillTrade.trade_name}
                        className="w-8 rounded-full"
                      />
                      <Typography variant="p" className="text-base">
                        {skillTrade.trade_name}
                      </Typography>
                    </div>
                    <Checkbox
                      checked={form
                        .watch('skilled_trades')
                        ?.includes(skillTrade.id as any)}
                      onCheckedChange={() =>
                        handleChangeSkillTrade(
                          skillTrade.id as any,
                          field.onChange
                        )
                      }
                    />
                  </div>
                ))}
                {getFormError(form.formState?.errors, field.name) && (
                  <ErrorField
                    error={getFormError(form.formState?.errors, field.name)}
                  />
                )}
              </div>
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
        <Controller
          name="key_responsibilities_html"
          control={form.control}
          rules={{
            validate: value =>
              Boolean(cleanHtml(value)) || 'key responsibilities are required',
            maxLength: {
              value: 1000,
              message: 'key responsibilities must be less than 1000 characters'
            }
          }}
          render={({ field }) => (
            <div className="w-full">
              <Label>
                Key Resonsibilities
                <span className="ml-1 text-destructive">*</span>
              </Label>
              <DescriptionAsLabel
                description={
                  'What will they do on the job? Max 1000 Characters.'
                }
              />
              <TextEditor
                value={field.value}
                onChange={field.onChange}
                onChangeAsPlainText={value =>
                  form.setValue('key_responsibilities', value)
                }
                placeholder="Type here..."
                error={getFormError(form.formState?.errors, field.name)}
                className="min-h-32"
              />
            </div>
          )}
        />{' '}
        <Controller
          name="qualifications_html"
          control={form.control}
          rules={{
            validate: value =>
              Boolean(cleanHtml(value)) || 'Qualifications are required',
            maxLength: {
              value: 1000,
              message: 'Qualifications must be less than 1000 characters'
            }
          }}
          render={({ field }) => (
            <div className="w-full">
              <Label>
                Qualifications
                <span className="ml-1 text-destructive">*</span>
              </Label>
              <DescriptionAsLabel
                description={
                  'What credentials should they have? Max 1000 Characters.'
                }
              />
              <TextEditor
                value={field.value}
                onChange={field.onChange}
                onChangeAsPlainText={value =>
                  form.setValue('qualifications', value)
                }
                placeholder="Type here..."
                error={getFormError(form.formState?.errors, field.name)}
                className="min-h-32"
              />
            </div>
          )}
        />
      </div>
    </FormContainer>
  )
}
