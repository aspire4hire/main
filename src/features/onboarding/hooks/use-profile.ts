import { useEffect, useState } from 'react'
import { getUserProfile } from '../actions/get-profile'
import { Profile } from '../types'

const useProfile = () => {
  const [data, setData] = useState<Profile | null>()
  const [isLoading, setIsLoading] = useState(false)

  const getProfile = async () => {
    setIsLoading(true)
    const { data } = await getUserProfile()

    setIsLoading(false)
    setData(data)
  }

  useEffect(() => {
    getProfile()
  }, [])

  return {
    data,
    isLoading
  }
}

export { useProfile }
