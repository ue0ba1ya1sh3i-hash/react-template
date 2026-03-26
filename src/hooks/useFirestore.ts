// This file makes Firestore easier to use with hooks.

import { useDocument } from "react-firebase-hooks/firestore"
import { db } from "@/lib/firebase"
import { doc } from "firebase/firestore"

export function useFirestore(...path: [string, string, ...string[]]) {
  const [value, loading, error] = useDocument(doc(db, ...path))
  return {
    firestoreResult: value,
    firestoreLoading: loading,
    firestoreError: error
  }
}
