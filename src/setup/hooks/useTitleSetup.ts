// This file changes the title from location and translate files

import { useEffect } from "react"
import { useLocation } from "react-router-dom"
import { useTranslation } from "react-i18next"
import { env } from "@/lib/env"
import { useTitle } from "@/hooks/title"

export function usePageSetup() {
  const location = useLocation()
  const { t, i18n } = useTranslation()
  const { key } = useTitle()

  useEffect(() => {
    let title = "404 | Not Found" // Default value
    if (i18n.exists(key as any)) {
      title = t(key as any)
    }

    document.title = title + " - " + env.title
  }, [location.pathname, t])
}
