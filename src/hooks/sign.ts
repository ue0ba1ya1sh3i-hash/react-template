// This file is signing functions.

import { useNavigate } from "react-router-dom"
import { toast } from "sonner"
import { useTranslation } from "react-i18next"
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
  const { t } = useTranslation()

  async function signin() {
    try {
      // Confirm user is not signed in
      const user = getAuth().currentUser
      if (user) return
      
      const provider = new GoogleAuthProvider()
      await signInWithPopup(auth, provider)
      navigate("/", { replace: true })
      log("User signed in with Google.")
    } catch(error) {
      toast.error(t("common.error.main"))
      errorLog(error)
    }
  }

  return signin
}

export function useGoogleUpdate() {
  const navigate = useNavigate()
  const { t } = useTranslation()

  async function update() {
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
      toast.success(t("toast.sign.update.google"))
      log("User updated with Google.")
    } catch (error) {
      toast.error(t("common.error.main"))
      errorLog(error)
    }
  }

  return update
}

export function useGuestSignin() {
  const navigate = useNavigate()
  const { t } = useTranslation()

  async function signin() {
    try {
      // Confirm user is not signed in
      const user = getAuth().currentUser
      if (user) return
      
      await signInAnonymously(auth)
      navigate("/", { replace: true })
      log("User signed in with guest.")
    } catch (error) {
      toast.error(t("common.error.main"))
      errorLog(error)
    }
  }

  return signin
}

export function useDeleteAccount() {
  const navigate = useNavigate()
  const { t } = useTranslation()

  async function deleteAccount() {
    try {
      // Confirm user is signed in
      const user = getAuth().currentUser
      if (!user) return

      await deleteUser(user)
      navigate("/introduce", { replace: true })
      toast.success(t("toast.sign.delete"))
      log("User deleted")
    } catch (error) {
      toast.error(t("common.error.main"))
      errorLog(error)
    }
  }

  return deleteAccount
}

export function useSignout() {
  const navigate = useNavigate()
  const deleteAccount = useDeleteAccount()
  const { t } = useTranslation()

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
        toast.success(t("toast.sign.signout"))
      }
    } catch(error) {
      toast.error(t("common.error.main"))
      errorLog(error)
    }
  }

  return signout
}
