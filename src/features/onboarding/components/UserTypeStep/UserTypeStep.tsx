'use client'

import {
  Button,
  CompanyIcon,
  IconSizeEnum,
  ProfileIcon,
  Typography
} from '@/components'
import { cn } from '@/utils'
import { useOnboardingFormContext } from '../../context'
import { StepPositionEnum } from '../../types'

export const UserTypeStep = () => {
  const {
    form: { setValue, watch, resetField },
    handleChangeStep
  } = useOnboardingFormContext()

  const handleSelectUserType = (isEmployer: boolean) => {
    if (watch('is_employer') !== isEmployer) {
      if (watch('is_employer')) {
        resetField('name')
        resetField('description')
        resetField('why_work_with_us')
        resetField('logo_url')
        resetField('website_url')
        resetField('address')
      } else {
        resetField('skilled_trades')
      }
    }
    setValue('is_employer', isEmployer)
    handleChangeStep(StepPositionEnum.BASIC_INFORMATION)
  }

  return (
    <section className="flex h-[100dvh] w-full items-center justify-center bg-primary">
      <div className={cn('flex flex-col items-center gap-20')}>
        <Button
          onClick={() => handleSelectUserType(false)}
          variant={'ghostSecondary'}
          size={'xl'}
          fullWidth
          className={cn(
            watch('is_employer') === false && 'bg-secondary text-white'
          )}
        >
          <div className="flex items-center gap-3">
            <ProfileIcon size={IconSizeEnum.LG} className="text-white" />
            <Typography
              variant="p"
              className={cn(
                'font-bold text-secondary',
                watch('is_employer') === false ? 'text-white' : 'text-secondary'
              )}
            >
              I am a job seeker
            </Typography>
          </div>
        </Button>
        <Button
          onClick={() => handleSelectUserType(true)}
          variant={'ghostSecondary'}
          size={'xl'}
          fullWidth
          className={cn(
            watch('is_employer') === true && 'bg-secondary text-white'
          )}
        >
          <div className="flex items-center gap-3">
            <CompanyIcon size={IconSizeEnum.LG} className="text-white" />
            <Typography
              variant="p"
              className={cn(
                'font-bold text-secondary',
                watch('is_employer') === true ? 'text-white' : 'text-secondary'
              )}
            >
              I am an employer
            </Typography>
          </div>
        </Button>
      </div>
    </section>
  )
}
