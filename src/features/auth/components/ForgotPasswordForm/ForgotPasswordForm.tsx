'use client'

import { Button, Input, Typography } from '@/components'
import Link from 'next/link'
import React from 'react'
import { Controller, get } from 'react-hook-form'
import { useRequestForgotPasswordController } from '../../hooks'
import { ROUTES } from '@/constants'

export const ForgotPasswordForm = () => {
  const {
    form: {
      control,
      handleSubmit,
      formState: { errors }
    },
    onSubmit,
    isLoading
  } = useRequestForgotPasswordController()
  const emailError = get(errors, 'email')
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
      <Button type="submit" isLoading={isLoading} fullWidth size={'lg'}>
        SEND RESET LINK
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
    </form>
  )
}
