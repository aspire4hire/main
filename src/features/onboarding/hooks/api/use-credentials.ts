import { useEffect, useState } from 'react'
import { Credential } from '../../types'
import { getCredentials } from '../../actions'

const useCredentials = () => {
  const [credentials, setCredentials] = useState<Credential[]>([])
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    const getSkills = async () => {
      setIsLoading(true)
      const skillTrades = await getCredentials()
      setIsLoading(false)
      setCredentials(skillTrades)
    }
    getSkills()
  }, [])

  return {
    data: credentials,
    isLoading
  }
}

export { useCredentials }
