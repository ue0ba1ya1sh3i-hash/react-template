// This file is the parent element of the page component.

import { Outlet } from "react-router-dom"

// Setup hooks
import { useSighinSetup } from "@/setup/hooks/useSignSetup"
import { usePageSetup } from "@/setup/hooks/useTitleSetup"
import { useThemeSetup } from "@/setup/hooks/useThemeSetup"

export default function Layout() {
  const { isLoading } = useSighinSetup()
  usePageSetup()
  useThemeSetup()

  if (isLoading) {
    return (
      <div className="bg-background text-foreground"></div>
    )
  } else {
    return (
      <div className="bg-background text-foreground">
        <Outlet />
      </div>
    )
  }
}
