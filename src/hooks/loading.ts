// This hooks manages loading states.

import { useAuthStore } from "@/store/auth"

export function useLoading() {
  const { userLoading: loading } = useAuthStore()
  return { loading }
}
