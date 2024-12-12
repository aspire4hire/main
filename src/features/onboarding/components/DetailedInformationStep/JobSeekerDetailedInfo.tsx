/* eslint-disable no-unused-vars */
/* eslint-disable @next/next/no-img-element */
'use client'

import React from 'react'
import { useOnboardingFormContext } from '../../context'
import {
  AttachIcon,
  Button,
  Checkbox,
  IconSizeEnum,
  Label,
  TextEditor,
  Tooltip,
  Typography
} from '@/components'
import { Controller } from 'react-hook-form'
import { getFormError } from '@/utils'
import { ErrorField } from '@/components/common/Atoms/ErrorField'
import { File, Trash } from 'lucide-react'

export const JobSeekerDetailedInfo = () => {
  const {
    form: {
      control,
      formState: { errors },
      watch
    },
    skillTrades,
    credentials
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

  const handleChangeSkillTrade = (
    skillTradeId: number,
    // eslint-disable-next-line no-unused-vars
    onChange: (ids: number[]) => void
  ) => {
    const skillsTradesSelected = watch('skilled_trades') ?? []

    const isSkillTradeSelected = skillsTradesSelected?.find(
      skillTradeSelected => skillTradeSelected === skillTradeId
    )

    if (!isSkillTradeSelected) {
      onChange([...skillsTradesSelected, skillTradeId])
    } else
      onChange(
        skillsTradesSelected.filter(skillTrade => skillTrade !== skillTradeId)
      )
  }

  const handleChangeCredential = (
    credentialId: number,
    // eslint-disable-next-line no-unused-vars
    onChange: (ids: number[]) => void
  ) => {
    const credentialsSelected = watch('credentials') ?? []

    const isCredentialSelected = credentialsSelected?.find(
      skillTradeSelected => skillTradeSelected === credentialId
    )

    if (!isCredentialSelected) {
      onChange([...credentialsSelected, credentialId])
    } else
      onChange(
        credentialsSelected.filter(skillTrade => skillTrade !== credentialId)
      )
  }

  return (
    <div className="mt-8 space-y-10">
      <div>
        <Typography variant="p" className="font-bold text-tertiary">
          Skilled Trade
          <Typography variant="span" className="ml-1 text-destructive">
            *
          </Typography>
        </Typography>
        <Typography variant="p" className="text-tertiary">
          Select at least one trade you are trained in.
        </Typography>
        <div className="mt-5 flex flex-col gap-3">
          <Controller
            control={control}
            name="skilled_trades"
            rules={{
              validate: {
                required: value =>
                  value.length > 0 || 'Please select at least one trade'
              }
            }}
            render={({ field }) => (
              <>
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
                      checked={watch('skilled_trades')?.includes(skillTrade.id)}
                      onCheckedChange={() =>
                        handleChangeSkillTrade(skillTrade.id, field.onChange)
                      }
                    />
                  </div>
                ))}
                {getFormError(errors, field.name) && (
                  <ErrorField error={getFormError(errors, field.name)} />
                )}
              </>
            )}
          />
        </div>
      </div>
      <Controller
        name="bio"
        control={control}
        render={({ field }) => (
          <div className="w-full space-y-2">
            <Label className="flex w-full justify-between">
              Bio
              <span className="font-normal text-tertiary">OPTIONAL</span>
            </Label>
            <TextEditor
              value={field.value}
              onChange={field.onChange}
              placeholder="Write a quick description about yourself..."
              error={getFormError(errors, field.name)}
              className="min-h-32"
            />
          </div>
        )}
      />
      <Controller
        name="resume_url"
        control={control}
        render={({ field }) => (
          <div>
            <div className="flex w-full justify-between">
              <Typography
                variant="p"
                className="mb-2 font-semibold text-tertiary"
              >
                Resume
              </Typography>
              <Typography variant="p" className="text-tertiary">
                OPTIONAL
              </Typography>
            </div>

            {field.value ? (
              <div className="flex items-center gap-2">
                <p className="flex w-fit items-center gap-2 rounded-full border bg-white px-5 py-2 shadow-2xl">
                  <File />
                  Resume
                </p>
                <Tooltip content={'Remove Resume'}>
                  <Button size={'icon'} onClick={() => field.onChange(null)}>
                    <Trash />
                  </Button>
                </Tooltip>
              </div>
            ) : (
              <Button
                rounded
                isFileUpload
                accept="application/pdf"
                onFileChange={event =>
                  handleChangeProfilePic(event, field.onChange)
                }
              >
                <AttachIcon size={IconSizeEnum.SM} />
                <Typography className="text-secondary" variant="span">
                  Upload Resume
                </Typography>
              </Button>
            )}
            {getFormError(errors, field.name) && (
              <ErrorField error={getFormError(errors, field.name)} />
            )}
          </div>
        )}
      />
      <div>
        <Typography variant="p" className="font-bold text-primary">
          Credentials Checklist
        </Typography>
        <Typography variant="p" className="text-tertiary">
          Select any of the following credentials that you have.{' '}
        </Typography>
        <div className="mt-3 flex flex-wrap gap-x-3 gap-y-3">
          <Controller
            control={control}
            name="credentials"
            render={({ field }) => (
              <>
                {credentials.map(credential => (
                  <div key={credential.id} className="flex items-center gap-1">
                    <Checkbox
                      checked={watch('credentials')?.includes(credential.id)}
                      onCheckedChange={() =>
                        handleChangeCredential(credential.id, field.onChange)
                      }
                    />
                    <Typography variant="p" className="text-xs">
                      {credential.credential_name}
                    </Typography>
                  </div>
                ))}
              </>
            )}
          />
        </div>
      </div>
    </div>
  )
}
