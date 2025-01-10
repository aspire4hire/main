import { useEffect, useState } from 'react'
import { getCredentials } from '../../actions'
import { useCredentialStateStore } from '../../store'

const useCredentials = () => {
  const [isLoading, setIsLoading] = useState(false)

  const { credentials, setCredentialState } = useCredentialStateStore()

  useEffect(() => {
    const getSkills = async () => {
      setIsLoading(true)
      const skillTrades = await getCredentials()
      setIsLoading(false)
      setCredentialState({ credentials: skillTrades })
    }

    if (credentials.length === 0) getSkills()
  }, [credentials.length, setCredentialState])

  return {
    data: credentials,
    isLoading
  }
}

export { useCredentials }
