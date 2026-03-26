// This file contains functions related to login.

import { GoogleAuthProvider, linkWithPopup, signInAnonymously, signInWithPopup, deleteUser, getAuth } from "firebase/auth"
import { auth } from "@/lib/firebase"
import { log, errorLog } from "@/lib/log"

export async function signinWithGoogle() {
  try {
    const provider = new GoogleAuthProvider()
    await signInWithPopup(auth, provider)
    log("User signed in with Google successful")
  } catch(error) {
    errorLog(error)
  }
}

export async function upgradeWithGoogle() {
  try {
    // Get now user
    const user = getAuth().currentUser
    if (!user || !user.isAnonymous) return

    // Link
    const provider = new GoogleAuthProvider()
    await linkWithPopup(user, provider)

    // Reload
    await user.reload()
    log("User upgraded with Google successful")
  } catch (error) {
    errorLog(error)
  }
}

export async function signinWithGuest() {
  try {
    await signInAnonymously(auth)
    log("User signed in with guest successful")
  } catch (error) {
    errorLog(error)
  }
}

export async function deleteAccount() {
  try {
    // Get now user
    const user = getAuth().currentUser
    if (!user) return

    // Delete
    await deleteUser(user)
    log("User deleted")
  } catch (error) {
    errorLog(error)
  }
}

export async function signout() {
  try {
    // Get now user
    const user = getAuth().currentUser
    if (!user) return

    // Signout
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
