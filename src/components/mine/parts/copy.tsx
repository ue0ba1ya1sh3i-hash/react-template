// This file is a component that can be copied to the clipboard.

import { Copy, CopyCheck } from "lucide-react"
import { useState } from "react"
import { Button } from "@/components/ui/button"

export function CopyParts({ text }: { text?: string }) {
  const [isClicked, setIsClicked] = useState(false)

  const handleCopy = async () => {
    if (!text) return
    await navigator.clipboard.writeText(text)
    setIsClicked(true)
    setTimeout(() => setIsClicked(false), 2000)
  }

  if (!text) {
    return (
      <Button className="w-70" variant="outline">
        <p className="w-60 overflow-hidden truncate">Loading...</p>
        <Copy className="cursor-pointer w-10" />
      </Button>
    )
  }

  return (
    <Button className="w-70" onClick={handleCopy} variant="outline">
      <p className="w-60 overflow-hidden truncate">{text}</p>
      {isClicked ? (
        <CopyCheck className="cursor-pointer w-10" />
      ) : (
        <Copy className="cursor-pointer w-10" />
      )}
    </Button>
  )
}
