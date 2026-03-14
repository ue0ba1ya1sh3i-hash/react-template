// This file determines which paths to exclude depending on whether you are logged in or not.

import { auth } from "@/lib"
import { useAuthState } from "react-firebase-hooks/auth"
import { useNavigate } from "@/router"
import { useEffect } from "react"
import { useLocation } from "react-router-dom"

export function useSighinSetup() {
    const [user, loading] = useAuthState(auth)
    const navigate = useNavigate()
    const location = useLocation()

    // Set ignore paths
    const ignorePaths = ["/signin", "/signup", "/introduce", "/updates", "/terms", "/privacy"]
    const absoluteIgnorePaths = ["/signin", "/signup"]

    useEffect(() => {
      if (!loading && !user && !ignorePaths.includes(location.pathname)) {
        navigate("/introduce")
      } else if (!loading && user && absoluteIgnorePaths.includes(location.pathname)) {
        navigate("/")
      }
    }, [user, loading, location.pathname])
}
