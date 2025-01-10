import { create } from 'zustand'

import { Skill } from '@/features/jobs'

interface SkillsState {
  skills: Skill[]
  setSkillsState: (state: Partial<SkillsState>) => void
}

const useSkillsStateStore = create<SkillsState>(set => ({
  skills: [],
  setSkillsState: state => set(prev => ({ ...prev, ...state }))
}))

export { useSkillsStateStore }
