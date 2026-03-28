// This file changes the theme from the theme store.

import { useEffect } from "react"

// Store
import { useThemeStore } from "@/hooks/store/theme"

export function useThemeSetup() {
  const { dark } = useThemeStore()

  useEffect(() => {
    if (dark) {
      document.body.classList.add("dark")
    } else {
      document.body.classList.remove("dark")
    }
  }, [dark])
}
