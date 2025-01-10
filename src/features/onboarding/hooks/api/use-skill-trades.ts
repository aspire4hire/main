import { useEffect, useState } from 'react'
import { getSkillTrades } from '../../actions'
import { useSkillsTradesStateStore } from '../../store/use-skill-trades-store'

const useSkillTrades = () => {
  const [isLoading, setIsLoading] = useState(false)

  const { setSkillsTradesState, skillsTrades } = useSkillsTradesStateStore()

  useEffect(() => {
    const getSkills = async () => {
      setIsLoading(true)
      const skillTrades = await getSkillTrades()
      setIsLoading(false)
      setSkillsTradesState({ skillsTrades: skillTrades })
    }

    if (skillsTrades.length === 0) getSkills()
  }, [setSkillsTradesState, skillsTrades.length])

  return {
    data: skillsTrades,
    isLoading
  }
}

export { useSkillTrades }
