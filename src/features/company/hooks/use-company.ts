import { useEffect, useState } from 'react'
import { getCompany } from '../api/get-company'
import { getCompanyJobs } from '@/features/jobs/actions'
import { Job } from '@/features/jobs'
import { Company } from '../types'

type UseCompanyParams = {
  id: string
}

const useCompany = ({ id }: UseCompanyParams) => {
  const [isLoading, setIsLoading] = useState(true)
  const [data, setData] = useState<{
    jobs: Job[]
    company: Company | null
  }>({
    jobs: [],
    company: null
  })
  useEffect(() => {
    const getData = async () => {
      setIsLoading(true)
      const [{ data }, { data: jobs }] = await Promise.all([
        getCompany({ id: id as string }),
        getCompanyJobs({ companyId: id as string })
      ])

      setData({
        jobs,
        company: data
      })
      setIsLoading(false)
    }

    getData()
  }, [id])

  return {
    data,
    isLoading
  }
}

export { useCompany }
