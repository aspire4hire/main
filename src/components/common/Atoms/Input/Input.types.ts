import { ComponentProps } from 'react'

interface InputProps extends ComponentProps<'input'> {
  label?: string
  hasError?: boolean
}

export type { InputProps }
