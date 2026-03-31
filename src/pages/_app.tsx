// This components is main layout page.
// It uses for setup hooks.

import { useLoading } from "@/hooks/loading"

// Components
import { Outlet } from "react-router-dom"
import { LoaderIcon } from "lucide-react"
import { Toaster } from "@/components/ui/sonner"

// Setup hooks
import { useAuthRedirectSetup } from "@/setup/hooks/useSignSetup"
import { useAuthStoreSetup } from "@/setup/hooks/useAuthSetup"
import { useTitleSetup } from "@/setup/hooks/useTitleSetup"
import { useThemeSetup } from "@/setup/hooks/useThemeSetup"
import { useNoticeSetup } from "@/setup/hooks/useNoticeSetup"

function Loading({ className, ...props }: React.ComponentProps<"svg">) {
  return (
    <LoaderIcon
      role="status"
      aria-label="Loading"
      className="size-7 text-foreground/30 animate-spin"
      {...props}
    />
  )
}

export default function Layout() {
  // Setup hooks
  useThemeSetup()
  useAuthStoreSetup()
  useAuthRedirectSetup()
  useTitleSetup()
  useNoticeSetup()

  // Hooks
  const { loading } = useLoading()

  // Display loading
  if (loading) return (
    <div className="bg-background min-h-svh w-full flex items-center justify-center">
      <Loading />
    </div>
  )

  return (
    <div className="bg-background text-foreground min-h-svh w-full wrap-break-word">
      <Outlet />
      <Toaster />
    </div>
  )
}
