import { create } from "zustand"

export const useLoadingStore = create<{
  isSignLoading: boolean
  setIsSignLoading: (value: boolean) => void
}>()(
  (set) => ({
    isSignLoading: false,
    setIsSignLoading: (value: boolean) => set({ isSignLoading: value })
  })
)
