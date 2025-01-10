import { useEffect, useState } from 'react'
import { getSkills } from '../actions'
import { useSkillsStateStore } from '@/features/onboarding/store'

const useSkills = () => {
  const [isLoading, setIsLoading] = useState(false)

  const { setSkillsState, skills } = useSkillsStateStore()

  useEffect(() => {
    const getSkillsData = async () => {
      setIsLoading(true)
      const skills = await getSkills()
      setIsLoading(false)
      setSkillsState({ skills })
    }

    if (skills.length === 0) {
      getSkillsData()
    }
  }, [setSkillsState, skills.length])

  return {
    data: skills,
    isLoading
  }
}

export { useSkills }
