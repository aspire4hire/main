import { useEffect, useState } from 'react'
import { SkillTrade } from '../../types'
import { getSkillTrades } from '../../actions'

const useSkillTrades = () => {
  const [skillsTrades, setSkillsTrades] = useState<SkillTrade[]>([])
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    const getSkills = async () => {
      setIsLoading(true)
      const skillTrades = await getSkillTrades()
      setIsLoading(false)
      setSkillsTrades(skillTrades)
    }
    getSkills()
  }, [])

  return {
    data: skillsTrades,
    isLoading
  }
}

export { useSkillTrades }
