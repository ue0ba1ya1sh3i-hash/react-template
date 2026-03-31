// This file manages the title of the page.

import { useEffect, useState } from "react"
import { useTranslation } from "react-i18next"
import { matchPath, useLocation } from "react-router-dom"

function resolveTitleKey(pathname: string) {
  const normalPath = pathname.replace(/\/+$/, "") || "/"
  const dynamicRouteMap = [
    { path: "/notice/:id", key: "pages.notice.pages.detail.title" },
  ] as const

  for (const route of dynamicRouteMap) {
    // Check match dynamic route
    if (matchPath({ path: route.path, end: true }, normalPath)) {
      return route.key
    }
  }

  const page = normalPath.replace(/^\//, "").replace(/\//g, ".pages.") || "index"
  return `pages.${page}.title`
}

export function useTitle() {
  const location = useLocation()
  const key = resolveTitleKey(location.pathname)
  const { t, i18n } = useTranslation()
  const [title, setTitle] = useState("Loading...")

  useEffect(() => {
    // Check translation key
    if (i18n.exists(key as any)) {
      setTitle(t(key as any))
    } else {
      setTitle(t("pages.notfound.title"))
    }
  }, [key, t, i18n])

  return { title }
}
