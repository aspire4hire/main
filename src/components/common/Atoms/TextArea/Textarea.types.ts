import React from 'react'

export type TextareaProps = React.ComponentProps<'textarea'> & {
  label?: string
  hasError?: boolean
}
