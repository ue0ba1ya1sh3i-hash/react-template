// This file is a copy button.

import { Copy, CopyCheck } from "lucide-react"
import { useState } from "react"

// Components
import { Button } from "@/components/ui/button"

export function CopyButton({ text }: { text?: string }) {
  const [isClicked, setIsClicked] = useState(false)

  const handleCopy = async () => {
    if (!text) return

    // Copy
    await navigator.clipboard.writeText(text)

    // Show the check icon for 5 seconds
    setIsClicked(true)
    setTimeout(() => setIsClicked(false), 5000)
  }

  if (!text) {
    return (
      <Button className="w-50" variant="outline">
        <p className="w-40 overflow-hidden truncate text-left">Loading...</p>
        <Copy className="cursor-pointer w-10" />
      </Button>
    )
  }

  return (
    <Button className="w-50" onClick={handleCopy} variant="outline">
      <p className="w-40 overflow-hidden truncate text-left">{text}</p>
      {isClicked ? (
        <CopyCheck className="cursor-pointer w-10" />
      ) : (
        <Copy className="cursor-pointer w-10" />
      )}
    </Button>
  )
}
