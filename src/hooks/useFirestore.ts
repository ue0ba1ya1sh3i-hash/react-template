import { useDocument } from "react-firebase-hooks/firestore"
import { db } from "@/lib"
import { doc } from "firebase/firestore"

export function useFirestore(documentId: string, collectionId: string) {
  const [value, loading, error] = useDocument(
    doc(db, documentId, collectionId)
  )

  return {
    firestoreResult: value,
    firestoreLoading: loading,
    firestoreError: error
  }
}
