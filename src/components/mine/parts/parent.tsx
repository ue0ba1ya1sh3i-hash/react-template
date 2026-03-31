// This file is a part for creating a settings page.

import { cn } from "@/lib/utils"

export function ParentParts({ children, className, ...props }: { children: React.ReactNode, className?: string }) {
  return (
    <div
      className={cn(`flex flex-col gap-3 p-4 border bg-muted/30 rounded-lg`, className)}
      {...props}
    >
      {children}
    </div>
  )
}
