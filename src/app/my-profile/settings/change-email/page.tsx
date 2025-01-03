'use client'

import {
  CheckIcon,
  FormContainer,
  IconSizeEnum,
  Input,
  Label,
  NavigationBar,
  PageLoader,
  Typography
} from '@/components'
import { useCurrentSessionStore } from '@/features/auth'
import { useChangeEmailController } from '@/features/auth/hooks'
import { getUserProfile } from '@/features/onboarding/actions'
import { getFormError } from '@/utils'
import { useEffect } from 'react'
import { Controller } from 'react-hook-form'

export default function ChangeEmail() {
  const { form, onSubmit, isLoading } = useChangeEmailController()

  const { profile, setCurrentSessionState } = useCurrentSessionStore()

  useEffect(() => {
    const getSession = async () => {
      const profile = await getUserProfile()
      setCurrentSessionState({ profile: profile.data })
    }

    getSession()
  }, [setCurrentSessionState])

  if (!profile) return <PageLoader />

  return (
    <FormContainer
      isLoading={isLoading}
      submitButton={
        <>
          <CheckIcon size={IconSizeEnum.SM} />
          <Typography className="text-white">Save New Email</Typography>
        </>
      }
      onSubmit={form.handleSubmit(onSubmit)}
    >
      <NavigationBar backButton />
      <Typography variant="h5" align="center" className="mb-5 w-full">
        Change Email
      </Typography>
      <Typography
        variant="p"
        align="center"
        className="mx-auto mb-5 w-full max-w-[75%]"
      >
        Enter your new email and we’ll send you a reset link to the email you
        provide.
      </Typography>
      <div className="flex flex-col">
        <Label>Current Email</Label>
        <Typography variant="p">{profile.email_address}</Typography>
      </div>
      <div className="mt-4">
        <Controller
          control={form.control}
          name="email"
          rules={{
            required: 'Email is required',
            pattern: {
              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
              message: 'Invalid email address'
            }
          }}
          render={({ field }) => (
            <Input
              {...field}
              label="New Email"
              required
              placeholder="Type email here..."
              error={getFormError(form.formState.errors, field.name)}
            />
          )}
        />
      </div>
    </FormContainer>
  )
}
