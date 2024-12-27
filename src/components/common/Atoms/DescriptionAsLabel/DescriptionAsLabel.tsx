import React from 'react'
import { Typography } from '../Typography'

type DescriptionAsLabelProps = {
  description?: string | null
}

export const DescriptionAsLabel = ({
  description
}: DescriptionAsLabelProps) => {
  if (!description) return <></>
  return (
    <Typography variant="p" className="mb-1 text-xs font-medium text-black">
      {description}
    </Typography>
  )
}
