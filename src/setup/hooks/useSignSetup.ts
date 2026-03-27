// This file monitors the sign-in status and sets excluded paths.

import { useAuthState } from "react-firebase-hooks/auth"
import { useEffect } from "react"
import { useLocation } from "react-router-dom"
import { useNavigate } from "@/router"

// Libraries
import { auth } from "@/lib/firebase"

export function useSighinSetup() {
  const [user, loading] = useAuthState(auth)
  const navigate = useNavigate()
  const path = useLocation().pathname

  // Set ignore paths
  const signoutIgnorePath = ["/", "/admin"]
  const signinIgnorePath = ["/signin", "/signup"]

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
