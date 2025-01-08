'use client'

import {
  ArrowRightIcon,
  Avatar,
  AvatarSizeEnum,
  Badge,
  Button,
  EditIcon,
  IconSizeEnum,
  Popover,
  PopoverContent,
  PopoverTrigger,
  ThreeDotIcon,
  Typography
} from '@/components'
import { ROUTES } from '@/constants'
import { useJobStatusController } from '@/features/company/hooks'
import { Job, JobStatusEnum } from '@/features/jobs'
import { cn, formatDate } from '@/utils'
import { Trash2Icon } from 'lucide-react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'

type CompanyJobPostProps = {
  job: Job
  isExternalView?: boolean
  hideActions?: boolean
}
export const CompanyJobPost = ({
  job,
  isExternalView,
  hideActions
}: CompanyJobPostProps) => {
  const router = useRouter()
  const isJobSeekerView = isExternalView

  const { isLoading, onSubmit } = useJobStatusController()

  const redirectToJob = !isJobSeekerView
    ? ROUTES.JOB_POST_COMPANY({
        id: job.id,
        companyId: job.company.id
      })
    : ROUTES.JOB_POST_JOOB_SEEKER_VIEW({
        jobId: job.id
      })

  console.log({ status: job.job_status })

  return (
    <div
      className={cn(
        'flex w-full cursor-pointer flex-col gap-3 rounded-3xl border border-tertiary p-4',
        isLoading && 'animate-pulse bg-tertiary/10'
      )}
      onClick={() => router.push(redirectToJob)}
    >
      {!isJobSeekerView && !isExternalView ? (
        <div className="flex w-full items-center justify-between">
          <Badge
            className={cn(
              'text-primary-foreground',
              JobStatusEnum.OPEN === job.job_status
                ? 'bg-primary hover:bg-primary'
                : 'bg-primary/50 hover:bg-primary/50'
            )}
          >
            {job.job_status === JobStatusEnum.OPEN ? 'OPEN' : 'CLOSED'}
          </Badge>
          <Popover>
            <PopoverTrigger asChild disabled={isLoading}>
              <Button variant={'icon'} onClick={e => e.stopPropagation()}>
                <ThreeDotIcon size={IconSizeEnum.SM} />
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-48 bg-gray-100 p-0">
              {!hideActions && (
                <button
                  onClick={e => {
                    e.stopPropagation()
                    onSubmit({
                      jobId: job.id,
                      status:
                        (job.job_status as JobStatusEnum) === JobStatusEnum.OPEN
                          ? JobStatusEnum.CLOSE
                          : JobStatusEnum.OPEN
                    })
                  }}
                  className="flex w-full items-center gap-2 p-3 transition-all hover:bg-tertiary/10"
                >
                  <EditIcon
                    size={IconSizeEnum.SM}
                    className="!h-5 !w-5 font-semibold text-primary"
                  />
                  <Typography variant="span" className="text-sm font-semibold">
                    {job.job_status === JobStatusEnum.OPEN ? 'CLOSE' : 'OPEN'}{' '}
                    JOB
                  </Typography>
                </button>
              )}
              {!hideActions && (
                <button
                  onClick={() => {}}
                  className="flex w-full items-center gap-1 p-3 transition-all hover:bg-tertiary/10"
                >
                  <Trash2Icon className="!h-5 !w-5 font-semibold text-destructive" />
                  <Typography
                    variant="span"
                    className="text-sm font-semibold text-destructive"
                  >
                    DELETE JOB
                  </Typography>
                </button>
              )}
            </PopoverContent>
          </Popover>
        </div>
      ) : (
        <div>
          <Avatar
            src={job.company.logo_url}
            name={job.company.name}
            size={AvatarSizeEnum.XS}
            href={ROUTES.COMPANY_DETAILS_JOOB_SEEKER({ id: job.company.id })}
            justClickable
          />
        </div>
      )}
      <div className="flex items-center justify-between">
        <div>
          <Typography
            variant="semiTitle"
            className="pb-0 !text-sm !leading-[8px] md:!leading-[10px]"
          >
            {job.job_title}
          </Typography>
          <Typography variant="span" className="text-xs text-tertiary">
            {job.job_location}
          </Typography>
        </div>
        <Link href={redirectToJob} className="appearance-none outline-none">
          <ArrowRightIcon
            size={IconSizeEnum['2XL']}
            className="font-light text-secondary"
            stroke="2"
          />
        </Link>
      </div>
      <div className="flex justify-between">
        <Typography className="text-[10px] font-bold text-tertiary md:text-xs">
          Posted On:
          <Typography
            variant="span"
            className="ml-1 text-[10px] font-normal text-tertiary md:text-xs"
          >
            {formatDate(job.created_at, { outputFormat: 'dd/MM/yyyy' })}
          </Typography>
        </Typography>
        {!isJobSeekerView && !isExternalView && (
          <Typography className="text-[10px] font-bold text-tertiary md:text-xs">
            Applicants:
            <Typography
              variant="span"
              className="ml-1 text-[10px] font-normal text-tertiary md:text-xs"
            >
              {job.applicants?.length || 0}
            </Typography>
          </Typography>
        )}
      </div>
    </div>
  )
}
