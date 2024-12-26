import {
  ArrowRightIcon,
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
import { Job } from '@/features/jobs'
import { formatDate } from '@/utils'
import { Trash2Icon } from 'lucide-react'

type CompanyJobPostProps = {
  job: Job
  onCloseJobPost?: (job: Job) => void
  onDeleteJobPost?: (job: Job) => void
}
export const CompanyJobPost = ({
  job,
  onCloseJobPost,
  onDeleteJobPost
}: CompanyJobPostProps) => {
  return (
    <div className="flex w-full flex-col gap-3 rounded-3xl border border-tertiary p-4">
      <div className="flex w-full items-center justify-between">
        <Badge className="bg-primary text-primary-foreground">Open</Badge>
        <Popover>
          <PopoverTrigger asChild>
            <Button variant={'icon'}>
              <ThreeDotIcon size={IconSizeEnum.SM} />
            </Button>
          </PopoverTrigger>
          <PopoverContent className="w-48 bg-gray-100 p-0">
            {onCloseJobPost && (
              <button
                onClick={() => onCloseJobPost(job)}
                className="flex w-full items-center gap-2 p-3 transition-all hover:bg-tertiary/10"
              >
                <EditIcon
                  size={IconSizeEnum.SM}
                  className="!h-5 !w-5 font-semibold text-primary"
                />
                <Typography variant="span" className="text-sm font-semibold">
                  CLOSE JOB
                </Typography>
              </button>
            )}
            {onDeleteJobPost && (
              <button
                onClick={() => onDeleteJobPost(job)}
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
        <button className="appearance-none outline-none">
          <ArrowRightIcon
            size={IconSizeEnum['2XL']}
            className="font-light text-secondary"
            stroke="2"
          />
        </button>
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
        <Typography className="text-[10px] font-bold text-tertiary md:text-xs">
          Applicants:
          <Typography
            variant="span"
            className="ml-1 text-[10px] font-normal text-tertiary md:text-xs"
          >
            3
          </Typography>
        </Typography>
      </div>
    </div>
  )
}
