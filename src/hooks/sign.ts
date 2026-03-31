// This file is signing functions.

import { useNavigate } from "react-router-dom"
import { toast } from "sonner"
import {
  GoogleAuthProvider,
  linkWithPopup,
  signInAnonymously,
  signInWithPopup,
  deleteUser,
  getAuth
} from "firebase/auth"

// Libraries
import { auth } from "@/lib/firebase"
import { log, errorLog } from "@/lib/log"

export function useGoogleSignin() {
  const navigate = useNavigate()

  async function signin() {
    try {
      // Confirm user is not signed in
      const user = getAuth().currentUser
      if (user) return
      
      const provider = new GoogleAuthProvider()
      await signInWithPopup(auth, provider)
      navigate("/", { replace: true })
      toast.success("Googleでサインインしました。")
      log("User signed in with Google.")
    } catch(error) {
      errorLog(error)
    }
  }

  return signin
}

export function useGoogleUpgrade() {
  const navigate = useNavigate()

  async function upgrade() {
    try {
      // Confirm user is guest
      const user = getAuth().currentUser
      if (!user || !user.isAnonymous) return
      
      // Upgrade with Google
      const provider = new GoogleAuthProvider()
      await linkWithPopup(user, provider)
      
      // Reload
      await user.reload()
      navigate("/", { replace: true })
      toast.success("ゲストアカウントをGoogleアカウントに接続しました。")
      log("User upgraded with Google.")
    } catch (error) {
      errorLog(error)
    }
  }

  return upgrade
}

export function useGuestSignin() {
  const navigate = useNavigate()

  async function signin() {
    try {
      // Confirm user is not signed in
      const user = getAuth().currentUser
      if (user) return
      
      await signInAnonymously(auth)
      navigate("/", { replace: true })
      toast.success("ゲストアカウントでサインインしました。")
      log("User signed in with guest.")
    } catch (error) {
      errorLog(error)
    }
  }

  return signin
}

export function useDeleteAccount() {
  const navigate = useNavigate()

  async function deleteAccount() {
    try {
      // Confirm user is signed in
      const user = getAuth().currentUser
      if (!user) return

      await deleteUser(user)
      navigate("/introduce", { replace: true })
      toast.success("アカウントを削除しました。")
      log("User deleted")
    } catch (error) {
      errorLog(error)
    }
  }

  return deleteAccount
}

export function useSignout() {
  const navigate = useNavigate()
  const deleteAccount = useDeleteAccount()

  async function signout() {
    try {
      // Confirm user is signed in
      const user = getAuth().currentUser
      if (!user) return
      
      if (user.isAnonymous) {
        await deleteAccount()
      } else {
        await auth.signOut()
        navigate("/introduce", { replace: true })
        log("User signed out")
        toast.success("サインアウトしました。")
      }
    } catch(error) {
      errorLog(error)
    }
  }

  return signout
}
