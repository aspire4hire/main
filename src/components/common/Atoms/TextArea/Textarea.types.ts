import React from 'react'

export type TextareaProps = React.ComponentProps<'textarea'> & {
  label?: string
  error?: string
  description?: string
}
