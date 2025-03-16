'use client'

import { useEffect, useState } from 'react'
import { getPublicJobPosts } from '../actions'
import { Job } from '../types'

const usePublicJobs = () => {
  const [isLoading, setIsLoading] = useState(true)
  const [data, setData] = useState<Job[]>([])

  useEffect(() => {
    const getJobs = async () => {
      const { data, error } = await getPublicJobPosts()

      if (error) {
        setIsLoading(false)
        setData([])
        return
      }

      setData(data)
      setIsLoading(false)
    }
    getJobs()
  }, [])

  return {
    data,
    isLoading
  }
}

export { usePublicJobs }
