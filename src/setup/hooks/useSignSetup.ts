// This setup hooks manage redirect logic based on authentication status.

import { useEffect } from "react"
import { useLocation } from "react-router-dom"
import { useNavigate } from "@/router"
import { useAuthStore } from "@/store/auth"

export function useAuthRedirectSetup() {
  const { user, userLoading: loading } = useAuthStore()
  const navigate = useNavigate()
  const path = useLocation().pathname

  // Ignore paths
  const signoutIgnorePath = ["/i", "/"]
  const signinIgnorePath = ["/o"]

  // Redirect with sign status
  useEffect(() => {
    if (!loading) {
      if (!user && signoutIgnorePath.includes(path)) {
        navigate("/introduce")
      } else if (user && signinIgnorePath.includes(path)) {
        navigate("/")
      }
    }
  }, [user, loading, path, navigate])
}
