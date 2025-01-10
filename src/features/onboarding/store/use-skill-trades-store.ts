import { create } from 'zustand'

import { SkillTrade } from '../types'

interface SkillsTradesState {
  skillsTrades: SkillTrade[]
  setSkillsTradesState: (state: Partial<SkillsTradesState>) => void
}

const useSkillsTradesStateStore = create<SkillsTradesState>(set => ({
  skillsTrades: [],
  setSkillsTradesState: state => set(prev => ({ ...prev, ...state }))
}))

export { useSkillsTradesStateStore }
