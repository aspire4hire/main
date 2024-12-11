import { ComponentProps } from 'react'

interface InputProps extends ComponentProps<'input'> {
  label?: string
  error?: string
}

export type { InputProps }
