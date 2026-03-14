import { GoogleAuthProvider, linkWithPopup, signInAnonymously, signInWithPopup, deleteUser, getAuth } from "firebase/auth"
import { errorLog, log, auth } from "@/lib"

export async function signinWithGoogle() {
  try {
    const provider = new GoogleAuthProvider()
    await signInWithPopup(auth, provider)
    log("User signed in with Google successful")
  } catch(error) {
    errorLog(error, true)
  }
}

export async function upgradeWithGoogle() {
  try {
    const user = getAuth().currentUser
    if (!user) return
    const provider = new GoogleAuthProvider()
    await linkWithPopup(user, provider)
    log("User upgraded with Google successful")
  } catch (error) {
    errorLog(error, true)
  }
}

export async function signinWithGuest() {
  try {
    await signInAnonymously(auth)
    log("User signed in with guest successful")
  } catch (error) {
    errorLog(error, true)
  }
}

export async function deleteAccount() {
  const user = getAuth().currentUser
  if (user) {
    try {
      await deleteUser(user)
      log("User deleted")
    } catch (error) {
      errorLog(error, true)
    }
  }
}

export async function signout() {
  try {
    const user = getAuth().currentUser
    if (user?.isAnonymous) {
      await deleteAccount()
    } else {
      await auth.signOut()
      log("User signed out")
    }
  } catch(error) {
    errorLog(error, true)
  }
}
