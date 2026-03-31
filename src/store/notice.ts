// This store manages notice permissions.

import { create } from "zustand"
import { persist, createJSONStorage } from "zustand/middleware"

export const useNoticeStore = create<{
  noticeAllow: boolean
  setNoticeAllow: (value: boolean) => void
}>()(
  persist(
    (set) => ({
      noticeAllow: window.matchMedia("(prefers-color-scheme: dark)").matches,
      setNoticeAllow: (value: boolean) => set({ noticeAllow: value })
    }),

    {
      name: "noticeAllow",
      storage: createJSONStorage(() => localStorage)
    }
  )
)
