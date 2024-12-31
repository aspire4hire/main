import { ComponentProps } from 'react'

interface InputProps extends ComponentProps<'input'> {
  label?: string
  smallLabel?: string
  description?: string
  error?: string
}

export type { InputProps }
