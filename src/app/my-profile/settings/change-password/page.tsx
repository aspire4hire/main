'use client'

import {
  CheckIcon,
  FormContainer,
  IconSizeEnum,
  Input,
  NavigationBar,
  PageLoader,
  Typography
} from '@/components'
import { useUpdatePasswordControler } from '@/features/auth/hooks'
import { getFormError } from '@/utils'
import { Controller } from 'react-hook-form'

export default function ChangePasswordPage() {
  const { form, isLoading, onSubmit } = useUpdatePasswordControler()

  if (isLoading) {
    return <PageLoader />
  }

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
        console.log('-- -SUBIMT --')
        onSubmit(data)
      })}
    >
      <NavigationBar backButton />
      <Typography variant="h5" align="center" className="mb-5 w-full">
        Change Password{' '}
      </Typography>
      <Typography
        variant="p"
        align="center"
        className="mx-auto mb-5 w-full max-w-[75%]"
      >
        Enter your new password.
      </Typography>
      <div className="mt-4 space-y-4">
        <Controller
          control={form.control}
          name="password"
          rules={{
            required: 'Password is required',
            minLength: {
              value: 8,
              message: 'Password must be at least 8 characters'
            }
          }}
          render={({ field }) => (
            <Input
              {...field}
              type="password"
              autoComplete="new-password"
              label="New Password"
              required
              placeholder="Type new password here..."
              error={getFormError(form.formState.errors, field.name)}
            />
          )}
        />
        <Controller
          control={form.control}
          name="confirmPassword"
          rules={{
            required: 'Confirm Password is required',
            validate: value =>
              value === form.getValues('password') || 'Passwords do not match'
          }}
          render={({ field }) => (
            <Input
              {...field}
              type="password"
              autoComplete="new-password"
              label="Re-Type New Password"
              required
              placeholder="Re-type new password here..."
              error={getFormError(form.formState.errors, field.name)}
            />
          )}
        />
      </div>
    </FormContainer>
  )
}
