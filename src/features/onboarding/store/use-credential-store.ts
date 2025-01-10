import { create } from 'zustand'

import { Credential } from '../types'

interface CredentialState {
  credentials: Credential[]
  setCredentialState: (state: Partial<CredentialState>) => void
}

const useCredentialStateStore = create<CredentialState>(set => ({
  credentials: [],
  setCredentialState: state => set(prev => ({ ...prev, ...state }))
}))

export { useCredentialStateStore }
