// This file allows you to decide whether to add a dark class to the body tag from the Theme store.

import { useThemeStore } from "@/hooks/store"
import { useEffect } from "react"

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
