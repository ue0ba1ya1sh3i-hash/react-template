// This file changes the title from location and translate files

import { useEffect } from "react"
import { env } from "@/lib/env"
import { useTitle } from "@/hooks/title"

export function usePageSetup() {
  const { title } = useTitle()

  useEffect(() => {
    document.title = title + " - " + env.title
  }, [title])
}
