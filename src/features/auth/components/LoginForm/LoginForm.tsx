'use client'

import { Button, Input, Typography } from '@/components/common'
import { ROUTES } from '@/constants'
import Link from 'next/link'
import React from 'react'
import { useLoginController, useLoginForm } from '../../hooks'
import { Controller, get } from 'react-hook-form'

export const LoginForm = () => {
  const {
    control,
    handleSubmit,
    formState: { errors }
  } = useLoginForm()

  const { isLoading, onSubmit } = useLoginController()

  const emailError = get(errors, 'email')
  const passwordError = get(errors, 'password')

  return (
    <form className="space-y-4 md:space-y-6" onSubmit={handleSubmit(onSubmit)}>
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
            label="Email"
            placeholder="myemail@example.com"
            name="email"
            type="email"
            error={emailError?.message}
          />
        )}
      />
      <Controller
        control={control}
        name="password"
        rules={{
          required: 'Password is required'
        }}
        render={({ field }) => (
          <Input
            {...field}
            label="Password"
            placeholder="***********"
            name="password"
            type="password"
            error={passwordError?.message}
          />
        )}
      />
      <div className="flex items-center justify-end">
        <Link
          href={ROUTES.FORGOT_PASSWORD}
          className="text-primary-600 dark:text-primary-500 text-sm font-medium hover:underline"
        >
          Forgot password?
        </Link>
      </div>
      <Button type="submit" isLoading={isLoading} fullWidth size={'lg'}>
        SIGN IN
      </Button>
      <Typography variant="body2">
        Don’t have an account yet?{' '}
        <Link
          prefetch={false}
          href={ROUTES.SIGN_UP}
          className="text-primary-600 dark:text-primary-500 font-medium hover:underline"
        >
          Sign up
        </Link>
      </Typography>
    </form>
  )
}
