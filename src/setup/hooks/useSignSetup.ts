// This file monitors the sign-in status and sets excluded paths.

import { useAuthState } from "react-firebase-hooks/auth"
import { useEffect } from "react"
import { useLocation } from "react-router-dom"
import { useNavigate } from "@/router"
import { auth } from "@/lib/firebase"
import { useLoading } from "@/hooks/loading"

export function useSighinSetup() {
  const [user, loading] = useAuthState(auth)
  const { isLoading, start, finish } = useLoading()
  const navigate = useNavigate()
  const locationPath = useLocation().pathname

  // Set ignore paths
  const signoutIgnorePath = ["/", "/admin"]
  const signinIgnorePath = ["/signin", "/signup"]

  // 
  useEffect(() => {
    start("sign")
  }, [])

  useEffect(() => {
    if (!loading) {
      if (!user && signoutIgnorePath.includes(locationPath)) {
        navigate("/introduce")
      } else if (user && signinIgnorePath.includes(locationPath)) {
        navigate("/")
      }
      
      finish("sign")
    }
  }, [user, loading, locationPath])

  return { isLoading }
}
