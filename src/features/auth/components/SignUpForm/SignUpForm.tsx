'use client'

import React from 'react'
import Link from 'next/link'

import { Button, Input, Typography } from '@/components'
import { ROUTES } from '@/constants'
import { useSignUpController, useSignUpForm } from '../../hooks'
import { Controller } from 'react-hook-form'
import { getFormError } from '@/utils'

export const SignUpForm = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
    getValues
  } = useSignUpForm()

  const { isLoading, onSubmit } = useSignUpController()

  return (
    <form
      className="space-y-4 md:space-y-6"
      onSubmit={handleSubmit(onSubmit)}
      autoComplete="off"
    >
      <Controller
        control={control}
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
            label="Your email"
            placeholder="myemail@example.com"
            name="email"
            type="email"
            autoComplete="off"
            error={getFormError(errors, field.name)}
          />
        )}
      />
      <Controller
        control={control}
        name="password"
        rules={{
          required: 'Password is required',
          minLength: {
            value: 8,
            message: 'Password must be at least 8 characters long'
          }
        }}
        render={({ field }) => (
          <Input
            {...field}
            label="Password"
            placeholder="••••••••"
            name="password"
            type="password"
            autoComplete="new-password"
            error={getFormError(errors, field.name)}
          />
        )}
      />{' '}
      <Controller
        control={control}
        name="confirmPassword"
        rules={{
          required: 'Confirm password is required',
          validate: (value: string) => {
            const password = getValues('password')
            return value === password || 'Passwords do not match'
          }
        }}
        render={({ field }) => (
          <Input
            {...field}
            label="Confirm password"
            placeholder="••••••••"
            name="confirm-password"
            type="password"
            autoComplete="new-password"
            error={getFormError(errors, field.name)}
          />
        )}
      />
      <Button type="submit" fullWidth isLoading={isLoading}>
        Create an account
      </Button>
      <Typography variant="body2">
        Already have an account?{' '}
        <Link
          href={ROUTES.LOGIN}
          className="text-primary-600 dark:text-primary-500 font-medium hover:underline"
        >
          Login here
        </Link>
      </Typography>
    </form>
  )
}
