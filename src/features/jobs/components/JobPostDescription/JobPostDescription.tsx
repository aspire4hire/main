import { Badge, TextEditorPreview, Typography } from '@/components'
import React from 'react'
import { Job } from '../../types'

type JobPostDescriptionProps = {
  job: Job
}

export const JobPostDescription = ({ job }: JobPostDescriptionProps) => {
  return (
    <div className="w-full space-y-6">
      <div className="w-full space-y-1">
        <Typography
          variant="h6"
          className="w-full text-center font-bold leading-5"
        >
          {job.job_title}
        </Typography>
        <Typography
          variant="p"
          className="w-full text-center text-xs text-tertiary"
        >
          {job.job_location}
        </Typography>
        <Typography
          variant="p"
          className="w-full text-center text-[10px] font-medium md:text-xs"
        >
          {job.job_description}
        </Typography>
      </div>
      <div className="space-y-3">
        <Typography variant="p" className="font-bold text-tertiary">
          Position Type:
          <Typography variant="span" className="ml-1 font-normal">
            {job.position_type}
          </Typography>
        </Typography>
        <Typography variant="p" className="font-bold text-tertiary">
          Salary Type:
          <Typography variant="span" className="ml-1 font-normal">
            {job.salary_range}
          </Typography>
        </Typography>
      </div>
      <div>
        <Typography variant="semiTitle">Skill Tags</Typography>
        <div className="mt-2 flex flex-wrap gap-3">
          {job.skill_tags.map((skill, index) => (
            <Badge className="text-secondary" key={index}>
              {skill.skill_name}
            </Badge>
          ))}
        </div>
      </div>
      <div className="h-[2px] w-full bg-tertiary/20"></div>
      <TextEditorPreview
        content={job.key_responsibilities}
        title="Key Responsibilities"
      />
      <TextEditorPreview
        content={job.qualifications_html}
        title="Qualifications"
      />
    </div>
  )
}