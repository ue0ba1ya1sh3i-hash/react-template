// This file is a store manages loading states.

import { create } from "zustand"

type Sign =  {
  signinLoading: boolean
  setSigninLoading: (value: boolean) => void
}

export const useSignLoadingStore = create<Sign>()(
  (set) => ({
    signinLoading: false,
    setSigninLoading: (value: boolean) => set({ signinLoading: value })
  })
)
