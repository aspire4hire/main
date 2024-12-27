import { useEffect, useState } from 'react'
import { getSkills } from '../actions'
import { Skill } from '../types'

const useSkills = () => {
  const [skillsTrades, setSkillsTrades] = useState<Skill[]>([])
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    const getSkillsData = async () => {
      setIsLoading(true)
      const skills = await getSkills()
      setIsLoading(false)
      setSkillsTrades(skills)
    }
    getSkillsData()
  }, [])

  return {
    data: skillsTrades,
    isLoading
  }
}

export { useSkills }
