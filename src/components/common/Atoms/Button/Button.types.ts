/* eslint-disable no-unused-vars */
import { VariantProps } from 'class-variance-authority'
import React from 'react'
import { buttonVariants } from './variants'

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
  rounded?: boolean
  isLoading?: boolean
  fullWidth?: boolean
  isFileUpload?: boolean
  onFileChange?: (event: React.ChangeEvent<HTMLInputElement>) => void
  accept?: string
}
