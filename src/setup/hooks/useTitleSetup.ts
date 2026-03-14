// This file dynamically changes the title from the translation data.

import { useEffect } from "react"
import { useLocation } from "react-router-dom"
import { useTranslation } from "react-i18next"
import { env } from "@/lib"

export function usePageSetup() {
  const location = useLocation()
  const { t, i18n } = useTranslation()

  useEffect(() => {
    const page = location.pathname.replace("/", "") || "index" // root is "index"
    const key = `title.${page}`  

    // Set title
    let title = "404 | Not Found"
    if (i18n.exists(key)) {
      title = t(key)
    }

    document.title = title + " - " + env.title
  }, [location.pathname, t])
}
