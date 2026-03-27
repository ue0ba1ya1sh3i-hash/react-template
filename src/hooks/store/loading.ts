// This file is a store related to loading.

import { create } from "zustand"

export const useLoadingStore = create<{
  signLoading: boolean
  setSignLoading: (value: boolean) => void
}>()(
  (set) => ({
    signLoading: false,
    setSignLoading: (value: boolean) => set({ signLoading: value })
  })
)
