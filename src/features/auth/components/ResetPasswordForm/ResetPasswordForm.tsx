'use client'

import { Button, Input, Typography } from '@/components'
import React from 'react'
import { Controller } from 'react-hook-form'
import { useResetPassword } from '../../hooks'
import { getFormError } from '@/utils'
import Link from 'next/link'
import { ROUTES } from '@/constants'

export const ResetPasswordForm = () => {
  const { form, onSubmit, isLoading } = useResetPassword()

  return (
    <form onSubmit={form.handleSubmit(onSubmit)}>
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
      <div className="mt-5 flex flex-col gap-3">
        <Button type="submit" isLoading={isLoading} fullWidth size={'lg'}>
          CONFIRM
        </Button>
        <Typography variant="body2">
          Return back to{' '}
          <Link
            prefetch={false}
            href={ROUTES.LOGIN}
            className="text-primary-600 dark:text-primary-500 font-medium hover:underline"
          >
            login page
          </Link>
        </Typography>
      </div>
    </form>
  )
}
