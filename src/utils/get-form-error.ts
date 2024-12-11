import { get } from 'react-hook-form'

function getFormError(errors: object, field: string): string | undefined {
  const error = get(errors, field)

  return (error?.message as string) ?? undefined
}

export { getFormError }
