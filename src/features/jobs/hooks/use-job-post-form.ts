'use client'

import { useForm } from 'react-hook-form'
import { JobDTO } from '../types'
import { useEffect, useState } from 'react'
import { useSkillTrades } from '@/features/onboarding/hooks'
import { useSkills } from './use-skill'
import { useParams, useRouter } from 'next/navigation'
import { createJob, updateJob } from '../actions'
import { toast } from 'sonner'
import { ROUTES } from '@/constants'

type UseJobPostFormParams = {
  data?: JobDTO
}

const useJobPostForm = ({ data }: UseJobPostFormParams = {}) => {
  const { id } = useParams()
  const router = useRouter()
  const [isLoading, setIsLoading] = useState(false)
  const form = useForm<JobDTO>({
    mode: 'onTouched',
    defaultValues: {
      skilled_trades: [],
      skills: [],
      company_id: id as string,
      id: data?.id
    }
  })

  const { data: skillTrades, isLoading: isLoadingSkillTrades } =
    useSkillTrades()

  const { data: skills, isLoading: isLoadingSkills } = useSkills()
  useEffect(() => {
    if (data) {
      console.log({ data })
      form.reset({
        id: data.id,
        company_id: data.company_id,
        job_description: data.job_description,
        job_description_html: data.job_description_html,
        job_title: data.job_title,
        job_location: data.job_location,
        position_type: data.position_type,
        salary_range: data.salary_range,
        key_responsibilities: data.key_responsibilities,
        key_responsibilities_html: data.key_responsibilities_html,
        qualifications: data.qualifications,
        qualifications_html: data.qualifications_html,
        skilled_trades: data.skilled_trades,
        skills: data.skills
      })
      setTimeout(() => {
        form.setValue('position_type', data.position_type)
      }, 0)
    }
  }, [data])

  const handleChangeSkillTrade = (
    skillTradeId: string,
    onChange: (ids: string[]) => void
  ) => {
    const skillsTradesSelected = form.watch('skilled_trades') ?? []

    const isSkillTradeSelected = skillsTradesSelected?.find(
      skillTradeSelected => skillTradeSelected === skillTradeId
    )

    if (!isSkillTradeSelected) {
      onChange([...skillsTradesSelected, skillTradeId])
    } else
      onChange(
        skillsTradesSelected.filter(skillTrade => skillTrade !== skillTradeId)
      )
  }

  const onSubmit = async (data: JobDTO, callback?: () => void) => {
    setIsLoading(true)

    let error = null

    if (data?.id) {
      const { error: errorResponse } = await updateJob({
        body: data
      })

      error = errorResponse
    } else {
      const { error: errorResponse } = await createJob({
        body: data
      })
      error = errorResponse
    }

    if (error) {
      toast.error(
        'We are unable to process your request. Please check try again.',
        {
          position: 'top-center'
        }
      )
      setIsLoading(false)
    } else {
      callback?.()
      if (data?.id) {
        router.push(
          ROUTES.JOB_POST_COMPANY({ id: data.id, companyId: data.company_id })
        )
      } else router.push(ROUTES.COMPANY_DETAILS({ id: id as string }))
    }
  }

  return {
    isLoading,
    form,
    skillTrades,
    isLoadingSkillTrades,
    skills,
    isLoadingSkills,
    handleChangeSkillTrade,
    onSubmit
  }
}

export { useJobPostForm }
