import { useEffect, useState } from 'react'
import { Province } from '../../types'
import { getProvinces } from '../../actions'

const useProvinces = () => {
  const [provinces, setProvinces] = useState<Province[]>([])
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    const getSkills = async () => {
      setIsLoading(true)
      const skillTrades = await getProvinces()
      setIsLoading(false)
      setProvinces(skillTrades)
    }
    getSkills()
  }, [])

  return {
    data: provinces,
    isLoading
  }
}

export { useProvinces }
