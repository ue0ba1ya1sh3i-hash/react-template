import { useState } from "react"

export function useLoading() {
  const [map, setMap] = useState<{ [key: string]: boolean }>({})

  const start = (key: string) => {
    setMap(prev => ({ ...prev, [key]: true }))
  }

  const finish = (key: string) => {
    setMap(prev => ({ ...prev, [key]: false }))
  }

  const isLoading = Object.values(map).some(Boolean)

  return { start, finish, isLoading }
}
