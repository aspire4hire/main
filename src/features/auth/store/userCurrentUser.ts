import { create } from 'zustand'
import { Profile } from '@/features/onboarding/types'

interface CurrentSessionState {
  profile: Profile | null
  setCurrentSessionState: (state: Partial<CurrentSessionState>) => void
}

const useCurrentSessionStore = create<CurrentSessionState>(set => ({
  profile: null,
  setCurrentSessionState: state => set(prev => ({ ...prev, ...state }))
}))

export { useCurrentSessionStore }
