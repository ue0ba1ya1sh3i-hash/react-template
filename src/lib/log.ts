import { FirebaseError } from "firebase/app"

export function errorLog(error: unknown, notice = false) {
  let errorType: "Firebase" | "Normal" | "Unknown"
  let errorCode: string
  let errorMessage: string

  if (error instanceof FirebaseError) {
    errorType = "Firebase"
    errorCode = error.code
    errorMessage = error.message
  } else if (error instanceof Error) {
    errorType = "Normal"
    errorCode = "Unknown"
    errorMessage = error.message
  } else {
    errorType = "Unknown"
    errorCode = "Unknown"
    errorMessage = String(error)
  }

  // ログ
  const errorData = new Error(`${errorType}-${errorCode} error: ${errorMessage}`)
  console.error(errorData)

  // 知らせる場合
  if (notice) {
    
  }
}

export function log(message: string) {
  console.log(message)
}
