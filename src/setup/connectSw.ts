import { env } from "@/lib/env"

if (!env.dev && "serviceWorker" in navigator) {
  navigator.serviceWorker.register("/files/sw.js")
}
