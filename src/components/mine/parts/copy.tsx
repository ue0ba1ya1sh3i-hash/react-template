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
      <Button className="w-fit" variant="outline">
        Loading...
        <Copy className="cursor-pointer" />
      </Button>
    )
  }

  return (
    <Button className="w-fit" onClick={handleCopy} variant="outline">
      {text}
      {isClicked ? (
        <CopyCheck className="cursor-pointer" />
      ) : (
        <Copy className="cursor-pointer" />
      )}
    </Button>
  )
}
