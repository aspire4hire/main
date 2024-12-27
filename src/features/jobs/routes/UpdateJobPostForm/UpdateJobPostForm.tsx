import React from 'react'
import { JobPostForm } from '../../components'
import { JobDTO } from '../../types'

type UpdateJobPostFormProps = {
  data: JobDTO
}

export const UpdateJobPostForm = ({ data }: UpdateJobPostFormProps) => {
  return <JobPostForm isEditing data={data} />
}
