import { create } from 'zustand'

export type FilterState = {
  skillTrades: string[]
  skills: string[]
  credentials: string[]
}

interface SpotlightStateStore {
  filter: FilterState
  setSpotlightStateStore: (state: Partial<SpotlightStateStore>) => void
}

const useSpotlightStateStoreStore = create<SpotlightStateStore>(set => ({
  filter: {
    credentials: [],
    skills: [],
    skillTrades: []
  },
  setSpotlightStateStore: state => set(prev => ({ ...prev, ...state }))
}))

export { useSpotlightStateStoreStore }
