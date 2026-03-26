// This file dynamically retrieves the title using hooks.

import { useLocation } from "react-router-dom"

export function useTitle() {
  const location = useLocation()
  const page = location.pathname.replace("/", "") || "index" // root is "index"
  const key = `title.${page}`  

  return { key }
}
