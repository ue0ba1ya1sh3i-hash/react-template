// This file is signing functions.

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

export async function signinWithGoogle() {
  try {
    // Confirm user is not signed in
    const user = getAuth().currentUser
    if (user) return

    const provider = new GoogleAuthProvider()
    await signInWithPopup(auth, provider)
    log("User signed in with Google.")
  } catch(error) {
    errorLog(error)
  }
}

export async function upgradeWithGoogle() {
  try {
    // Confirm user is guest
    const user = getAuth().currentUser
    if (!user || !user.isAnonymous) return

    // Upgrade with Google
    const provider = new GoogleAuthProvider()
    await linkWithPopup(user, provider)

    // Reload
    await user.reload()
    log("User upgraded with Google.")
  } catch (error) {
    errorLog(error)
  }
}

export async function signinWithGuest() {
  try {
    // Confirm user is not signed in
    const user = getAuth().currentUser
    if (user) return

    await signInAnonymously(auth)
    log("User signed in with guest.")
  } catch (error) {
    errorLog(error)
  }
}

export async function deleteAccount() {
  try {
    // Confirm user is signed in
    const user = getAuth().currentUser
    if (!user) return

    await deleteUser(user)
    log("User deleted")
  } catch (error) {
    errorLog(error)
  }
}

export async function signout() {
  try {
    // Confirm user is signed in
    const user = getAuth().currentUser
    if (!user) return

    if (user.isAnonymous) {
      await deleteAccount()
    } else {
      await auth.signOut()
      log("User signed out")
    }
  } catch(error) {
    errorLog(error)
  }
}
